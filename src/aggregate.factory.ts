import { Aggregate, Event } from '.';
import { GameAggregate, GameEventFactory } from './aggregates';

export class AggregateFactory {
  static create(payload: Record<string, unknown>): Aggregate {
    const event = new Event().init(payload.event as Record<string, unknown>);
    if (payload.aggregate === 'game') {
      return new GameAggregate().init({
        ...payload,
        event: GameEventFactory.create(
          event.type,
          payload.event as Record<string, unknown>,
        ),
      });
    }

    throw new Error(`Unknown aggregate type ${payload.aggregate}`);
  }
}
