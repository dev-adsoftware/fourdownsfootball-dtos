import 'reflect-metadata';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsNumberString,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TeamSummaryView } from '..';
import { Dto } from '../../dto';
import { GameStateAttributes } from '../../attributes/game-state.attributes.dto';

export class GameSummaryView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsNumber()
  currentSeed: number;

  @IsObject()
  @ValidateNested()
  @Type(() => TeamSummaryView)
  homeTeam: TeamSummaryView;

  @IsObject()
  @ValidateNested()
  @Type(() => TeamSummaryView)
  awayTeam: TeamSummaryView;

  @IsObject()
  @ValidateNested()
  @Type(() => GameStateAttributes)
  stateAttributes: GameStateAttributes;
}
