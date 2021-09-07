/*
 * @Autor: 陈钊贤
 * @Version: 1.0
 * @Date: 2020-05-22 13:50:58
 * @LastEditors: 陈钊贤
 * @Description:
 * @LastEditTime: 2021-09-06 14:57:01
 */
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
//
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "././" : "/", //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: "dist", //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "static", // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true, //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,

  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: "src/main.ts", // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: "public/index.html", // 模板来源
      filename: "index.html", // 在 dist/index.html 的输出
      title: "兴诺充电云", // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ["chunk-vendors", "chunk-common", "index"], // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    },
  },
  devServer: {
    //  proxy: "http://192.168.12.223",
    // proxy: "http://licz-test.zq.smartpevc.com:8083",
    proxy: "http://47.115.147.82/",
    // proxy: "http://10.0.110.86/",
    // proxy: "http://10.0.110.86/",
    // proxy: "https://opr.saas.smartpevc.com/",
    port: 8083,
    host: "0.0.0.0",
    // proxy: 'http://sys.saas-test.smartpevc.com'
  },

  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias.set("@", resolve("src"));
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .loader("eslint-loader")
      .tap((options) => {
        options.fix = true;
        return options;
      });
  },
  configureWebpack: (config) => {
    // 保持类名不被压缩
    config.optimization.minimizer[0].options.terserOptions.keep_fnames = true;
  },
};
