import {
  IsArray,
  IsNumberString,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Dto } from '../../dto';
import { PlayerSummaryView } from '../player';

export class GameRosterView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsArray()
  @ValidateNested({ each: true })
  awayTeamRoster: PlayerSummaryView[];

  @IsArray()
  @ValidateNested({ each: true })
  homeTeamRoster: PlayerSummaryView[];
}
