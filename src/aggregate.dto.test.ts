/* eslint-disable max-classes-per-file */

import { Aggregate, Event } from '.';

describe('given: aggregate data', () => {
  describe('when: I serialize the aggregate', () => {
    it('then: result was serialized aggregate data', async () => {
      const aggregate = new Aggregate().init({
        id: 'jest.id',
        sequence: '0',
        date: '2000-01-01T00:00:00.000Z',
        event: new Event().init({
          source: 'jest.source',
          type: 'jest.type',
          version: 'jest.version',
        }),
      });
      expect(aggregate.serialize()).toEqual(
        '{"id":"jest.id","sequence":"0","date":"2000-01-01T00:00:00.000Z","event":{"source":"jest.source","type":"jest.type","version":"jest.version"}}',
      );
    });
  });
});
