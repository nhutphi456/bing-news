const path = require('path');

module.exports = {
    entry: './src/index.ts', // Replace with your entry TypeScript file
    output: {
        filename: 'bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    resolve: {
        extensions: ['.ts', '.js'], // Allow importing TypeScript files without extensions
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', // Use ts-loader for TypeScript files
                exclude: /node_modules/,
            },
        ],
    },
    watch: true,
    devtool: 'cheap-module-source-map',
};
