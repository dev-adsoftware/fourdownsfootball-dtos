import { IsNumberString, IsString } from 'class-validator';
import { Dto } from '../dto';

export class PlayerAssignmentAttributes extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;
}
