import {
  readFileSync,
  realpathSync,
  removeSync,
  writeFileSync,
} from 'fs-extra';
import path from 'path';

export class DeleteAttributesAction {
  public async process(options: { attributesName: string }): Promise<void> {
    const { attributesName } = options;
    const lowerName = attributesName.toLowerCase();

    const srcAttributesPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/attributes`;

    removeSync(`${srcAttributesPath}/${lowerName}.attributes.dto.ts`);
    removeSync(`${srcAttributesPath}/${lowerName}.attributes.dto.test.ts`);

    let indexTs = readFileSync(`${srcAttributesPath}/index.ts`).toString(
      'utf8',
    );
    indexTs = indexTs.replace(
      new RegExp(
        `export \\* from '\\.\\/${lowerName}\\.attributes\\.dto';\n`,
        'g',
      ),
      '',
    );
    writeFileSync(`${srcAttributesPath}/index.ts`, indexTs);
  }
}
