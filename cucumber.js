// ./cucumber.cjs
//
// Config file for cucumber-js.
//   Note: cucumber is written in commonjs,
//   this will NOT work if changed to cucumber.config.json.
const config = {
  paths: ['__tests__/__features__/**/*.feature',],
  require: ['__tests__/__features__/**/*.steps.ts',],
  requireModule: ['ts-node/register',],
  format: [
    'summary',
    'progress-bar',
    '@cucumber/pretty-formatter',
  ],
  formatOptions: { snippetInterface: 'async-await' },
};

module.exports = {
 default: config
}
