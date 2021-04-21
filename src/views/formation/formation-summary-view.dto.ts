import { ArrayMaxSize, ArrayMinSize, IsEnum, IsString } from 'class-validator';
import { Dto } from '../../dto';
import { FormationTypes } from '../../types';

export class FormationSummaryView extends Dto {
  @IsString()
  name: string;

  @IsString()
  sequence: string;

  @IsEnum(FormationTypes)
  formationType: FormationTypes;

  @ArrayMinSize(11)
  @ArrayMaxSize(11)
  @IsString({ each: true })
  positionMap: string[];
}
