const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


const PUBLIC_PATH = path.resolve(__dirname, 'public');
const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = (env) => {
    const DEBUG = env.mode === 'development';

    return {
        entry: path.resolve(SRC_PATH, 'index.tsx'),

        output: {
            filename: 'bundle.js',
            path: BUILD_PATH,
        },

        devtool: 'inline-source-map',

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                namedExport: false,
                            },
                        },
                    },
                    ],
                },
                {
                    test: /\.css$/,
                    include: /node_modules/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name].[hash:8][ext]',
                    },
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                }
            ],
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.css'],
        },

        plugins: DEBUG
            ? []
            : [
                new CopyPlugin({
                    patterns: [PUBLIC_PATH],
                }),
            ],

        devServer: {
            static: PUBLIC_PATH,
            port: 8080,
            open: true,
        },
    };
};
