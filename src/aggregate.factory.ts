import { Aggregate, Event } from '.';
import { FormationEventFactory, GameEventFactory } from './aggregates';

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

    throw new Error(`Unknown aggregate type ${json.aggregate}`);
  }
}
