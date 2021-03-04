import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Dto } from '../../dto';
import { GameState } from '../../types/game-state.enum';

export class GameSummaryView extends Dto {
  @IsString()
  id: string;

  @IsString()
  sequence: string;

  @IsEnum(GameState)
  state: GameState;

  @IsString()
  actor: string;

  @IsString()
  homeUsername: string;

  @IsString()
  homeTeamId: string;

  @IsNumber()
  homeScore = 0;

  @IsString()
  awayUsername: string;

  @IsString()
  awayTeamId: string;

  @IsNumber()
  awayScore = 0;

  @IsNumber()
  gameClock = 0;

  @IsNumber()
  ballOn = 25;

  @IsNumber()
  down = 1;

  @IsNumber()
  toGo = 10;
}
