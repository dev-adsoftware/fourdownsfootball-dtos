import { PlayerSummaryView } from '.';

describe('given: player summary data', () => {
  describe('when: I create a view', () => {
    it('then: PlayerSummaryView was returned', async () => {
      const view = new PlayerSummaryView().init({ placeholder: 'jest' });
      expect(view).toEqual({ placeholder: 'jest' });
    });
  });
});