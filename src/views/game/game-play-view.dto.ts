import { ArrayMaxSize, ArrayMinSize, IsEnum, IsString } from 'class-validator';
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

  @IsString()
  defenseSequence: string;

  @IsString()
  defensePlay: string;

  @IsEnum(DefenseFormations)
  defenseFormation: DefenseFormations;

  @ArrayMaxSize(11)
  @ArrayMinSize(11)
  @IsString({ each: true })
  defensePlayers: string[];
}
