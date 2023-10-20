const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        open: {
            app: {
                name: "chrome",
            }
        },
        hot: true,
    },
    // entry: '../CRAproject/src/index.tsx',
    entry: "./index.tsx",
    mode: "development",
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
        filename: 'bundle.js',
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