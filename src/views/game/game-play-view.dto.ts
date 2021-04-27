import {
  ArrayMaxSize,
  ArrayMinSize,
  IsEnum,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { Dto } from '../../dto';
import { DefenseFormations, OffenseFormations } from '../../types';

export class GamePlayView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  offenseSequence: string;

  @IsString()
  offensePlay: string;

  @IsEnum(OffenseFormations)
  offenseFormation: OffenseFormations;

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
  @IsEnum(DefenseFormations)
  defenseFormation?: DefenseFormations;

  @IsOptional()
  @ArrayMaxSize(11)
  @ArrayMinSize(11)
  @IsString({ each: true })
  defensePlayers?: string[];
}
