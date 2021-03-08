import { Aggregate, Event } from '.';
import { GameAggregate, GameEventFactory } from './aggregates';

export class AggregateFactory {
  static create(payload: string): Aggregate {
    const json = JSON.parse(payload);
    const event = new Event().init(json.event as Record<string, unknown>);
    if (json.aggregate === 'game') {
      return new GameAggregate().init({
        ...json,
        event: GameEventFactory.create(
          event.type,
          json.event as Record<string, unknown>,
        ),
      });
    }

    throw new Error(`Unknown aggregate type ${json.aggregate}`);
  }
}
