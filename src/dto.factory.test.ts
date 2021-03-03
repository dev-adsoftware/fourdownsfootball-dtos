import { IsString } from 'class-validator';
import { Dto } from '.';
import { DtoFactory } from './dto.factory';

describe('given: extended class of dto', () => {
  class ExtendedDto extends Dto {
    @IsString()
    required: string;
  }
  describe('when: I create the extended class with a dto factory and all the required data', () => {
    it('then: properly validated dto instance was created', async () => {
      const extendedDto = DtoFactory.create(ExtendedDto, { required: 'yep' });
      expect(extendedDto instanceof ExtendedDto).toBeTruthy();
      expect(extendedDto).toEqual({ required: 'yep' });
    });
  });
  describe('when: I create the extended class with a dto factory and more than the required data', () => {
    it('then: properly validated dto instance was created without extra data', async () => {
      const extendedDto = DtoFactory.create(ExtendedDto, {
        required: 'yep',
        extra: 'no',
      });
      expect(extendedDto instanceof ExtendedDto).toBeTruthy();
      expect(extendedDto).toEqual({ required: 'yep' });
    });
  });
  describe('when: I create the extended class with a dto factory and missing required data', () => {
    it('then: validation error was thrown', async () => {
      expect(() => DtoFactory.create(ExtendedDto, {})).toThrow(
        'ExtendedDto: required must be a string',
      );
    });
  });
});
