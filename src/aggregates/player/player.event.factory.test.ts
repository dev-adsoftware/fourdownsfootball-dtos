import { PlayerEventFactory } from '.';

describe('given: player event factory', () => {
  describe('when: I create factory', () => {
    it('then: event list was correct', async () => {
      expect(new PlayerEventFactory().events).toMatchObject({
        'player.created': {},
        /* autogen replace: do not remove */
      });
    });
  });
});
