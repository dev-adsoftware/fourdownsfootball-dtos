import { PlayResultAttributes } from './play-result.attributes.dto';

describe('given: missing player data', () => {
  describe('when: I create initialize', () => {
    it('then: error matched snapshot', async () => {
      expect(() =>
        new PlayResultAttributes().init({}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
