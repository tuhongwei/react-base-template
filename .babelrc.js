module.exports = {
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "env": {
    "test": {
      "presets": ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
    }
  }
};
