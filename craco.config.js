const CracoAlias = require("craco-alias");

module.exports = {
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
