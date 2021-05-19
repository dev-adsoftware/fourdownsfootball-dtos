import { FormationSummaryView } from './formation-summary-view.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new FormationSummaryView().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'FormationSummaryView: name must be a string, sequence must be a number string, formationType must be a valid enum value, each value in positionMap must be a string, positionMap must contain not more than 11 elements, positionMap must contain at least 11 elements',
          ),
        );
      }
    });
  });
});
