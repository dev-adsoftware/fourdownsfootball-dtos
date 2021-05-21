import 'reflect-metadata';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsNumberString,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TeamSummaryView } from '..';
import { Dto } from '../../dto';
import { DirectionChoices } from '../../types';
import { GameState } from '../../types/game-state.enum';

export class GameSummaryView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsNumber()
  currentSeed: number;

  @IsEnum(GameState)
  state: GameState;

  @IsString()
  actor: string;

  @IsString()
  offense = 'none';

  @IsEnum(DirectionChoices)
  direction: DirectionChoices = DirectionChoices.South;

  @IsString()
  homeUsername: string;

  @IsString()
  homeTeamId: string;

  @IsObject()
  @ValidateNested()
  @Type(() => TeamSummaryView)
  homeTeam: TeamSummaryView;

  @IsNumber()
  homeScore = 0;

  @IsString()
  awayUsername: string;

  @IsString()
  awayTeamId: string;

  @IsObject()
  @ValidateNested()
  @Type(() => TeamSummaryView)
  awayTeam: TeamSummaryView;

  @IsNumber()
  awayScore = 0;

  @IsNumber()
  period = 1;

  @IsNumber()
  gameClock = 15 * 60;

  @IsNumber()
  ballOn = 0;

  @IsNumber()
  down = 0;

  @IsNumber()
  toGo = 0;
}
