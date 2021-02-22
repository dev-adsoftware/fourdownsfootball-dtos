/* eslint-disable max-classes-per-file */
import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Dto , createDtoList } from '.';


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

describe('given: a class that extends a Dto', () => {
  describe('when: I instantiate a list dto of the class', () => {
    it('then: list was created with classes instantiated with default values', async () => {
      const extendedList = createDtoList(
        ExtendedClass,
        [
          {
            default: 'to nothing',
            number: 'one',
            transformed: 'to nothing',
          },
          {
            default: 'another nothing',
            number: 'two',
            transformed: 'another to nothing',
          },
        ],
        { key: 'value' },
      );
      expect(extendedList).toEqual({
        items: [
          { defaults: 'to a string', number: 'one', transformed: undefined },
          { defaults: 'to a string', number: 'two', transformed: undefined },
        ],
        lastKey: { key: 'value' },
      });
      expect(extendedList.serialize()).toEqual(
        '{"items":[{"defaults":"to a string","number":"one"},{"defaults":"to a string","number":"two"}],"lastKey":{"key":"value"}}',
      );
    });
  });
});
