import { IsInstance, IsString, ValidateNested } from 'class-validator';
import { Event } from '../../../event.dto';

export class ActorChangedEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'actor.changed';

  @IsString()
  version = '1';

  @IsString()
  oldActor: string;

  @IsString()
  newActor: string;

  @ValidateNested()
  @IsInstance(Event)
  lastEvent: Event;
}
