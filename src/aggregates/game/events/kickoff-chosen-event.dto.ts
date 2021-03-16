import { IsEnum, IsString } from 'class-validator';
import { Event } from '../../../event.dto';
import { KickoffChoices } from '../../../types/kickoff-choices.enum';

export class KickoffChosenEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'kickoff.chosen';

  @IsString()
  version = '1';

  @IsEnum(KickoffChoices)
  choice: KickoffChoices;
}
