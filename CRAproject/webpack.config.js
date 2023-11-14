const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        hot: true,
        open: {
            app: {
                name: "chrome",
            }
        },
        port: 8080,

    },
    entry: './src/index.tsx',
    mode: process.env?.NODE_ENV ? process.env.NODE_ENV : "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: { noEmit: false, }
                    }
                    // options: {
                    //     configFile: "../CRAproject/tsconfig.json"
                    // }
                }],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader',
                options: {
                    name: "[name]~[contenthash:5].[ext]",
                    limit: 8192,
                }
            }
        ],
    },
    output: {
        clean: true,
        filename: '[name].[contenthash:5].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}