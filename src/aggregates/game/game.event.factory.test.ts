import { GameCreatedEvent, GameEventFactory } from '.';

describe('given: game created event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: GameCreatedEvent was returned', async () => {
      const event = GameEventFactory.create('game.created', {
        homeUsername: 'jest.homeUsername',
        homeTeamId: 'jest.homeTeamId',
        awayUsername: 'jest.awayUsername',
        awayTeamId: 'jest.awayTeamId',
      });
      expect(event instanceof GameCreatedEvent).toBeTruthy();
    });
  });
});

describe('given: invalid game event type', () => {
  describe('when: I create an event with the factory', () => {
    it('then: unknown event type error was thrown', async () => {
      expect(() => GameEventFactory.create('invalid', {})).toThrow(
        'Unknown event type',
      );
    });
  });
});
