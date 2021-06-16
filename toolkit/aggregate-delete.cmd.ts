import {
  readFileSync,
  realpathSync,
  removeSync,
  writeFileSync,
} from 'fs-extra';
import path from 'path';
import { formalName } from './utilities';

export class DeleteAggregateAction {
  public async process(options: { aggregate: string }): Promise<void> {
    const { aggregate } = options;

    const lowerAggregate = aggregate.toLowerCase();

    // const templatesPath = `${path.dirname(realpathSync(__filename))}/templates`;
    const srcPath = `${path.dirname(realpathSync(__filename))}/../src`;
    // const srcAggregatePath = `${path.dirname(
    //   realpathSync(__filename),
    // )}/../src/aggregates/${lowerAggregate}`;

    let aggregateFactoryTs = readFileSync(
      `${srcPath}/aggregate.factory.ts`,
    ).toString('utf8');
    aggregateFactoryTs = aggregateFactoryTs
      .replace(
        new RegExp(
          `import { ${formalName(
            aggregate,
          )}EventFactory } from '\\.\\/aggregates\\/${lowerAggregate}';\n`,
          'g',
        ),
        '',
      )
      .replace(
        new RegExp(
          `\\s*${lowerAggregate}: new ${formalName(
            aggregate,
          )}EventFactory\\(\\)\\,\\n`,
          'g',
        ),
        '\n',
      );
    writeFileSync(`${srcPath}/aggregate.factory.ts`, aggregateFactoryTs);

    let aggregateFactoryTestTs = readFileSync(
      `${srcPath}/aggregate.factory.test.ts`,
    ).toString('utf8');
    aggregateFactoryTestTs = aggregateFactoryTestTs.replace(
      new RegExp(`\\s*${aggregate}: {},\n`, 'g'),
      '\n',
    );
    writeFileSync(
      `${srcPath}/aggregate.factory.test.ts`,
      aggregateFactoryTestTs,
    );

    removeSync(`${srcPath}/aggregates/${lowerAggregate}`);
    removeSync(`${srcPath}/views/${lowerAggregate}`);

    let aggregatesIndexTs = readFileSync(
      `${srcPath}/aggregates/index.ts`,
    ).toString('utf8');
    aggregatesIndexTs = aggregatesIndexTs.replace(
      new RegExp(`export \\* from '\\.\\/${lowerAggregate}';\n`, 'g'),
      '',
    );
    writeFileSync(`${srcPath}/aggregates/index.ts`, aggregatesIndexTs);

    let viewsIndexTs = readFileSync(`${srcPath}/views/index.ts`).toString(
      'utf8',
    );
    viewsIndexTs = viewsIndexTs.replace(
      new RegExp(`export \\* from '\\.\\/${lowerAggregate}';\n`, 'g'),
      '',
    );
    writeFileSync(`${srcPath}/views/index.ts`, viewsIndexTs);
  }
}
