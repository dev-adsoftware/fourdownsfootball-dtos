import { PlayerCreatedEvent, PlayerEventFactory } from '.';

describe('given: invalid event type', () => {
  describe('when: I create an event with the factory', () => {
    it('then: unknown event type error was thrown', async () => {
      expect(() => new PlayerEventFactory().create('invalid', {})).toThrow(
        'Unexpected error creating event type invalid',
      );
    });
  });
});
describe('given: player created event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: PlayerCreatedEvent was returned', async () => {
      const event = new PlayerEventFactory().create('player.created', {
        id: 'jest.player.id',
        firstName: 'jest.firstName',
        lastName: 'jest.lastName',
        suffix: '',
        teamId: 'jest.team.id',
        kicking: 50,
      });
      expect(event instanceof PlayerCreatedEvent).toBeTruthy();
    });
  });
});
