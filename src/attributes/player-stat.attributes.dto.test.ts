import { PlayerStatAttributes } from './player-stat.attributes.dto';

describe('given: missing player data', () => {
  describe('when: I create initialize', () => {
    it('then: error matched snapshot', async () => {
      expect(() =>
        new PlayerStatAttributes().init({}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});