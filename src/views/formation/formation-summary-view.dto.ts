import { ArrayMaxSize, ArrayMinSize, IsString } from 'class-validator';
import { Dto } from '../../dto';

export class FormationSummaryView extends Dto {
  @IsString()
  name: string;

  @IsString()
  sequence: string;

  @ArrayMinSize(11)
  @ArrayMaxSize(11)
  @IsString({ each: true })
  positionMap: string[];
}
