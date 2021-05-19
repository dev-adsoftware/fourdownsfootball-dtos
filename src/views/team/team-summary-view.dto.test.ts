import { TeamSummaryView } from './team-summary-view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new TeamSummaryView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'TeamSummaryView: id must be a string, sequence must be a number string, ownerUsername must be a string, attributes must be an object',
          ),
        );
      }
    });
  });
});
