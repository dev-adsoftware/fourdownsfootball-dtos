import { TeamUpdatedEvent , TeamEventFactory } from '.';


describe('given: invalid event type', () => {
  describe('when: I create an event with the factory', () => {
    it('then: unknown event type error was thrown', async () => {
      expect(() => new TeamEventFactory().create('invalid', {})).toThrow(
        'Unexpected error creating event type invalid',
      );
    });
  });
});
describe('given: team updated event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: TeamUpdatedEvent was returned', async () => {
      const event = new TeamEventFactory().create('team.updated', {});
      expect(event instanceof TeamUpdatedEvent).toBeTruthy();
    });
  });
});