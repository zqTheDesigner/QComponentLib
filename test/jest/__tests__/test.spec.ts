import { testService } from '../../../src/services/test-service';

const { testStr } = testService();

describe('test()', () => {
  it('returns an test message', () => {
    expect(testStr()).toStrictEqual('test');
  });
});
