export default (formalName: string): string =>
  `
import { IsString } from 'class-validator';
import { Dto } from '../../dto';

export class ${formalName}View extends Dto {
  @IsString()
  placeholder: string;
}
`
    .trimStart()
    .trimEnd();
