import {
  readFileSync,
  realpathSync,
  removeSync,
  writeFileSync,
} from 'fs-extra';
import path from 'path';

export class DeleteViewAction {
  public async process(options: {
    viewName: string;
    aggregate: string;
  }): Promise<void> {
    const { viewName, aggregate } = options;
    const lowerName = viewName.toLowerCase();
    const lowerAggregate = aggregate.toLowerCase();

    const srcViewPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/views/${lowerAggregate}`;

    removeSync(`${srcViewPath}/${lowerName}-view.dto.ts`);
    removeSync(`${srcViewPath}/${lowerName}-view.dto.test.ts`);

    let indexTs = readFileSync(`${srcViewPath}/index.ts`).toString('utf8');
    indexTs = indexTs.replace(
      new RegExp(`export \\* from '\\.\\/${lowerName}-view\\.dto';\n`, 'g'),
      '',
    );
    writeFileSync(`${srcViewPath}/index.ts`, indexTs);
  }
}
