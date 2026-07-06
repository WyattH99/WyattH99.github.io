# WyattH99.github.io

Personal portfolio site — live at https://wyatth99.github.io

Built with Jekyll + Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
bundle install
npm install
npm start        # jekyll serve (:4000) + postcss --watch
```

## Build

```bash
npm run build    # clean + jekyll build + postcss -> _site/
```

## Deploy

Push to `main` — `.github/workflows/build-jekyll.yml` builds the site and
deploys it (Pages source is set to "GitHub Actions"). Failed builds deploy
nothing; the site stays on the previous version.

## Layout

- `index.html` — single page assembled from `_includes/*.html` section files
- `_layouts/default.html` — head (meta/OG/JSON-LD), header, footer
- `assets/` — images, videos (project cards use VP8 webm + poster), resume PDF
- `ROADMAP.md` — planned work, excluded from the built site
