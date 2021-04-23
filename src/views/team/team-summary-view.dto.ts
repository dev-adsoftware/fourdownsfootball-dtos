import { IsString } from 'class-validator';
import { Dto } from '../../dto';

export class TeamSummaryView extends Dto {
  @IsString()
  placeholder: string;
}