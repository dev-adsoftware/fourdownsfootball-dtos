export default (formalName: string, dotName: string): string =>
  `
import { IsString } from 'class-validator';
import { Event } from '../../../event.dto';

export class ${formalName}Event extends Event {
  @IsString()
  source = 'unknown';

  @IsString()
  type = '${dotName}';

  @IsString()
  version = '1';
}
`
    .trimStart()
    .trimEnd();
