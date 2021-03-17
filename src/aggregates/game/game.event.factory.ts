import {
  ActorChangedEvent,
  CoinFaceChosenEvent,
  CoinTossResultEvent,
  DirectionChosenEvent,
  GameCreatedEvent,
  KickoffChosenEvent,
  PlayCalledEvent,
} from '.';
import { Event } from '../..';

export class GameEventFactory {
  public events: { [key: string]: Event };

  constructor() {
    this.events = {
      'game.created': new GameCreatedEvent(),
      'coinface.chosen': new CoinFaceChosenEvent(),
      'actor.changed': new ActorChangedEvent(),
      'cointoss.result': new CoinTossResultEvent(),
      'kickoff.chosen': new KickoffChosenEvent(),
      'direction.chosen': new DirectionChosenEvent(),
      'play.called': new PlayCalledEvent(),
    };
  }

  public create(eventType: string, payload: Record<string, unknown>): Event {
    try {
      return this.events[eventType].init(payload);
    } catch (e) {
      throw new Error(`Unexpected error creating event type ${eventType}`);
    }
  }
}
