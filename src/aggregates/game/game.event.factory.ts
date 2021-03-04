import { CoinFaceChosenEvent, GameCreatedEvent } from '.';
import { DtoFactory, Event } from '../..';

export class GameEventFactory {
  static create(eventType: string, payload: Record<string, unknown>): Event {
    if (eventType === 'game.created') {
      return DtoFactory.create(GameCreatedEvent, payload);
    } if (eventType === 'coinface.chosen') {
      return DtoFactory.create(CoinFaceChosenEvent, payload);
    }
    throw new Error(`Unknown event type ${eventType}`);
  }
}
