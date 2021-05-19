import { PlayResultEvent } from './play-result-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new PlayResultEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'PlayResultEvent: nextSeed must be a number conforming to the specified constraints',
          ),
        );
      }
    });
  });
});
