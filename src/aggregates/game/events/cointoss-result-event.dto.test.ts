import { CoinTossResultEvent } from './cointoss-result-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new CoinTossResultEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'CoinTossResultEvent: actual must be a valid enum value, winner must be a string, nextSeed must be a number conforming to the specified constraints',
          ),
        );
      }
    });
  });
});
