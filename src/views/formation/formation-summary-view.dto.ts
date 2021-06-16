import {
  ArrayMaxSize,
  ArrayMinSize,
  IsEnum,
  IsNumberString,
  IsString,
} from 'class-validator';
import { Dto } from '../../dto';
import { FormationTypes } from '../../types';

export class FormationSummaryView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;

  @IsString()
  name: string;

  @IsEnum(FormationTypes)
  formationType: FormationTypes;

  @ArrayMinSize(11)
  @ArrayMaxSize(11)
  @IsString({ each: true })
  positionMap: string[];
}
