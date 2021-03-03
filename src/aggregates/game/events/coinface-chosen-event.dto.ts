import { IsIn, IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class CoinFaceChosenEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'coinface.chosen';

  @IsString()
  version = '1';

  @IsIn(['heads', 'tails'])
  choice: 'heads' | 'tails';
}
