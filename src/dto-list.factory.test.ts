import { IsString } from 'class-validator';
import { Dto, DtoListFactory } from '.';

describe('given: array of dtos from an extended class', () => {
  class ExtendedDto extends Dto {
    @IsString()
    required: string;
  }
  describe('when: I create a list of dtos with the factory', () => {
    it('then: dto list was created with proper dto types', async () => {
      const list = DtoListFactory.create(
        ExtendedDto,
        [{ required: 'yep' }, { required: 'yessir' }],
        { required: 'yessir' },
      );
      expect(list).toEqual({
        items: [{ required: 'yep' }, { required: 'yessir' }],
        lastKey: { required: 'yessir' },
      });
      expect(list.items[0] instanceof ExtendedDto).toBeTruthy();
    });
  });
});
