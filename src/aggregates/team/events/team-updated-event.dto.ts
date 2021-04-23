import { IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class TeamUpdatedEvent extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = 'team.updated';

  @IsString()
  version = '1';
}