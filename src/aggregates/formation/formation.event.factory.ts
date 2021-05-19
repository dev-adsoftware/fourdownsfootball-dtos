import { FormationCreatedEvent } from '.';
import { EventFactory } from '../../event.factory';

export class FormationEventFactory extends EventFactory {
  constructor() {
    super();
    this.events = {
      'formation.created': new FormationCreatedEvent(),
    };
  }
}
