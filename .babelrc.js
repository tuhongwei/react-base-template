module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  "plugins": ["syntax-dynamic-import", ["import", {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }]]
};
