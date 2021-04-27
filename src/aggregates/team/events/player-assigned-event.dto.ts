import { IsNumberString, IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class PlayerAssignedEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'player.assigned';

  @IsString()
  version = '1';

  @IsString()
  playerId: string;

  @IsNumberString()
  playerSequence: string;
}
