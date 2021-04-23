import { TeamUpdatedEvent } from '.';
import { Event } from '../..';

  export class TeamEventFactory {
    public events: { [key: string]: Event };

    constructor() {
      this.events = {
        'team.updated': new TeamUpdatedEvent(),
        /* autogen replace: do not remove */
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