import { IsArray, IsNumberString, IsString } from 'class-validator';
import { Dto } from '../../dto';

export class TeamRosterView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsArray()
  players: { id: string; sequence: string }[];
}
