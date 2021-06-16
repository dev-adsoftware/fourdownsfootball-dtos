import { FormalNameAttributes } from './attributes.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      expect(() =>
        new FormalNameAttributes().init({}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
