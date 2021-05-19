import { PlayerAssignedEvent } from './player-assigned-event.dto';

describe('given: missing data', () => {
  describe('when: I initialize', () => {
    it('then: error matched snapshot', async () => {
      try {
        expect(new PlayerAssignedEvent().init({})).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'PlayerAssignedEvent: playerId must be a string, playerSequence must be a number string',
          ),
        );
      }
    });
  });
});
