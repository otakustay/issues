import {test, expect} from 'vitest';

const print = () => {
    const message = `
export default function () {
    function Foo() {
    }

    return Foo;
}
`;
    return message;
}

test('issuse', () => {
    expect(print()).toMatchSnapshot();
});
