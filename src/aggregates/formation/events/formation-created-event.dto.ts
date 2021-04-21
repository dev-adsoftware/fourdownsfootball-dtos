import { ArrayMaxSize, ArrayMinSize, IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class FormationCreatedEvent extends Event {
  @IsString()
  source = 'cli';

  @IsString()
  type = 'formation.created';

  @IsString()
  version = '1';

  @IsString()
  name: string;

  @ArrayMinSize(11)
  @ArrayMaxSize(11)
  @IsString({ each: true })
  positionMap: string[];
}
