import { BigNumPipe } from './big-num.pipe';

describe('BigNumPipe', () => {
  it('create an instance', () => {
    const pipe = new BigNumPipe();
    expect(pipe).toBeTruthy();
  });
});
