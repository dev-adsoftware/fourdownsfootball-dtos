import { PlayerAssignedEvent , TeamCreatedEvent, TeamEventFactory } from '.';


describe('given: invalid event type', () => {
  describe('when: I create an event with the factory', () => {
    it('then: unknown event type error was thrown', async () => {
      expect(() => new TeamEventFactory().create('invalid', {})).toThrow(
        'Unexpected error creating event type invalid',
      );
    });
  });
});
describe('given: team created event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: TeamCreatedEvent was returned', async () => {
      const event = new TeamEventFactory().create('team.created', {
        id: 'jest.id',
        city: 'jest.city',
        state: 'jest.state',
        country: 'jest.country',
        nickname: 'jest.nickname',
        abbreviation: 'jest.abbreviation',
        pluralNickname: 'jest.pluralNickname',
        shortNickname: 'jest.shortNickname',
        ownerUsername: 'jest.ownerUsername',
      });
      expect(event instanceof TeamCreatedEvent).toBeTruthy();
    });
  });
});

describe('given: player assigned event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: PlayerAssignedEvent was returned', async () => {
      const event = new TeamEventFactory().create('player.assigned', {
        playerId: 'jest.player.id',
        playerSequence: '999',
      });
      expect(event instanceof PlayerAssignedEvent).toBeTruthy();
    });
  });
});
