import { DatePrettyPipe } from './date-pretty.pipe';

describe('DatePrettyPipe', () => {
  it('create an instance', () => {
    const pipe = new DatePrettyPipe();
    expect(pipe).toBeTruthy();
  });
});
