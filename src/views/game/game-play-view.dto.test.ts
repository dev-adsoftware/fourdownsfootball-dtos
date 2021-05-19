import { GamePlayView } from './game-play-view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new GamePlayView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'GamePlayView: id must be a string, offenseSequence must be a number string, offensePlay must be a string, offenseFormation must be an object, each value in offensePlayers must be a string, offensePlayers must contain at least 11 elements, offensePlayers must contain not more than 11 elements',
          ),
        );
      }
    });
  });
});
