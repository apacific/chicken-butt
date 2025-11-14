import { cn } from '../lib/cn';
describe('cn', () => {
  it('joins class names', () => {
    expect(cn('a', 'b', false, null, undefined, 'c')).toBe('a b c');
  });
});
