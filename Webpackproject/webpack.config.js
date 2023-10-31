const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    entry: {
        index: {
            import: './src/index.tsx'
        }
    },
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
    optimization: {
        // moduleIds: "deterministic",
        splitChunks: {
            chunks: "all",
        }
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
        }),
        new BundleAnalyzerPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};