import { IsString } from 'class-validator';
import { Dto } from '../../../src/dto';

export class FormalNameAttributes extends Dto {
  @IsString()
  placeholder: string;
}
