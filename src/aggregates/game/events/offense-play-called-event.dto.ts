import { ArrayMaxSize, ArrayMinSize, IsEnum, IsString } from 'class-validator';
import { OffenseFormations } from '../../..';
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

  @IsEnum(OffenseFormations)
  formation: OffenseFormations;

  @ArrayMinSize(11)
  @ArrayMaxSize(11)
  @IsString({ each: true })
  players: string[];
}
