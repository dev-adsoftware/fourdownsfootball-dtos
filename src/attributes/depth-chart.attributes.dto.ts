import { IsString } from 'class-validator';
import { Dto } from '../dto';

export class DepthChartAttributes extends Dto {
  @IsString({ each: true })
  qb: string[];

  @IsString({ each: true })
  rb: string[];

  @IsString({ each: true })
  fb: string[];

  @IsString({ each: true })
  wr: string[];

  @IsString({ each: true })
  te: string[];

  @IsString({ each: true })
  lt: string[];

  @IsString({ each: true })
  lg: string[];

  @IsString({ each: true })
  c: string[];

  @IsString({ each: true })
  rg: string[];

  @IsString({ each: true })
  rt: string[];

  @IsString({ each: true })
  dt: string[];

  @IsString({ each: true })
  de: string[];

  @IsString({ each: true })
  ilb: string[];

  @IsString({ each: true })
  olb: string[];

  @IsString({ each: true })
  cb: string[];

  @IsString({ each: true })
  s: string[];

  @IsString({ each: true })
  k: string[];

  @IsString({ each: true })
  p: string[];

  @IsString({ each: true })
  kr: string[];

  @IsString({ each: true })
  pr: string[];

  @IsString({ each: true })
  ksp: string[];

  @IsString({ each: true })
  krsp: string[];

  @IsString({ each: true })
  prsp: string[];

  @IsString({ each: true })
  psp: string[];
}
