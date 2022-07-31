const { merge }    = require('webpack-merge');//webpack-mergeの読み込み
const commonConfig = require('./webpack.common');//webpackのcommon設定ファイルの読み
const path         = require('path');//Nodeのpathモジュールの使用

module.exports = merge(commonConfig, {
  mode: 'development',//webpackの出力モードを設定
  watch: true,        //ファイルの更新を監視する
  devServer: {
    open: true,//サーバー起動時に自動的にブラウザが開くように
    port: 8080,//サーバーのポート番号
    contentBase: path.resolve(__dirname, 'public'),//起動するルートの設定
    historyApiFallback: true, //React Routerの更新時にページがリセットされないように
  }
});