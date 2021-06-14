import { PlayerAssignedEvent, TeamCreatedEvent } from '.';

import { EventFactory } from '../../event.factory';
import { DepthChartAssignedEvent } from './events/depth-chart-assigned-event.dto';

export class TeamEventFactory extends EventFactory {
  constructor() {
    super();
    this.events = {
      'team.created': new TeamCreatedEvent(),
      'player.assigned': new PlayerAssignedEvent(),
      'depth-chart.assigned': new DepthChartAssignedEvent(),
      /* autogen replace: do not remove */
    };
  }
}
