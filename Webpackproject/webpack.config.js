const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        // devMiddleware: {
        // writeToDisk: true,
        // },
        open: {
            app: {
                name: "chrome",
            }
        },
        hot: true,
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
        ],
    },
    output: {
        clean: true,
        filename: '[name].[contenthash:5].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            filename: "index.html",
            template: "./index.html",
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};