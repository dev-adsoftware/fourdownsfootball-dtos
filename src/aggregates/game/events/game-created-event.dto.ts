import { IsNumber, IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class GameCreatedEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'game.created';

  @IsString()
  version = '1';

  @IsNumber()
  currentSeed: number;

  @IsString()
  homeTeamId: string;

  @IsString()
  homeTeamSequence: string;

  @IsString()
  awayTeamId: string;

  @IsString()
  awayTeamSequence: string;
}
