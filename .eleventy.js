// docs: https://www.11ty.io/docs/config/
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // eleventyConfig.setTemplateFormats([
  //   "css" // css is not yet a recognized template extension in Eleventy
  // ]);

  //// if you want a separate css file, instead of inlined
  // eleventyConfig.addPassthroughCopy({ "src/css/": "./css/" });
  // eleventyConfig.addWatchTarget("./src/css/");

  //// Copy over assets/ folder
  eleventyConfig.addPassthroughCopy({
    "src/vanillajsacademy/assets/": "./vanillajsacademy/assets/",
  });

  //// https://www.11ty.dev/docs/quicktips/inline-css/
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addCollection("orderedProjects", function (collection) {
    return collection.getFilteredByTag("projects").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
