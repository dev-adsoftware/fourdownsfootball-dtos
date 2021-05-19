import {
  ActorChangedEvent,
  CoinFaceChosenEvent,
  CoinTossResultEvent,
  DefensePlayCalledEvent,
  DirectionChosenEvent,
  GameCreatedEvent,
  KickoffChosenEvent,
  OffensePlayCalledEvent,
  PlayResultEvent,
} from '.';
import { EventFactory } from '../../event.factory';

export class GameEventFactory extends EventFactory {
  constructor() {
    super();
    this.events = {
      'game.created': new GameCreatedEvent(),
      'coinface.chosen': new CoinFaceChosenEvent(),
      'actor.changed': new ActorChangedEvent(),
      'cointoss.result': new CoinTossResultEvent(),
      'kickoff.chosen': new KickoffChosenEvent(),
      'direction.chosen': new DirectionChosenEvent(),
      'offense-play.called': new OffensePlayCalledEvent(),
      'defense-play.called': new DefensePlayCalledEvent(),
      'play.result': new PlayResultEvent(),
    };
  }
}
