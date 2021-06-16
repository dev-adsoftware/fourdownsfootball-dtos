import { IsString } from 'class-validator';
import { Dto } from '../dto';

export class OwnerAttributes extends Dto {
  @IsString()
  username: string;
}
