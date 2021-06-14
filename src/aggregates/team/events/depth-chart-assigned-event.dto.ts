import 'reflect-metadata';
import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { DepthChartAssignmentAttributes } from '../../../attributes/depth-chart-assignment.attributes.dto';
import { Event } from '../../../event.dto';

export class DepthChartAssignedEvent extends Event {
  @IsString()
  source = 'engine';

  @IsString()
  type = 'player.assigned';

  @IsString()
  version = '1';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DepthChartAssignmentAttributes)
  assignments: DepthChartAssignmentAttributes[];
}
