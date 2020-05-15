// docs: https://www.11ty.io/docs/config/
const CleanCSS = require("clean-css");


module.exports = function(eleventyConfig) {
  
    // eleventyConfig.setTemplateFormats([
    //   "css" // css is not yet a recognized template extension in Eleventy
    // ]);

    // https://www.11ty.dev/docs/quicktips/inline-css/
    eleventyConfig.addFilter("cssmin", function(code) { 
      return new CleanCSS({}).minify(code).styles;
    });
   
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    };
  };