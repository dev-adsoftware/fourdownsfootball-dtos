import { IsString } from 'class-validator';
import { Dto } from '../../dto';

export class PlayerSummaryView extends Dto {
  @IsString()
  placeholder: string;
}