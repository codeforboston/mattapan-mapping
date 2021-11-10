const CracoAlias = require("craco-alias");

module.exports = {
  babel: {
    loaderOptions: {
      ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: "./",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.extend.json"
      }
    }
  ]
};
