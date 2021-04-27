import { PlayerSummaryView } from '.';

describe('given: player summary data', () => {
  describe('when: I create a view', () => {
    it('then: PlayerSummaryView was returned', async () => {
      const view = new PlayerSummaryView().init({
        id: 'jest.player.id',
        sequence: '0',
        firstName: 'jest.firstname',
        lastName: 'jest.lastname',
        suffix: '',
        teamId: 'jest.team.id',
        kicking: 50,
      });
      expect(view).toEqual({
        id: 'jest.player.id',
        sequence: '0',
        firstName: 'jest.firstname',
        lastName: 'jest.lastname',
        suffix: '',
        teamId: 'jest.team.id',
        kicking: 50,
      });
    });
  });
});
