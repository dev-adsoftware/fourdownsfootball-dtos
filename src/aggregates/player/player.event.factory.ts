import { PlayerCreatedEvent } from '.';
import { EventFactory } from '../../event.factory';

export class PlayerEventFactory extends EventFactory {
  constructor() {
    super();
    this.events = {
      'player.created': new PlayerCreatedEvent(),
      /* autogen replace: do not remove */
    };
  }
}
