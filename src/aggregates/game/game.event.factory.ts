import {
  ActorChangedEvent,
  CoinFaceChosenEvent,
  CoinTossResultEvent,
  DefensePlayCalledEvent,
  DirectionChosenEvent,
  GameCreatedEvent,
  KickoffChosenEvent,
  OffensePlayCalledEvent,
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
      'offense-play.called': new OffensePlayCalledEvent(),
      'defense-play.called': new DefensePlayCalledEvent(),
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
