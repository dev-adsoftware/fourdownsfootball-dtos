import { AggregateFactory, FormationCreatedEvent, GameCreatedEvent } from '.';
import { FormationTypes } from './types';

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

describe('given: aggregate payload for formation aggregate', () => {
  describe('when: I create an aggregate with the factory', () => {
    it('then: aggregate with proper event was created', async () => {
      const aggregate = AggregateFactory.create(
        JSON.stringify({
          aggregate: 'formation',
          id: 'jest.id',
          sequence: '0',
          date: '2000-01-01T00:00:00.000Z',
          event: {
            source: 'jest.source',
            type: 'formation.created',
            version: 'jest.version',
            name: 'jest.name',
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
          },
        }),
      );
      expect(aggregate).toEqual({
        aggregate: 'formation',
        date: '2000-01-01T00:00:00.000Z',
        event: {
          formationType: 'kickoff',
          name: 'jest.name',
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
          source: 'jest.source',
          type: 'formation.created',
          version: 'jest.version',
        },
        id: 'jest.id',
        sequence: '0',
      });
      expect(aggregate.event instanceof FormationCreatedEvent).toBeTruthy();
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
