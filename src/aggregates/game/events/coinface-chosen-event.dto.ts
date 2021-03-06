import { IsEnum, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { CoinFace } from '../../../types';

export class CoinFaceChosenEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'coinface.chosen';

  @IsString()
  version = '1';

  @IsEnum(CoinFace)
  choice: CoinFace;
}
