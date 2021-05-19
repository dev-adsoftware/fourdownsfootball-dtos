import { TeamSummaryView } from './team-summary-view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new TeamSummaryView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'TeamSummaryView: id must be a string, sequence must be a number string, city must be a string, state must be a string, country must be a string, nickname must be a string, abbreviation must be a string, pluralNickname must be a string, shortNickname must be a string, ownerUsername must be a string',
          ),
        );
      }
    });
  });
});
