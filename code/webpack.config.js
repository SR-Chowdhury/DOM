const path = require('path');
const config = {
    // entry: './src/script/index.js',
    // entry: './01.Introduction_DOM.js',
    // entry: './02.Details_DOM.js',
    // entry: './03.Window_Document_DOM.js',
    // entry: './04.Basic_selectors.js',
    // entry: './05.QuerySelector_DOM.js',
    entry: './06.style_doc_DOM.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
module.exports = config;