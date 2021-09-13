/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = require("babel-jest").createTransformer({
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
});
