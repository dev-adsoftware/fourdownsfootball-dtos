import { TeamSummaryView } from '.';

describe('given: team summary data', () => {
  describe('when: I create a view', () => {
    it('then: TeamSummaryView was returned', async () => {
      const view = new TeamSummaryView().init({ id: 'jest.id' });
      expect(view).toEqual({ id: 'jest.id' });
    });
  });
});
