import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Для підтримки __dirname в ES модулях використовуємо import.meta.url
const dirname = new URL('.', import.meta.url).pathname;

export default {
  mode: 'development',
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(dirname.slice(1), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            sourceType: 'module',
          },
        },
      },
    ],
  },
  plugins: [
    // Генерація index.html
    new HtmlWebpackPlugin({
      template: './html/index.html',
      filename: 'index.html', // Це дозволяє зберегти оригінальний файл як index.html
    }),
    // Генерація інших HTML файлів
    new HtmlWebpackPlugin({
      template: './html/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './html/contacts.html',
      filename: 'contacts.html',
    }),
    new HtmlWebpackPlugin({
      template: './html/group.html',
      filename: 'group.html',
    }),
    new HtmlWebpackPlugin({
      template: './html/hobbies.html',
      filename: 'hobbies.html',
    }),
    new HtmlWebpackPlugin({
      template: './html/profession.html',
      filename: 'profession.html',
    }),
    new HtmlWebpackPlugin({
      template: './html/university.html',
      filename: 'university.html',
    }),
  ],
  devtool: 'source-map',
};
