import { GameCreatedEvent } from '.';
import { DtoFactory, Event } from '../..';

export class GameEventFactory {
  static create(eventType: string, payload: Record<string, unknown>): Event {
    if (eventType === 'game.created') {
      return DtoFactory.create(GameCreatedEvent, payload);
    }
    throw new Error('Unknown event type');
  }
}
