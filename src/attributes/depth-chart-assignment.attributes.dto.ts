import { IsNumber, IsString } from 'class-validator';
import { Dto } from '../dto';

export class DepthChartAssignmentAttributes extends Dto {
  @IsString()
  id: string;

  @IsString()
  fromPosition: string;

  @IsNumber()
  fromRank: number;

  @IsString()
  toPosition: string;

  @IsNumber()
  toRank: number;
}
