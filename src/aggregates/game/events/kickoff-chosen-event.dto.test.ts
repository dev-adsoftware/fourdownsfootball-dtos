import { KickoffChosenEvent } from './kickoff-chosen-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new KickoffChosenEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error('KickoffChosenEvent: choice must be a valid enum value'),
        );
      }
    });
  });
});
