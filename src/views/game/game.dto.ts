import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Dto } from '../../dto';
import { GameState } from '../../types/game-state.enum';

export class Game extends Dto {
  @IsString()
  id: string;

  @IsEnum(GameState)
  state: GameState = GameState.NotStarted;

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

  @IsString()
  @IsOptional()
  offensiveTeamId?: string;

  @IsNumber()
  ballOn = 25;

  @IsNumber()
  down = 1;

  @IsNumber()
  toGo = 10;
}
