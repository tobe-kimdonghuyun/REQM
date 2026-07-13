const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const packageJson = require('./package.json');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true, // /cart, /nexacro 같은 클라이언트 라우트 새로고침 대응
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    // NexacroPage에서 process.env.NEXACRO_REMOTE_URL을 읽어 <nexacro-remote src="..."> 를 구성한다.
    // 값을 지정하지 않으면 빈 문자열 → nexacro-remote-element가 플레이스홀더를 표시한다.
    new webpack.EnvironmentPlugin({
      NEXACRO_REMOTE_URL: '',
    }),
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        // 환경변수로 remote 주소를 바꿀 수 있게 해, 나중에 배포 환경별 원격 주소 전환에 대비한다.
        cart: `cart@${process.env.CART_REMOTE_URL || 'http://localhost:3001'}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, requiredVersion: packageJson.dependencies.react },
        'react-dom': { singleton: true, requiredVersion: packageJson.dependencies['react-dom'] },
        'react-router-dom': { singleton: true, requiredVersion: packageJson.dependencies['react-router-dom'] },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
