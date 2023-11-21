module.exports = function (eleventyConfig){
    
    eleventyConfig.addPassthroughCopy("assests");
    
    return{
        dir: {
            input: "src",
            output: "_site",
        },
    };
};