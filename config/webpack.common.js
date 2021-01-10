const paths = require( './paths' );

module.exports = {
    entry: {
        vendor: paths.src + '/apps/_vendor/vendor.js',
        second_app: paths.src + '/apps/second_app/main.js',
        html_nodes_prototype: paths.src + '/apps/html_nodes_prototype/main.js',
    },

    module: {
        rules: [{ test: /\.m?js$/, use: ['babel-loader'] }],
    },
};
