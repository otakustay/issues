module.exports = {
    mode: 'development',
    entry: './index.js',
    module: {
        rules: [
            {
                assert: {
                    type: 'string',
                },
                type: 'asset/source',
            },
        ],
    },
};
