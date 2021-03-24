import {
  ActorChangedEvent,
  CoinFaceChosenEvent,
  CoinTossResultEvent,
  DefensePlayCalledEvent,
  DirectionChosenEvent,
  GameCreatedEvent,
  GameEventFactory,
  KickoffChosenEvent,
  OffensePlayCalledEvent,
} from '.';
import { Event } from '../..';
import {
  CoinFace,
  DefenseFormations,
  DirectionChoices,
  KickoffChoices,
  OffenseFormations,
} from '../../types';

describe('given: game created event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: GameCreatedEvent was returned', async () => {
      const event = new GameEventFactory().create('game.created', {
        homeUsername: 'jest.homeUsername',
        homeTeamId: 'jest.homeTeamId',
        awayUsername: 'jest.awayUsername',
        awayTeamId: 'jest.awayTeamId',
        currentSeed: 0,
      });
      expect(event instanceof GameCreatedEvent).toBeTruthy();
    });
  });
});

describe('given: coin face chosen event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: CoinFaceChosenEvent was returned', async () => {
      const event = new GameEventFactory().create('coinface.chosen', {
        choice: CoinFace.Heads,
      });
      expect(event instanceof CoinFaceChosenEvent).toBeTruthy();
    });
  });
});

describe('given: actor changed event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: ActorChangedEvent was returned', async () => {
      const event = new GameEventFactory().create('actor.changed', {
        oldActor: 'jest.oldActor',
        newActor: 'jest.newActor',
        lastEvent: new Event().init({
          source: 'jest.source',
          type: 'jest.type',
          version: '1',
        }),
      });
      expect(event instanceof ActorChangedEvent).toBeTruthy();
    });
  });
});

describe('given: coin toss result event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: CoinTossResultEvent was returned', async () => {
      const event = new GameEventFactory().create('cointoss.result', {
        actual: CoinFace.Heads,
        winner: 'jest.winner',
        nextSeed: 0,
      });
      expect(event instanceof CoinTossResultEvent).toBeTruthy();
    });
  });
});

describe('given: kickoff choice event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: KickoffChosenEvent was returned', async () => {
      const event = new GameEventFactory().create('kickoff.chosen', {
        choice: KickoffChoices.Kickoff,
      });
      expect(event instanceof KickoffChosenEvent);
    });
  });
});

describe('given: direction choice event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: DirectionChosenEvent was returned', async () => {
      const event = new GameEventFactory().create('direction.chosen', {
        choice: DirectionChoices.South,
      });
      expect(event instanceof DirectionChosenEvent);
    });
  });
});

describe('given: offense play called event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: OffensePlayCalledEvent was returned', async () => {
      const event = new GameEventFactory().create('offense-play.called', {
        play: 'jest.play',
        formation: OffenseFormations.Kickoff,
        players: [
          'jest.kicker',
          'jest.special1',
          'jest.special2',
          'jest.special3',
          'jest.special4',
          'jest.special5',
          'jest.special6',
          'jest.special7',
          'jest.special8',
          'jest.special9',
          'jest.special10',
        ],
      });
      expect(event instanceof OffensePlayCalledEvent);
    });
  });
});

describe('given: defense play called event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: DefensePlayCalledEvent was returned', async () => {
      const event = new GameEventFactory().create('defense-play.called', {
        play: 'jest.play',
        formation: DefenseFormations.KickReturn,
        players: [
          'jest.returner',
          'jest.special1',
          'jest.special2',
          'jest.special3',
          'jest.special4',
          'jest.special5',
          'jest.special6',
          'jest.special7',
          'jest.special8',
          'jest.special9',
          'jest.special10',
        ],
      });
      expect(event instanceof DefensePlayCalledEvent);
    });
  });
});

describe('given: invalid game event type', () => {
  describe('when: I create an event with the factory', () => {
    it('then: unknown event type error was thrown', async () => {
      expect(() => new GameEventFactory().create('invalid', {})).toThrow(
        'Unexpected error creating event type invalid',
      );
    });
  });
});
