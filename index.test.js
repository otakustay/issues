import {test, expect} from 'vitest';
import {foo} from './foo';
import {bar} from './bar';

test('foo', () => {
  expect(foo()).toBe(1);
});

test('bar', () => {
  expect(bar()).toBe(1);
});
