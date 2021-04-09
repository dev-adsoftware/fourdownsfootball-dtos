import { ArrayMaxSize, ArrayMinSize, IsEnum, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { DefenseFormations } from '../../../types/defense-formations.enum';

export class DefensePlayCalledEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'defense-play.called';

  @IsString()
  version = '1';

  @IsString()
  play: string;

  @IsEnum(DefenseFormations)
  formation: DefenseFormations;

  @ArrayMinSize(11)
  @ArrayMaxSize(11)
  @IsString({ each: true })
  players: string[];
}
