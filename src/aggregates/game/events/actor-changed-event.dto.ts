import { IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class ActorChangedEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'actor.changed';

  @IsString()
  version = '1';

  @IsString()
  oldActorId: string;

  @IsString()
  newActorId: string;
}
