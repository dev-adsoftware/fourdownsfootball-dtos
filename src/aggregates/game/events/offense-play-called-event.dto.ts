import { ArrayMaxSize, ArrayMinSize, IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class OffensePlayCalledEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'offense-play.called';

  @IsString()
  version = '1';

  @IsString()
  play: string;

  @IsString()
  formationId: string;

  @ArrayMinSize(11)
  @ArrayMaxSize(11)
  @IsString({ each: true })
  players: string[];
}
