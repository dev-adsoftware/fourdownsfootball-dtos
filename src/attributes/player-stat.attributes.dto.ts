import { IsDivisibleBy, IsNumber } from 'class-validator';
import { Dto } from '../dto';

export class PlayerStatAttributes extends Dto {
  @IsNumber()
  @IsDivisibleBy(1)
  plays: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickoffs: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickoffYds: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickoffTouchbacks: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickReturns: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickReturnYds: number;

  @IsNumber()
  @IsDivisibleBy(1)
  kickReturnTDs: number;

  @IsNumber()
  @IsDivisibleBy(1)
  tackles: number;
}
