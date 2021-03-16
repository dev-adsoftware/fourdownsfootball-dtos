import { IsEnum, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { DirectionChoices } from '../../../types/direction-choices.enum';

export class DirectionChosenEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'direction.chosen';

  @IsString()
  version = '1';

  @IsEnum(DirectionChoices)
  choice: DirectionChoices;
}
