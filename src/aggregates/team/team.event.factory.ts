import { EventFactory } from '../../event.factory';
import { TeamCreatedEvent } from './events/team-created-event.dto';
import { PlayerAssignedEvent } from './events/player-assigned-event.dto';
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
