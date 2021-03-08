/* eslint-disable max-classes-per-file */
import { IsString } from 'class-validator';
import { Dto } from '.';

describe('given: an extended dto instance', () => {
  describe('when: I validate errors errors that are not a property error', () => {
    it('then: invalid property error was thrown', () => {
      class ExtendedDto extends Dto {
        @IsString()
        required: string;
      }
      const dto = new ExtendedDto();

      expect((dto as any).validationErrors([new Error('fail')])).toBe(
        'Error: fail',
      );
    });
  });
});

describe('given: an extended dto instance with missing required attributes', () => {
  describe('when: I initialize the dto', () => {
    it('then: validation error was thrown', async () => {
      class ExtendedDto extends Dto {
        @IsString()
        required: string;
      }
      expect(() => new ExtendedDto().init({})).toThrow(
        'ExtendedDto: required must be a string',
      );
    });
  });
});

describe('given: an extended dto instance', () => {
  describe('when: I serialize the dto', () => {
    it('then: dto was serialized', async () => {
      class ExtendedDto extends Dto {
        @IsString()
        required: string;
      }
      const extendedDto = new ExtendedDto().init({ required: 'yep' });
      expect(extendedDto.serialize()).toEqual('{"required":"yep"}');
    });
  });
});
