const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 開発用の設定
  mode: 'development',

  // エントリポイントとなるコード
  entry: './src/index.tsx',

  // バンドル後の js ファイルの出力先
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  // import 時に読み込むファイルの拡張子
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },

  // ソースマップファイルの出力設定
  devtool: 'source-map',

  module: {
    rules: [
      // TypeScript ファイル (.ts/.tsx) を変換できるようにする
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    // HTML ファイルの出力設定
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // フォントのmap設定。react-pdfのリポジトリにある書き方は若干古い
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "node_modules/pdfjs-dist/cmaps/",
          to: "cmaps/",
        },
      ],
    }),
  ]
};