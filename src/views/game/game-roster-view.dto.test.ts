import { GameRosterView } from '.';
import { PlayerSummaryView } from '..';

describe('given: game roster data', () => {
  describe('when: I create a view', () => {
    it('then: GameRosterView was returned', async () => {
      const view = new GameRosterView().init({
        id: 'jest.game.id',
        sequence: '0',
        awayTeamRoster: [
          new PlayerSummaryView().init({
            id: 'jest.player.1',
            sequence: '0',
            teamId: 'jest.awayTeamId',
            firstName: 'jest.player.1.firstName',
            lastName: 'jest.player.1.lastName',
            suffix: '',
            kicking: 75,
          }),
        ],
        homeTeamRoster: [
          new PlayerSummaryView().init({
            id: 'jest.player.2',
            sequence: '0',
            teamId: 'jest.homeTeamId',
            firstName: 'jest.player.2.firstName',
            lastName: 'jest.player.2.lastName',
            suffix: '',
            kicking: 60,
          }),
        ],
      });
      expect(view).toEqual({
        awayTeamRoster: [
          {
            firstName: 'jest.player.1.firstName',
            id: 'jest.player.1',
            kicking: 75,
            lastName: 'jest.player.1.lastName',
            sequence: '0',
            suffix: '',
            teamId: 'jest.awayTeamId',
          },
        ],
        homeTeamRoster: [
          {
            firstName: 'jest.player.2.firstName',
            id: 'jest.player.2',
            kicking: 60,
            lastName: 'jest.player.2.lastName',
            sequence: '0',
            suffix: '',
            teamId: 'jest.homeTeamId',
          },
        ],
        id: 'jest.game.id',
        sequence: '0',
      });
    });
  });
});
