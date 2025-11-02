module.exports = function(eleventyConfig) {
  // Copy static files and admin folder directly to output
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("cms");
  eleventyConfig.addPassthroughCopy("invite-template.html");

  // Date filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    const { DateTime } = require("luxon");
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};