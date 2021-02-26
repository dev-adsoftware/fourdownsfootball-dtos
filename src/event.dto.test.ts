/* eslint-disable max-classes-per-file */
import { IsNumber } from 'class-validator';
import { createDto, Dto } from './dto';
import { Event } from '.';

class TestDto extends Dto {
  @IsNumber()
  a: number;
}

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
          source: 'jest.source',
          type: 'jest.type',
          version: 'jest.version',
          data: createDto(TestDto, { a: 1 }).serialize(),
        }),
      ).toEqual({
        data: JSON.stringify({ a: 1 }),
        source: 'jest.source',
        type: 'jest.type',
        version: 'jest.version',
      });
    });
  });
});
