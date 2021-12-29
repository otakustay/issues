const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
};
