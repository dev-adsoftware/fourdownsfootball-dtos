import 'reflect-metadata';
import { IsString } from 'class-validator';
import { Event } from '../../../src/event.dto';

export class FormalNameEvent extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = 'DotName';

  @IsString()
  version = '1';

  @IsString()
  placeholder: string;
}
