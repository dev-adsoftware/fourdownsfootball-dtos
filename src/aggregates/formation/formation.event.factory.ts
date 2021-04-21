import { FormationCreatedEvent } from '.';
import { Event } from '../..';

export class FormationEventFactory {
  public events: { [key: string]: Event };

  constructor() {
    this.events = {
      'formation.created': new FormationCreatedEvent(),
    };
  }

  public create(eventType: string, payload: Record<string, unknown>): Event {
    try {
      return this.events[eventType].init(payload);
    } catch (e) {
      throw new Error(
        `Unexpected error creating event type ${eventType} - ${e}`,
      );
    }
  }
}
