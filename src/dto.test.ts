/* eslint-disable max-classes-per-file */
import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { createDto, Dto } from '.';

class ExtendedClass extends Dto {
  @IsNotEmpty()
  @IsString()
  defaults = 'to a string';

  @IsIn(['one', 'two', 'three'])
  number: string;

  @IsString()
  @IsOptional()
  @Transform(({ obj }) => obj.defaults)
  transformed: string;

  name(): string {
    return this.constructor.name;
  }
}

describe('given: a class that extends a DtoValidator', () => {
  describe('when: I instantiate the class', () => {
    it('then: class was instantiated with default values', async () => {
      expect(createDto(ExtendedClass, { number: 'one' })).toEqual({
        defaults: 'to a string',
        number: 'one',
      });
    });
  });

  describe('when: I instantiate the class with a matching plain object', () => {
    it('then: class was instantiated with copied values', async () => {
      const extended = createDto(ExtendedClass, {
        defaults: 'to nothing',
        number: 'one',
        transformed: 'to nothing',
      });
      expect(extended).toEqual({
        defaults: 'to nothing',
        number: 'one',
        transformed: 'to nothing',
      });
      expect(extended.name()).toEqual('ExtendedClass');
    });
  });

  describe('when: I instantiate the class with values that should be ignored', () => {
    it('then: class was instantiated with only the valid values', async () => {
      const extended = createDto(ExtendedClass, {
        defaults: 'to nothing',
        number: 'one',
        ignore: false,
        transformed: 256,
      });
      expect(extended).toEqual({
        defaults: 'to nothing',
        number: 'one',
        transformed: 'to nothing',
      });
      expect(extended.name()).toEqual('ExtendedClass');
      expect(extended.serialize()).toEqual(
        '{"defaults":"to nothing","number":"one","transformed":"to nothing"}',
      );
    });
  });

  describe('when: I instantiate the class with missing required values', () => {
    it('then: validation error was thrown', async () => {
      expect(() => createDto(ExtendedClass, {})).toThrow(
        'ExtendedClass: number must be one of the following values: one, two, three',
      );
    });
  });

  describe('given: validation errors that are not an instance of ValidationError', () => {
    describe('when: I validate errors', () => {
      it('then: invalid property error was thrown', () => {
        const config = new ExtendedClass();

        expect((config as any).validationErrors([new Error('fail')])).toBe(
          'Error: fail',
        );
      });
    });
  });
});
