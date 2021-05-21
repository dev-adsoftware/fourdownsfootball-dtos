import 'reflect-metadata';
import { Type } from 'class-transformer';
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
  @Type(() => PlayerSummaryView)
  awayTeamRoster: PlayerSummaryView[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlayerSummaryView)
  homeTeamRoster: PlayerSummaryView[];
}
