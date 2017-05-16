
module.exports = {
  entry: "./js/main.js",  //入口文件
  output: {
    path: __dirname + "/js",  //打包后文件存放位置
    filename: "bundle.js"  //打包后输出文件
  },
  externals: {
    jquery: "jQuery",
  }
}