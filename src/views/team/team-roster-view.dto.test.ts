import { TeamRosterView } from '.';

describe('given: team roster data', () => {
  describe('when: I create a view', () => {
    it('then: TeamRosterView was returned', async () => {
      const view = new TeamRosterView().init({
        id: 'jest.team.id',
        sequence: '0',
        players: [],
      });
      expect(view).toEqual({ id: 'jest.team.id', sequence: '0', players: [] });
    });
  });
});
