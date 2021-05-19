import { OffensePlayCalledEvent } from './offense-play-called-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new OffensePlayCalledEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'OffensePlayCalledEvent: play must be a string, formation must be a valid enum value, each value in players must be a string, players must contain not more than 11 elements, players must contain at least 11 elements',
          ),
        );
      }
    });
  });
});
