// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/styles/main.scss")]
    });
}

module.exports = {
  siteName: "Здесь Легко",
  titleTemplate: "Деньги под ПТС в Москве. 100 литров бензина бесплатно и 100% одобрение",
  plugins: [],
  chainWebpack(config) {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
};
