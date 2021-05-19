import { Event } from '.';
import { EventFactory } from './event.factory';

class TestFactory extends EventFactory {
  constructor() {
    super();
    this.events = {
      'test-event': new Event(),
    };
  }
}

describe('given: event factory', () => {
  describe('when: I create a supported event', () => {
    it('then: event was returned', async () => {
      expect(
        new TestFactory().create('test-event', {
          source: 'jest.source',
          type: 'jest.type',
          version: 'jest.version',
        }),
      ).toBeInstanceOf(Event);
    });
  });
  describe('when: I create an unsupported event', () => {
    it('then: error was thrown', async () => {
      try {
        expect(
          new TestFactory().create('bad-event', {
            source: 'jest.source',
            type: 'jest.type',
            version: 'jest.version',
          }),
        ).not.toBeDefined();
      } catch (e) {
        expect(e).toEqual(
          Error(
            'Unexpected error creating event type bad-event - TypeError: Cannot read property \'init\' of undefined',
          ),
        );
      }
    });
  });
});
