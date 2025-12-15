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
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource', // This tells webpack to treat these files as assets
            generator: {
            // Optional: Customize the output filename and path
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
