import {
  ActorChangedEvent,
  CoinFaceChosenEvent,
  CoinTossResultEvent,
  DirectionChosenEvent,
  GameCreatedEvent,
  GameEventFactory,
  KickoffChosenEvent,
  PlayCalledEvent,
} from '.';
import { Event } from '../..';
import { CoinFace, DirectionChoices, KickoffChoices } from '../../types';

describe('given: game created event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: GameCreatedEvent was returned', async () => {
      const event = new GameEventFactory().create('game.created', {
        homeUsername: 'jest.homeUsername',
        homeTeamId: 'jest.homeTeamId',
        awayUsername: 'jest.awayUsername',
        awayTeamId: 'jest.awayTeamId',
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
        choice: DirectionChoices.Home,
      });
      expect(event instanceof DirectionChosenEvent);
    });
  });
});

describe('given: play called event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: PlayCalledEvent was returned', async () => {
      const event = new GameEventFactory().create('play.called', {
        play: 'jest.play',
      });
      expect(event instanceof PlayCalledEvent);
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
