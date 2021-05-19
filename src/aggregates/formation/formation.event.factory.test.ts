import { FormationEventFactory } from '.';

describe('given: formation event factory', () => {
  describe('when: I create factory', () => {
    it('then: event list was correct', async () => {
      expect(new FormationEventFactory().events).toMatchObject({
        'formation.created': {},
      });
    });
  });
});
