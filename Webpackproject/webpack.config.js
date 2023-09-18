const path = require('path');

module.exports = {
    mode: "development",
    entry: '../CRAproject/src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "../CRAproject/tsconfig.json"
                    }
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};