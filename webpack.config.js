// entry -> output

const path = require("path");



module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "public"),
        filename : "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env' , '@babel/preset-react']
              }
            }
          },
          {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }

        ]
      },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: false,
      port: 8080,
      historyApiFallback: true,
    },
}