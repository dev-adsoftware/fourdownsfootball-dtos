import { PlayerSummaryView } from './player-summary-view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new PlayerSummaryView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'PlayerSummaryView: id must be a string, sequence must be a number string, teamId must be a string, attributes must be an object',
          ),
        );
      }
    });
  });
});
