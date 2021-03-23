import { IsEnum, IsString } from 'class-validator';
import { KickoffFormations } from '../../..';
import { Event } from '../../../event.dto';

export class KickoffPlayCalledEvent extends Event {
  @IsString()
  source = 'app';

  @IsString()
  type = 'kickoff-play.called';

  @IsString()
  version = '1';

  @IsString()
  play: string;

  @IsEnum(KickoffFormations)
  formation: KickoffFormations.Normal;

  @IsString()
  kicker: string;

  @IsString()
  special1: string;

  @IsString()
  special2: string;

  @IsString()
  special3: string;

  @IsString()
  special4: string;

  @IsString()
  special5: string;

  @IsString()
  special6: string;

  @IsString()
  special7: string;

  @IsString()
  special8: string;

  @IsString()
  special9: string;

  @IsString()
  special10: string;
}
