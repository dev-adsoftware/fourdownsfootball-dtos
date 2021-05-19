import { AggregateFactory, Event } from '.';
import { EventFactory } from './event.factory';

describe('given: aggregate factory', () => {
  describe('when: I create an instance', () => {
    it('then: event factory list was correct', async () => {
      expect(new AggregateFactory().eventFactories).toMatchObject({
        formation: {},
        game: {},
        player: {},
        team: {},
      });
    });
  });
});

describe('given: payload', () => {
  describe('when: I create with factory', () => {
    it('then: aggregate was created', async () => {
      class TestFactory extends EventFactory {
        constructor() {
          super();
          this.events = {
            'test-event': new Event(),
          };
        }
      }

      const factory = new AggregateFactory();
      factory.eventFactories = {
        'test-event': new TestFactory(),
      };
      expect(
        factory.create(
          JSON.stringify({
            aggregate: 'test-event',
            id: 'jest.id',
            date: new Date('2000-01-01').toISOString(),
            sequence: '0',
            event: {
              source: 'jest.source',
              type: 'test-event',
              version: 'jest.version',
            },
          }),
        ),
      ).toEqual({
        aggregate: 'test-event',
        date: '2000-01-01T00:00:00.000Z',
        event: {
          source: 'jest.source',
          type: 'test-event',
          version: 'jest.version',
        },
        id: 'jest.id',
        sequence: '0',
      });
    });
  });
});

describe('given: payload of unsupported aggregate', () => {
  describe('when: I create with factory', () => {
    it('then: error was thrown', async () => {
      class TestFactory extends EventFactory {
        constructor() {
          super();
          this.events = {
            'test-event': new Event(),
          };
        }
      }

      const factory = new AggregateFactory();
      factory.eventFactories = {
        'test-event': new TestFactory(),
      };
      expect(() =>
        factory.create(
          JSON.stringify({
            aggregate: 'test-event-dne',
            id: 'jest.id',
            date: new Date('2000-01-01').toISOString(),
            sequence: '0',
            event: {
              source: 'jest.source',
              type: 'test-event',
              version: 'jest.version',
            },
          }),
        ),
      ).toThrow(
        'Unexpected error creating aggregate type test-event-dne TypeError: Cannot read property \'create\' of undefined',
      );
    });
  });
});
