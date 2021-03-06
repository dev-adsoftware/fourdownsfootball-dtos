import { IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class GameCreatedEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'game.created';

  @IsString()
  version = '1';

  @IsString()
  homeUsername: string;

  @IsString()
  homeTeamId: string;

  @IsString()
  awayUsername: string;

  @IsString()
  awayTeamId: string;
}
