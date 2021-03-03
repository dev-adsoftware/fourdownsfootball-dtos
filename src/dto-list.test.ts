/* eslint-disable max-classes-per-file */
import { IsString } from 'class-validator';
import { Dto } from '.';
import { DtoList } from './dto-list';

describe('given: a class that extends dto', () => {
  describe('when: I serialize the dto list', () => {
    it('then: result was serialized list', async () => {
      class ExtendedDto extends Dto {
        @IsString()
        required: string;
      }
      const list = new DtoList<ExtendedDto>();
      list.items = [new ExtendedDto().init({ required: 'yep' })];
      list.lastKey = { ...list.items[0] };
      expect(list.serialize()).toEqual(
        '{"items":[{"required":"yep"}],"lastKey":{"required":"yep"}}',
      );
    });
  });
});
