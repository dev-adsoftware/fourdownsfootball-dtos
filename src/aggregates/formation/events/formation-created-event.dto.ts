import { ArrayMaxSize, ArrayMinSize, IsEnum, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { FormationTypes } from '../../../types';

export class FormationCreatedEvent extends Event {
  @IsString()
  source = 'cli';

  @IsString()
  type = 'formation.created';

  @IsString()
  version = '1';

  @IsString()
  name: string;

  @IsEnum(FormationTypes)
  formationType: FormationTypes;

  @ArrayMinSize(11)
  @ArrayMaxSize(11)
  @IsString({ each: true })
  positionMap: string[];
}
