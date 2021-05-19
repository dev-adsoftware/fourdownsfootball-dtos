import { PlayerAssignedEvent, TeamCreatedEvent } from '.';

import { EventFactory } from '../../event.factory';

export class TeamEventFactory extends EventFactory {
  constructor() {
    super();
    this.events = {
      'team.created': new TeamCreatedEvent(),
      'player.assigned': new PlayerAssignedEvent(),
      /* autogen replace: do not remove */
    };
  }
}
