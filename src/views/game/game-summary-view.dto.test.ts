import { GameSummaryView } from './game-summary-view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new GameSummaryView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'GameSummaryView: id must be a string, sequence must be a number string, currentSeed must be a number conforming to the specified constraints, state must be a valid enum value, actor must be a string, homeUsername must be a string, homeTeamId must be a string, homeTeam must be an object, awayUsername must be a string, awayTeamId must be a string, awayTeam must be an object',
          ),
        );
      }
    });
  });
});
