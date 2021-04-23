import { TeamSummaryView } from '.';

describe('given: team summary data', () => {
  describe('when: I create a view', () => {
    it('then: TeamSummaryView was returned', async () => {
      const view = new TeamSummaryView().init({ placeholder: 'jest' });
      expect(view).toEqual({ placeholder: 'jest' });
    });
  });
});