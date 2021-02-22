/* eslint-disable max-classes-per-file */
import { createDto } from './dto';
import { Event } from '.';

describe('given: no event data', () => {
  describe('when: I create an event dto', () => {
    it('then: dto threw expected error', async () => {
      expect(() => createDto(Event, {})).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('given: proper event', () => {
  describe('when: I create an event dto', () => {
    it('then: dto was created with expected values', async () => {
      expect(
        createDto(Event, {
          id: 'jest-id',
          date: 'jest-date',
          source: 'jest-source',
          type: 'jest-type',
          version: 'jest-version',
          data: 'jest-data',
        }),
      ).toEqual({
        data: 'jest-data',
        date: 'jest-date',
        id: 'jest-id',
        source: 'jest-source',
        type: 'jest-type',
        version: 'jest-version',
      });
    });
  });
});
