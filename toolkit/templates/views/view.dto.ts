import 'reflect-metadata';
import { IsNumberString, IsString } from 'class-validator';
import { Dto } from '../../../src/dto';

export class FormalNameView extends Dto {
  @IsString()
  id: string;

  @IsNumberString()
  sequence: string;
}
