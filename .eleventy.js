// ./.eleventy.js
//
// Eleventy configuration file.
module.exports = function(eleventyConfig) {
  
  // Copy `images/` to `_site/images/`
  eleventyConfig.addPassthroughCopy('images');
  // Copy `css/` to `_site/css/`
  eleventyConfig.addPassthroughCopy('css');
  // Copy `js/` to `_site/js/`
  eleventyConfig.addPassthroughCopy('js');
  // Copy `sass/` to `_site/sass/`
  eleventyConfig.addPassthroughCopy('sass');
  // Copy `twig/` to `_site/twig/`
  eleventyConfig.addPassthroughCopy('twig');

  return {
    dir: {
      input: '.',
      output: 'docs'
    },
    templateFormats: ['html'],
    passthroughFileCopy: true
  };
};