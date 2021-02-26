/* eslint-disable max-classes-per-file */
import { createDto } from './dto';
import { Aggregate, Event } from '.';

describe('given: no aggregate data', () => {
  describe('when: I create an aggregate dto', () => {
    it('then: dto threw expected error', async () => {
      expect(() => createDto(Aggregate, {})).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('given: proper aggregate', () => {
  describe('when: I create an aggregate dto', () => {
    it('then: dto was created with expected values', async () => {
      expect(
        createDto(Aggregate, {
          id: 'jest.id',
          sequence: '0',
          date: '2000-01-01',
          event: createDto(Event, {
            source: 'jest.source',
            type: 'jest.type',
            version: 'jest.version',
            data: JSON.stringify({ a: 1 }),
          }),
        }),
      ).toEqual({
        date: '2000-01-01',
        event: {
          data: '{"a":1}',
          source: 'jest.source',
          type: 'jest.type',
          version: 'jest.version',
        },
        id: 'jest.id',
        sequence: '0',
      });
    });
  });
});
