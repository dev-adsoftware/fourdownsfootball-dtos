import { FormalNameEventFactory } from './event.factory';

describe('given: lowerName event factory', () => {
  describe('when: I create factory', () => {
    it('then: event list was correct', async () => {
      expect(new FormalNameEventFactory().events).toMatchObject({
        /* autogen replace: constructor */
      });
    });
  });
});
