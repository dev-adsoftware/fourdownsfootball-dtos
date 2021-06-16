import { mkdirSync, readFileSync, realpathSync, writeFileSync } from 'fs-extra';
import path from 'path';
import { formalName } from './utilities';

export class CreateAggregateAction {
  public async process(options: { aggregate: string }): Promise<void> {
    const { aggregate } = options;

    const lowerAggregate = aggregate.toLowerCase();

    const templatesPath = `${path.dirname(realpathSync(__filename))}/templates`;
    const srcPath = `${path.dirname(realpathSync(__filename))}/../src`;
    const srcAggregatePath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/aggregates/${lowerAggregate}`;
    const srcViewPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/views/${lowerAggregate}`;

    let aggregateFactoryTs = readFileSync(
      `${srcPath}/aggregate.factory.ts`,
    ).toString('utf8');
    aggregateFactoryTs = aggregateFactoryTs
      .replace(
        /\/\* autogen replace: import \*\//,
        `
import { ${formalName(
          aggregate,
        )}EventFactory } from './aggregates/${lowerAggregate}';
/* autogen replace: import */
`
          .trimLeft()
          .trimRight(),
      )
      .replace(
        /\/\* autogen replace: constructor \*\//,
        `
${lowerAggregate}: new ${formalName(aggregate)}EventFactory(),
      /* autogen replace: constructor */
`
          .trimLeft()
          .trimRight(),
      );
    writeFileSync(`${srcPath}/aggregate.factory.ts`, aggregateFactoryTs);

    let aggregateFactoryTestTs = readFileSync(
      `${srcPath}/aggregate.factory.test.ts`,
    ).toString('utf8');
    aggregateFactoryTestTs = aggregateFactoryTestTs.replace(
      /\/\* autogen replace: mock factory \*\//,
      `
${lowerAggregate}: {},
        /* autogen replace: mock factory */
`
        .trimLeft()
        .trimRight(),
    );
    writeFileSync(
      `${srcPath}/aggregate.factory.test.ts`,
      aggregateFactoryTestTs,
    );

    mkdirSync(`${srcAggregatePath}`);
    mkdirSync(`${srcAggregatePath}/events`);
    mkdirSync(`${srcPath}/views/${lowerAggregate}`);

    let aggregatesIndexTs = readFileSync(
      `${srcPath}/aggregates/index.ts`,
    ).toString('utf8');
    aggregatesIndexTs = aggregatesIndexTs.replace(
      /\/\* autogen replace: export \*\//,
      `
export * from './${lowerAggregate}';
/* autogen replace: export */
`
        .trimLeft()
        .trimRight(),
    );

    writeFileSync(`${srcPath}/aggregates/index.ts`, aggregatesIndexTs);

    let viewsIndexTs = readFileSync(`${srcPath}/views/index.ts`).toString(
      'utf8',
    );
    viewsIndexTs = viewsIndexTs.replace(
      /\/\* autogen replace: export \*\//,
      `
export * from './${lowerAggregate}';
/* autogen replace: export */
`
        .trimLeft()
        .trimRight(),
    );

    writeFileSync(`${srcPath}/views/index.ts`, viewsIndexTs);

    writeFileSync(
      `${srcAggregatePath}/index.ts`,
      `
export * from './${lowerAggregate}.event.factory';
/* autogen replace: export */
    `
        .trimLeft()
        .trimRight(),
    );

    writeFileSync(
      `${srcViewPath}/index.ts`,
      `
/* autogen replace: export */
    `
        .trimLeft()
        .trimRight(),
    );

    let eventFactoryTs = readFileSync(
      `${templatesPath}/aggregates/event.factory.ts`,
    ).toString('utf8');
    eventFactoryTs = eventFactoryTs
      .replace(/FormalName/g, formalName(aggregate))
      .replace(/lowerName/g, lowerAggregate)
      .replace(/\.\.\/\.\.\/\.\.\/src\/event\.factory/g, '../../event.factory');
    writeFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.ts`,
      eventFactoryTs,
    );

    let eventFactoryTestTs = readFileSync(
      `${templatesPath}/aggregates/event.factory.test.ts`,
    ).toString('utf8');
    eventFactoryTestTs = eventFactoryTestTs
      .replace(/FormalName/g, formalName(aggregate))
      .replace(/\.\/event\.factory/g, `./${lowerAggregate}.event.factory`);
    writeFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.test.ts`,
      eventFactoryTestTs,
    );
  }
}
