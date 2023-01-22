import {transform} from '@babel/core';
import pluginEmotion from '@emotion/babel-plugin';
import {test, expect} from 'vitest';

test('esm', () => {
    const options = {
        plugins: [
            pluginEmotion.default,
            {
                sourceMap: false,
                autoLabel: 'always',
            },
        ],
    };

    const result = transform('const x = 3;');
    expect(result.code).toBeTruthy();
});
