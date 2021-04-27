import {
  IsDivisibleBy,
  IsIn,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Dto } from '../../dto';

export class PlayerSummaryView extends Dto {
  @IsString()
  id: string;

  @IsString()
  sequence: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsIn(['', 'Sr.', 'Jr.', 'I', 'II', 'II', 'IV'])
  suffix: string;

  @IsString()
  teamId: string;

  @IsNumber()
  @IsDivisibleBy(1)
  @Min(0)
  @Max(100)
  kicking: number;
}
