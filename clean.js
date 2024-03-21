// ./clean.js
//
// Script to remove all non-ref-ed files in _site.
const cheerio = require('cheerio');
const fs = require('fs-extra');
const glob = require('glob');

const path = require('path');

// Get all files in the _site directory
const siteFiles = glob.sync('_site/**/*.*');

// Get all HTML files in the project
const htmlFiles = glob.sync('_site/**/*.html');

// Extract the referenced file paths from the HTML files
const referencedFiles = htmlFiles.flatMap(
  (file) => {
    const content = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(content);
    const refs = $('img, script, link[rel="stylesheet"]').map((i, el) => {
        const url = $(el).attr('src') || $(el).attr('href');
        return path.join('_site', url);
    }).get();
    return refs;
});

// Get the files in the _site directory that are not referenced
const unreferencedFiles = siteFiles.filter(file => !referencedFiles.includes(file));

// Delete the unreferenced files
unreferencedFiles.forEach(file => fs.removeSync(file));
