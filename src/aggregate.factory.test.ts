import { AggregateFactory, GameCreatedEvent } from '.';

describe('given: aggregate payload for game aggregate', () => {
  describe('when: I create an aggregate with the factory', () => {
    it('then: aggregate with proper event was created', async () => {
      const aggregate = AggregateFactory.create(
        JSON.stringify({
          aggregate: 'game',
          id: 'jest.id',
          sequence: '0',
          date: '2000-01-01T00:00:00.000Z',
          event: {
            source: 'jest.source',
            type: 'game.created',
            version: 'jest.version',
            homeUsername: 'jest.homeUsername',
            homeTeamId: 'jest.homeTeamId',
            awayUsername: 'jest.awayUsername',
            awayTeamId: 'jest.awayTeamId',
            currentSeed: 0,
          },
        }),
      );
      expect(aggregate).toEqual({
        aggregate: 'game',
        date: '2000-01-01T00:00:00.000Z',
        event: {
          awayTeamId: 'jest.awayTeamId',
          awayUsername: 'jest.awayUsername',
          currentSeed: 0,
          homeTeamId: 'jest.homeTeamId',
          homeUsername: 'jest.homeUsername',
          source: 'jest.source',
          type: 'game.created',
          version: 'jest.version',
        },
        id: 'jest.id',
        sequence: '0',
      });
      expect(aggregate.event instanceof GameCreatedEvent).toBeTruthy();
    });
  });
});

describe('given: invalid aggregate', () => {
  describe('when: I create an aggregate with the factory', () => {
    it('then: Unknown aggregate type was thrown', async () => {
      expect(() =>
        AggregateFactory.create(
          JSON.stringify({
            aggregate: 'invalid',
            event: { source: 'jest.source', type: 'jest.type', version: '0' },
          }),
        ),
      ).toThrow('Unknown aggregate type invalid');
    });
  });
});
