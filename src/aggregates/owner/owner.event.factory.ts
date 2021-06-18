import { EventFactory } from '../../event.factory';
import { OwnerCreatedEvent } from './events/owner-created-event.dto';
/* autogen replace: import */

export class OwnerEventFactory extends EventFactory {
  constructor() {
    super();
    this.events = {
      'owner.created': new OwnerCreatedEvent(),
      /* autogen replace: constructor */
    };
  }
}
