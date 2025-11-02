module.exports = function(eleventyConfig) {

  // ↓↓↓ 这是你项目原始的、正确的复制语法 ↓↓↓
  // 1. 复制 "cms" 文件夹 (从根目录) 到 "_site/cms"
  eleventyConfig.addPassthroughCopy({ "editor": "editor" });

  // 2. 复制 "src/static" 的 *内容* (从 src/static) 到 "_site/"
  eleventyConfig.addPassthroughCopy({ "src/static": "." });
  // ↑↑↑ 修改完毕 ↑↑↑

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