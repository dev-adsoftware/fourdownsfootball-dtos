import { IsNumber, IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class DepthChartAssignedEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'depth-chart.assigned';

  @IsString()
  version = '1';

  @IsString()
  playerId: string;

  @IsString()
  fromPosition: string;

  @IsNumber()
  fromRank: string;

  @IsString()
  toPosition: string;

  @IsNumber()
  toRank: string;
}
