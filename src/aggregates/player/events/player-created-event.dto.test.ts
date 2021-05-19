import { PlayerCreatedEvent } from './player-created-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new PlayerCreatedEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'PlayerCreatedEvent: id must be a string, teamId must be a string, attributes must be an object',
          ),
        );
      }
    });
  });
});
