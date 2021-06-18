import { OwnerEventFactory } from './owner.event.factory';

describe('given: lowerName event factory', () => {
  describe('when: I create factory', () => {
    it('then: event list was correct', async () => {
      expect(new OwnerEventFactory().events).toMatchObject({
        'owner.created': {},
        /* autogen replace: constructor */
      });
    });
  });
});
