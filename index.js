const babel = require('@babel/core');

const config = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'ie 10',
                useBuiltIns: 'usage',
                corejs: 3,
            },
        ],
    ],
};

const result = babel.transform('"".replaceAll(/abc/g, "xyz")', config);

console.log(result.code);
