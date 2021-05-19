import { GameRosterView } from './game-roster-view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new GameRosterView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'GameRosterView: id must be a string, sequence must be a number string, awayTeamRoster must be an array, homeTeamRoster must be an array',
          ),
        );
      }
    });
  });
});
