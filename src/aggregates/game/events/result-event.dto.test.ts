import { ResultEvent } from './result-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new ResultEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'ResultEvent: nextSeed must be a number conforming to the specified constraints, source must be a string, type must be a string, version must be a string',
          ),
        );
      }
    });
  });
});
