import { ActorChangedEvent } from './actor-changed-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new ActorChangedEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'ActorChangedEvent: oldActor must be a string, newActor must be a string',
          ),
        );
      }
    });
  });
});
