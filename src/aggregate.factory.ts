import { Aggregate, Event } from '.';
import { EventFactory } from './event.factory';
import { PlayerEventFactory } from './aggregates/player';
import { TeamEventFactory } from './aggregates/team';
import { FormationEventFactory } from './aggregates/formation';
import { GameEventFactory } from './aggregates/game';
import { OwnerEventFactory } from './aggregates/owner';
/* autogen replace: import */

export class AggregateFactory {
  public eventFactories: { [key: string]: EventFactory };

  constructor() {
    this.eventFactories = {
      game: new GameEventFactory(),
      formation: new FormationEventFactory(),
      team: new TeamEventFactory(),
      player: new PlayerEventFactory(),
      owner: new OwnerEventFactory(),
      /* autogen replace: constructor */
    };
  }

  public create(payload: string): Aggregate {
    const json = JSON.parse(payload);
    const event = new Event().init(json.event as Record<string, unknown>);
    try {
      return new Aggregate().init({
        ...json,
        event: this.eventFactories[json.aggregate].create(
          event.type,
          json.event as Record<string, unknown>,
        ),
      });
    } catch (e) {
      throw new Error(
        `Unexpected error creating aggregate type ${json.aggregate} ${e}`,
      );
    }
  }
}
