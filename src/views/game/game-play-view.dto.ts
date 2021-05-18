import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Dto } from '../../dto';
import { FormationSummaryView } from '../formation';

export class GamePlayView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  offenseSequence: string;

  @IsString()
  offensePlay: string;

  @IsObject()
  @ValidateNested()
  offenseFormation: FormationSummaryView;

  @ArrayMaxSize(11)
  @ArrayMinSize(11)
  @IsString({ each: true })
  offensePlayers: string[];

  @IsOptional()
  @IsNumberString()
  defenseSequence?: string;

  @IsOptional()
  @IsString()
  defensePlay?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  defenseFormation?: FormationSummaryView;

  @IsOptional()
  @ArrayMaxSize(11)
  @ArrayMinSize(11)
  @IsString({ each: true })
  defensePlayers?: string[];
}
