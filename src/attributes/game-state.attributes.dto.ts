import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator';
import { Dto } from '../dto';
import { DirectionChoices } from '../types/direction-choices.enum';
import { GameState } from '../types/game-state.enum';

export class GameStateAttributes extends Dto {
  @IsEnum(GameState)
  state: GameState;

  @IsString()
  actorId: string;

  @IsString()
  offense = 'none';

  @IsEnum(DirectionChoices)
  direction: DirectionChoices = DirectionChoices.South;

  @IsNumber()
  homeScore = 0;

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

  @IsBoolean()
  isClockRunning = false;
}
