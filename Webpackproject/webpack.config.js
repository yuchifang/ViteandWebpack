const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    entry: {
        index: {
            import: './src/index.tsx'
        }
    },
    mode: process.env?.NODE_ENV ? process.env.NODE_ENV : "development",
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset',
                parser: { // ***
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },
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
        moduleIds: "deterministic",
        splitChunks: {
            minSize: 1,
            // chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial',
                },
                xlsxChunks: {
                    test: /[\\/]node_modules[\\/]xlsx[\\/]/,
                    name: 'xlsxChunk',
                }
            },
        }
    },
    output: {
        clean: true,
        filename: '[name].[contenthash:5].js',
        path: path.resolve(__dirname, 'webpackBuild'),
        assetModuleFilename: '[contenthash:5]~[ext][query]',
        library: {
            type: "module"
        }
    },
    experiments: {
        outputModule: true,
    },
    performance: {
        maxAssetSize: 5120000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            filename: "index.html",
            template: "./index.html",
        }),
        new BundleAnalyzerPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.d.ts'],
    },
};