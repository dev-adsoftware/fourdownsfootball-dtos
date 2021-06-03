import { IsDivisibleBy, IsNumber } from 'class-validator';
import { Dto } from '../dto';

export class PlayerStatAttributes extends Dto {
  @IsNumber()
  @IsDivisibleBy(1)
  kickoff: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickoffYds: number;

  @IsNumber()
  @IsDivisibleBy(1)
  touchback: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickReturn: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickReturnYds: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickReturnTD: number;
}
