const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

console.log(process.env.NODE_ENV_MODE)

let isDev = process.env.NODE_ENV_MODE === 'development' || process.env.NODE_ENV_MODE === undefined; // проверка на undefined нужна при запуске devServer, когда NODE_ENV_MODE === undefined

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
    },
    output: {
        publicPath: '',
        path: isDev ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'public'),
        filename: isDev ? '[name].js' : './js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: "css-loader"
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:  isDev ? '[name].[ext]' : '/img/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(csv|tsv)$/i,
                loader: 'csv-loader',
            },
            {
                test: /\.xml$/i,
                loader: 'xml-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            chunks: ['index'],
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '/css/[name].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/js/slick.min.js"),
                }
            ]
        })
    ],
    devServer: {
        contentBase: './dist',
        port: 3001,
        index: 'index.html'
    },
    devtool: 'inline-source-map',
}