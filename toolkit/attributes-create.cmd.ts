import { readFileSync, realpathSync, writeFileSync } from 'fs-extra';
import path from 'path';
import { formalName } from './utilities';

export class CreateAttributesAction {
  public async process(options: { attributesName: string }): Promise<void> {
    const { attributesName } = options;
    const lowerName = attributesName.toLowerCase();

    const templatesPath = `${path.dirname(realpathSync(__filename))}/templates`;
    const srcAttributesPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/attributes`;

    let attributesDtoTs = readFileSync(
      `${templatesPath}/attributes/attributes.dto.ts`,
    ).toString('utf8');
    attributesDtoTs = attributesDtoTs
      .replace(/FormalName/g, formalName(attributesName))
      .replace(/\.\.\/\.\.\/\.\.\/src\/dto/g, '../dto');
    writeFileSync(
      `${srcAttributesPath}/${lowerName}.attributes.dto.ts`,
      attributesDtoTs,
    );

    let attributesDtoTestTs = readFileSync(
      `${templatesPath}/attributes/attributes.dto.test.ts`,
    ).toString('utf8');
    attributesDtoTestTs = attributesDtoTestTs
      .replace(/FormalName/g, formalName(attributesName))
      .replace(/\.\/attributes\.dto/g, `./${lowerName}.attributes.dto`);
    writeFileSync(
      `${srcAttributesPath}/${lowerName}.attributes.dto.test.ts`,
      attributesDtoTestTs,
    );

    let indexTs = readFileSync(`${srcAttributesPath}/index.ts`).toString(
      'utf8',
    );
    indexTs = indexTs.replace(
      /\/\* autogen replace: export \*\//,
      `
export * from './${lowerName}.attributes.dto';
/* autogen replace: export */
`
        .trimLeft()
        .trimRight(),
    );
    writeFileSync(`${srcAttributesPath}/index.ts`, indexTs);
  }
}
