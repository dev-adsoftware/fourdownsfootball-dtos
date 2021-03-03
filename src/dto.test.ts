/* eslint-disable max-classes-per-file */
import { IsString } from 'class-validator';
import { Dto } from '.';

describe('given: a dto instance', () => {
  describe('when: I validate errors errors that are not a property error', () => {
    it('then: invalid property error was thrown', () => {
      const dto = new Dto();

      expect((dto as any).validationErrors([new Error('fail')])).toBe(
        'Error: fail',
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
