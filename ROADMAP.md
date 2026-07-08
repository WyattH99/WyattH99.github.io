# Roadmap

Parking lot from the 2026-07-03 performance/content session — items to discuss
and prioritize later, none committed work yet. Ordered roughly by value.
"(needs Wyatt)" = facts/decisions only Wyatt has; "(mechanical)" = can be done
straight away once green-lit.

## Content — the highest-value work left (added 2026-07-03)

The site's technical foundation is in good shape (see git history for the
perf pass); what's left that moves the needle is content.

- [x] **Rewrite the landing bio.** Done 2026-07-06: now covers the TAMU BS,
      the UT Austin MSE, the embedded foundation, and COTW (including the
      AI-directed development framing). Grounded only in facts already on the
      site — revise if any phrasing feels off.
- [ ] **Bring the Experiences section past 2021.** (needs Wyatt) It currently
      ends at internships + BUILD, implying the career paused. Add full-time
      roles: names, dates, one-liners, a photo/logo each.
- [ ] **Update the resume PDF** (`assets/WyattHansen_Resume.pdf`). (needs
      Wyatt) The footer links it prominently and it predates COTW and the MSE.
      A stale PDF undercuts the site.
- [ ] **Add the two orphaned projects.** (needs Wyatt: 2–3 sentences each)
      `HomeSecuritySystemAndGateOpener.jpg` and `7SegmentDisplay.jpg` sit in
      assets with no cards.
- [ ] **Tech-tag chips on project cards** (`STM32` `React` `FPGA` `RTOS` …).
      (mechanical once tags are picked) Recruiters skim; dense paragraphs hide
      the keywords. Small `sectioncards.html` extension.

## Mobile experience (added 2026-07-03)

The layout is responsive and was spot-checked at 390px, but it has never had
a deliberate mobile pass. Do a real-device audit, then fix what it finds:

- [ ] **Real-device pass: iOS Safari (iPhone AND iPad) + Android Chrome.**
      Specific things to verify:
      - The project **videos are WebM/VP8** — old iOS (< 16.4) can't play
        WebM and will show only the poster frame. Acceptable fallback, but
        confirm on real devices; if any that matter fail, add an MP4/H.264
        `<source>` fallback (needs a full ffmpeg build — the Playwright one
        used for encoding has no x264).
      - **iOS Low Power Mode suppresses autoplay** — check the posters read
        well as static images, since that's what those users see.
      - Lazy-loaded images appear promptly while flick-scrolling (no blank
        cards on fast scrolls).
      - Sticky header/footer behavior as mobile browser chrome collapses.
- [x] **Touch affordances for linked cards.** Done 2026-07-08: every linked
      card shows an always-visible corner badge naming the destination
      (Play / GitHub / Website / Program / Course + ↗), via a `link_label`
      param on `sectioncards.html`. Unlinked cards show nothing.
- [x] **`text-justify` paragraphs on narrow columns.** Done 2026-07-08:
      card paragraphs and the landing bio are `text-left md:text-justify` —
      left-aligned on phones, justified from md up.
- [x] **Tap targets in the header nav.** Done 2026-07-08: padding moved
      from the `<li>` (which never extended the hit area) onto the `<a>` —
      36×64 px targets on mobile, unchanged look on desktop; mobile anchor
      offset bumped to scroll-mt-32 for the taller header.
- [x] **Sticky footer costs viewport height on phones.** Done 2026-07-08:
      `sticky` → `md:sticky`, so the footer scrolls with the page on phones
      (full viewport for content) and stays pinned on desktop.
- [ ] **Cellular data cost:** ~2 MB of video autoplays on load. If mobile
      traffic ever matters (see analytics item), consider poster-until-tap on
      small screens / respect Save-Data, via a few lines of
      IntersectionObserver JS.
- [ ] **Smallest widths:** check 320–375 px (iPhone SE) and ~280 px
      (foldables) — the `text-6xl` section titles and header nav wrap.
- [x] **Acceptance bar:** run PageSpeed Insights (mobile, throttled) and keep
      a green score. Baseline 2026-07-08 (local Lighthouse at PSI defaults;
      anonymous PSI API was over quota): Performance 93 · Accessibility 95 ·
      Best Practices 100 · SEO 100; FCP 0.9s, LCP 2.5s, TBT 220ms, CLS 0,
      payload 2.9MB. Re-run after big changes and keep ≥90.
      **2026-07-08 after a11y + WebP work: 95 · 100 · 100 · 100; LCP 1.6s,
      CLS 0, payload 2.4MB (of which ~2MB is the two project videos).**

Follow-ups the Lighthouse run surfaced (added 2026-07-08):

- [x] **Footer icon links have no accessible name.** Done 2026-07-08:
      aria-labels on the four footer links AND the header logo link (whose
      text is hidden on mobile — it was the last failing node). Local
      Lighthouse accessibility now **100**.
- [x] **Image format/sizing headroom.** Done 2026-07-08: every card image,
      poster, and the headshot is WebP with a 600px variant; sectioncards
      derives `srcset`/`sizes` from the picture path. Desktop 1x pulls the
      600px files, 3x phones the full size. LCP 2.5s → 1.6s.
- [ ] **"Efficient cache lifetimes" finding (~2.6MB)** is the known GitHub
      Pages 10-minute max-age — unfixable without the custom domain + CDN
      item above; listed here so future runs aren't re-investigated.

## UX polish (added 2026-07-03)

- [x] **Anchor links land under the sticky header** — nav clicks scroll
      section titles partially behind it. Done 2026-07-06: `scroll-mt-14` on
      all sections + `motion-safe:scroll-smooth` on `<html>`.
- [x] **`prefers-reduced-motion`:** pause/avoid video autoplay for users with
      reduced motion set. Done 2026-07-06: a small head script strips
      autoplay, pauses the videos, and shows controls instead.

## SEO / discoverability (added 2026-07-03)

- [x] **Heading hierarchy.** Done 2026-07-06: one `h1` (landing name), `h2`
      section titles, `h3` card headings; the header logo text and landing
      bio are no longer headings.
- [ ] **Page title:** "Wyatt Hansen" → "Wyatt Hansen — Software & Embedded
      Systems Engineer" (or similar). (needs Wyatt: pick the phrasing)
- [x] **JSON-LD `Person` structured data** linking the site, GitHub, and
      LinkedIn. Done 2026-07-06 in `default.html` (name, image, alumniOf,
      sameAs).
- [ ] **Custom domain** (~$10/yr, e.g. wyatthansen.dev). Looks better on a
      resume than wyatth99.github.io, and fronting it with Cloudflare fixes
      the one perf lever GitHub Pages won't (fixed 10-min cache headers).
      (needs Wyatt: buy the domain)
- [ ] **Analytics** — currently zero visibility into visits. GoatCounter or
      Cloudflare analytics are free and cookie-banner-free (same reasoning as
      COTW's no-banner decision). (needs Wyatt: pick provider)

## Housekeeping (added 2026-07-03)

- [x] **Purge dead assets.** Done 2026-07-06: 13 unreferenced files removed
      (grep-verified) — construction placeholder, duplicate diploma/robot-arm
      images, unused icon SVGs. Kept `7SegmentDisplay.jpg` and
      `HomeSecuritySystemAndGateOpener.jpg` for their future cards.
- [x] **Real README** documenting the dev loop, build, and deploy flow.
      Done 2026-07-06.
- [x] **`404.html`** — was GitHub's generic 404. Done 2026-07-06: styled page
      using the default layout.
- [ ] **COTW code link (optional):** the card says "play it live"; if the
      `WyattH99/cotw` repo ever goes public, add a "code on GitHub" line to
      the card. (needs Wyatt: decision)
