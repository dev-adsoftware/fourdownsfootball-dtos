import { IsNumberString, IsString } from 'class-validator';
import { Dto } from '../../dto';

export class GameLogView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsString()
  log: string;
}
