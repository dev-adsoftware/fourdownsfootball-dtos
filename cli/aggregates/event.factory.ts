export default (formalName: string): string =>
  `
  import { Event } from '../..';

  export class ${formalName}EventFactory {
    public events: { [key: string]: Event };

    constructor() {
      this.events = {
        /* autogen replace: do not remove */
      };
    }

    public create(eventType: string, payload: Record<string, unknown>): Event {
      try {
        return this.events[eventType].init(payload);
      } catch (e) {
        throw new Error(
          ${'`Unexpected error creating event type ${eventType} - ${e}`'},
        );
      }
    }
  }
`
    .trimStart()
    .trimEnd();
