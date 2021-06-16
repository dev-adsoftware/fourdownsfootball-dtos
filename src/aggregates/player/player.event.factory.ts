import { EventFactory } from '../../event.factory';
import { PlayerCreatedEvent } from './events/player-created-event.dto';
import { PlayerRandomizedEvent } from './events/player-randomized-event.dto';
/* autogen replace: import */

export class PlayerEventFactory extends EventFactory {
  constructor() {
    super();
    this.events = {
      'player.created': new PlayerCreatedEvent(),
      'player.randomized': new PlayerRandomizedEvent(),
      /* autogen replace: constructor */
    };
  }
}
