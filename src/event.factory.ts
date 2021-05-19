import { Event } from '.';

export abstract class EventFactory {
  public events: { [key: string]: Event };

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
