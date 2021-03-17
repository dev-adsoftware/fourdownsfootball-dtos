import { IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class PlayCalledEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'play.called';

  @IsString()
  version = '1';

  @IsString()
  play: string;
}
