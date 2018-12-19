const path = require('path');
module.exports = {
    entry: ['./src/index.js', './src/styles/style.scss'],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'styles/[name].css'
                        }
                    },
                    'extract-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    watch: true,
    devServer: {
        contentBase: './',
        publicPath: '/dist/'
    },
    plugins: [],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
}