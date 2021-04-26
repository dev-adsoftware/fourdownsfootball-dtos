import { PlayerEventFactory } from './aggregates';
import {
  TeamEventFactory,
  FormationEventFactory,
  GameEventFactory,
} from './aggregates';
import { Aggregate, Event } from '.';

export class AggregateFactory {
  static create(payload: string): Aggregate {
    const json = JSON.parse(payload);
    const event = new Event().init(json.event as Record<string, unknown>);
    if (json.aggregate === 'game') {
      return new Aggregate().init({
        ...json,
        event: new GameEventFactory().create(
          event.type,
          json.event as Record<string, unknown>,
        ),
      });
    }

    if (json.aggregate === 'formation') {
      return new Aggregate().init({
        ...json,
        event: new FormationEventFactory().create(
          event.type,
          json.event as Record<string, unknown>,
        ),
      });
    }

    if (json.aggregate === 'team') {
      return new Aggregate().init({
        ...json,
        event: new TeamEventFactory().create(
          event.type,
          json.event as Record<string, unknown>,
        ),
      });
    }

    if (json.aggregate === 'player') {
      return new Aggregate().init({
        ...json,
        event: new PlayerEventFactory().create(
          event.type,
          json.event as Record<string, unknown>,
        ),
      });
    }

    /* toolkit autogen: do not remove */

    throw new Error(`Unknown aggregate type ${json.aggregate}`);
  }
}