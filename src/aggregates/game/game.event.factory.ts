import { ActorChangedEvent, CoinFaceChosenEvent, GameCreatedEvent } from '.';
import { Event } from '../..';

export class GameEventFactory {
  static create(eventType: string, payload: Record<string, unknown>): Event {
    if (eventType === 'game.created') {
      return new GameCreatedEvent().init(payload);
    }
    if (eventType === 'coinface.chosen') {
      return new CoinFaceChosenEvent().init(payload);
    }
    if (eventType === 'actor.changed') {
      return new ActorChangedEvent().init(payload);
    }
    throw new Error(`Unknown event type ${eventType}`);
  }
}
