// ./.eleventy.build.js
//
// Clean, build, and optimize _site.
'use strict';

const { exec } = require('child_process');
const { promisify } = require('util');

const cheerio = require('cheerio');
const fileSysX = require('fs-extra');
const path = require('path');

const execAsync = promisify(exec);

module.exports = async () => {
  try {
    // Clean _site.
    await fileSysX.remove('docs');

    // Build _site.
    await execAsync('eleventy');

    // TODO: why does this delete everything?
    // // Optimize _site.
    // const siteFiles = await fileSysX.readdir('_site');
    // const htmlFiles = siteFiles.filter((file) => file.endsWith('.html'));

    // // Extract the referenced file paths from the HTML files.
    // const refedFiles = htmlFiles.flatMap((file) => {
    //   const content = fileSysX.readFileSync(
    //     path.join('_site', file), 
    //     'utf8'
    //   );
    //   const $ = cheerio.load(content);
    //   const refs = $('img, script, link[rel="stylesheet"]').map((i, el) => {
    //     const url = $(el).attr('src') || $(el).attr('href');
    //     return path.join('_site', url);
    //   }).get();
    //   return refs;
    // });

    // // Filter out unreferenced files.
    // const unrefedFiles = siteFiles.filter(
    //   (file) => !refedFiles.includes(file) && !file.endsWith('index.html')
    // );

    // // Remove unrefed files.
    // await Promise.all(unrefedFiles.map((file) => fileSysX.remove(
    //   path.join('_site', file)
    // )));

  } catch (error) {
    console.error('An error occurred: ', error);
  }
};

// Call the function.
module.exports().catch(error => {
  console.error('An error occurred:', error);
});
