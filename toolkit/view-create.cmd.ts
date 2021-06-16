import { readFileSync, realpathSync, writeFileSync } from 'fs-extra';
import path from 'path';
import { formalName } from './utilities';

export class CreateViewAction {
  public async process(options: {
    viewName: string;
    aggregate: string;
  }): Promise<void> {
    const { viewName, aggregate } = options;
    const lowerName = viewName.toLowerCase();
    const lowerAggregate = aggregate.toLowerCase();

    const templatesPath = `${path.dirname(realpathSync(__filename))}/templates`;
    const srcViewPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/views/${lowerAggregate}`;

    let viewDtoTs = readFileSync(`${templatesPath}/views/view.dto.ts`).toString(
      'utf8',
    );
    viewDtoTs = viewDtoTs
      .replace(/FormalName/g, formalName(viewName))
      .replace(/\.\.\/\.\.\/\.\.\/src\/dto/g, '../../dto');
    writeFileSync(`${srcViewPath}/${lowerName}-view.dto.ts`, viewDtoTs);

    let viewDtoTestTs = readFileSync(
      `${templatesPath}/views/view.dto.test.ts`,
    ).toString('utf8');
    viewDtoTestTs = viewDtoTestTs
      .replace(/FormalName/g, formalName(viewName))
      .replace(/\.\/view\.dto/g, `./${lowerName}-view.dto`);
    writeFileSync(
      `${srcViewPath}/${lowerName}-view.dto.test.ts`,
      viewDtoTestTs,
    );

    let indexTs = readFileSync(`${srcViewPath}/index.ts`).toString('utf8');
    indexTs = indexTs.replace(
      /\/\* autogen replace: export \*\//,
      `
export * from './${lowerName}-view.dto';
/* autogen replace: export */
`
        .trimLeft()
        .trimRight(),
    );
    writeFileSync(`${srcViewPath}/index.ts`, indexTs);
  }
}
