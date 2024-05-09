import { WordpressShortcodeWebpackPlugin } from 'wordpress-shortcode-webpack-plugin';

export default {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'App.#.js',
    },
    plugins: [
        new WordpressShortcodeWebpackPlugin({
            wordpressPluginName: 'my-awesome-plugin',
            headerFields: {
                author: 'Sagar',
                description: 'An awesome plugin that does many cool things',
                version: '1.2.3'
            }
        }),
    ],
}