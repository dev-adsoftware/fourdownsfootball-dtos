import { FormationCreatedEvent, FormationEventFactory } from '.';
import { FormationTypes } from '../../types';

describe('given: formation created event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: FormationCreatedEvent was returned', async () => {
      const event = new FormationEventFactory().create('formation.created', {
        name: 'jest.formation',
        formationType: FormationTypes.Kickoff,
        positionMap: [
          'p1',
          'p2',
          'p3',
          'p4',
          'p5',
          'p6',
          'p7',
          'p8',
          'p9',
          'p10',
          'p11',
        ],
      });
      expect(event instanceof FormationCreatedEvent).toBeTruthy();
    });
  });
});

describe('given: invalid formation event type', () => {
  describe('when: I create an event with the factory', () => {
    it('then: unknown event type error was thrown', async () => {
      expect(() => new FormationEventFactory().create('invalid', {})).toThrow(
        'Unexpected error creating event type invalid',
      );
    });
  });
});
