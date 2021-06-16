import { GameStateAttributes } from './game-state.attributes.dto';

describe('given: missing player data', () => {
  describe('when: I create initialize', () => {
    it('then: error matched snapshot', async () => {
      expect(() =>
        new GameStateAttributes().init({}),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
