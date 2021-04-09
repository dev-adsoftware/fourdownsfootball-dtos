import {
  ArrayMaxSize,
  ArrayMinSize,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Dto } from '../../dto';
import { DefenseFormations, OffenseFormations } from '../../types';

export class GamePlayView extends Dto {
  @IsString()
  id: string;

  @IsString()
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
  @IsString()
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
