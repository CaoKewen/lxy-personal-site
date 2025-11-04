module.exports = function(eleventyConfig) {

  // 复制 editor 文件夹到输出目录
  eleventyConfig.addPassthroughCopy({ "editor": "editor" });
  
  // 复制 src/static 的内容到输出目录根目录
  eleventyConfig.addPassthroughCopy({ "src/static": "." });

  // 配置 posts 集合 - 收集所有带 tags: posts 的文章
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => {
      return a.date - b.date; // 按日期排序
    });
  });

  // 按分类创建集合
  eleventyConfig.addCollection("homework", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.data.category === "Homework" && item.data.tags && item.data.tags.includes("posts");
    }).sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("paperReading", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.data.category === "PaperReading" && item.data.tags && item.data.tags.includes("posts");
    }).sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("insights", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.data.category === "Insights" && item.data.tags && item.data.tags.includes("posts");
    }).sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("musings", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.data.category === "Musings" && item.data.tags && item.data.tags.includes("posts");
    }).sort((a, b) => b.date - a.date);
  });

  // Date filter - 格式化日期
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
