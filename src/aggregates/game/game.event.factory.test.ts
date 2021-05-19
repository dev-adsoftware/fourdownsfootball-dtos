import { GameEventFactory } from './game.event.factory';

describe('given: game event factory', () => {
  describe('when: I create factory', () => {
    it('then: event list was correct', async () => {
      expect(new GameEventFactory().events).toMatchObject({
        'game.created': {},
        'coinface.chosen': {},
        'actor.changed': {},
        'cointoss.result': {},
        'kickoff.chosen': {},
        'direction.chosen': {},
        'offense-play.called': {},
        'defense-play.called': {},
        'play.result': {},
      });
    });
  });
});
