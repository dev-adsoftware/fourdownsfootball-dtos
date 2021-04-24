import { Command } from 'commander';
import { realpathSync, writeFileSync, mkdirSync, readFileSync } from 'fs-extra';
import * as path from 'path';

import indexTs from './aggregates/index';
import eventFactoryTs from './aggregates/event.factory';
import eventFactoryTestTs from './aggregates/event.factory.test';
import eventDtoTs from './aggregates/events/event.dto';
import viewDtoTs from './views/view.dto';
import viewDtoTestTs from './views/view.dto.test';

const firstUpper = (name: string) =>
  `${name[0].toUpperCase()}${(name as string).slice(1)}`;

const program = new Command();
program.name('4d-dto-toolkit');

program
  .command('aggregate')
  .description('create a new aggregate')
  .requiredOption('-n, --name <name>', 'aggregate name')
  .action(async (options) => {
    const { name } = options;
    const lowerName = name.toLowerCase();

    const realPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/aggregates/${lowerName}`;

    mkdirSync(`${realPath}`);
    mkdirSync(`${realPath}/events`);
    writeFileSync(`${realPath}/index.ts`, indexTs(lowerName));
    writeFileSync(
      `${realPath}/${lowerName}.event.factory.ts`,
      eventFactoryTs(firstUpper(lowerName)),
    );
    writeFileSync(
      `${realPath}/${lowerName}.event.factory.test.ts`,
      eventFactoryTestTs(firstUpper(lowerName)),
    );
    writeFileSync(`${realPath}/events/index.ts`, '');

    let aggregatesIndexTs = readFileSync(`${realPath}/../index.ts`).toString(
      'utf8',
    );
    aggregatesIndexTs = `
export * from './${lowerName}';
${aggregatesIndexTs}
    `
      .trimStart()
      .trimEnd();
    writeFileSync(`${realPath}/../index.ts`, aggregatesIndexTs);

    let aggregateFactoryTs = readFileSync(
      `${realPath}/../../aggregate.factory.ts`,
    ).toString('utf8');
    aggregateFactoryTs = aggregateFactoryTs.replace(
      '/* toolkit autogen: do not remove */',
      `
    if (json.aggregate === '${lowerName}') {
      return new Aggregate().init({
        ...json,
        event: new ${firstUpper(lowerName)}EventFactory().create(
          event.type,
          json.event as Record<string, unknown>,
        ),
      });
    }

    /* toolkit autogen: do not remove */
    `
        .trimStart()
        .trimEnd(),
    );
    aggregateFactoryTs = `
import { ${firstUpper(lowerName)}EventFactory } from './aggregates';
${aggregateFactoryTs}
    `
      .trimStart()
      .trimEnd();
    writeFileSync(`${realPath}/../../aggregate.factory.ts`, aggregateFactoryTs);

    let aggregateFactoryTestTs = readFileSync(
      `${realPath}/../../aggregate.factory.test.ts`,
    ).toString('utf8');
    aggregateFactoryTestTs = aggregateFactoryTestTs.replace(
      '/* toolkit autogen: do not remove */',
      `
describe('given: aggregate payload for ${lowerName} aggregate', () => {
  describe('when: I create an aggregate with the factory', () => {
    it('then: aggregate with proper event was created', async () => {
      const aggregate = AggregateFactory.create(
        JSON.stringify({
          aggregate: '${lowerName}',
          id: 'jest.id',
          sequence: '0',
          date: '2000-01-01T00:00:00.000Z',
          event: {
            source: 'jest.source',
            type: 'event',
            version: 'jest.version',
          }
        })
      );
      expect(aggregate.event).toBeDefined();
    });
  });
});

/* toolkit autogen: do not remove */
    `
        .trimStart()
        .trimEnd(),
    );
    writeFileSync(
      `${realPath}/../../aggregate.factory.test.ts`,
      aggregateFactoryTestTs,
    );
  });

program
  .command('event')
  .description('create a new event')
  .requiredOption('-n, --name <name>', 'event name')
  .requiredOption('-a, --aggregate <aggregate>', 'aggregate')
  .action(async (options) => {
    const { name, aggregate } = options;
    const lowerName = name.toLowerCase();
    const lowerAggregate = aggregate.toLowerCase();
    const noHyphenNameParts = name.toLowerCase().split('-');
    const formalName = noHyphenNameParts
      .map((part: string) => firstUpper(part))
      .join('');
    const dotName = name.toLowerCase().replace(/-/g, '.');
    const realPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/aggregates/${lowerAggregate}`;
    writeFileSync(
      `${realPath}/events/${lowerName}-event.dto.ts`,
      eventDtoTs(formalName, dotName),
    );

    let eventsIndexTs = readFileSync(`${realPath}/events/index.ts`).toString(
      'utf8',
    );
    eventsIndexTs = `
${eventsIndexTs}
export * from './${lowerName}-event.dto';
    `
      .trimStart()
      .trimEnd();
    writeFileSync(`${realPath}/events/index.ts`, eventsIndexTs);

    let factoryTestTs = readFileSync(
      `${realPath}/${lowerAggregate}.event.factory.test.ts`,
    ).toString('utf8');
    factoryTestTs = `
import { ${formalName}Event } from '.';
${factoryTestTs}
describe('given: ${noHyphenNameParts.join(' ')} event payload', () => {
  describe('when: I create an event with the factory', () => {
    it('then: ${formalName}Event was returned', async () => {
      const event = new ${firstUpper(
        lowerAggregate,
      )}EventFactory().create('${dotName}', {});
      expect(event instanceof ${formalName}Event).toBeTruthy();
    });
  });
});
    `
      .trimStart()
      .trimEnd();
    writeFileSync(
      `${realPath}/${lowerAggregate}.event.factory.test.ts`,
      factoryTestTs,
    );

    let factoryTs = readFileSync(
      `${realPath}/${lowerAggregate}.event.factory.ts`,
    ).toString('utf8');
    factoryTs = factoryTs.replace(
      '/* autogen replace: do not remove */',
      `
      '${dotName}': new ${formalName}Event(),
        /* autogen replace: do not remove */
    `
        .trimStart()
        .trimEnd(),
    );
    factoryTs = `
import { ${formalName}Event } from '.';
${factoryTs}
    `
      .trimStart()
      .trimEnd();
    writeFileSync(`${realPath}/${lowerAggregate}.event.factory.ts`, factoryTs);
  });

program
  .command('view-group')
  .description('create a new view group')
  .requiredOption('-n, --name <name>', 'view name')
  .action(async (options) => {
    const { name } = options;
    const lowerName = name.toLowerCase();

    const realPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/views/${lowerName}`;

    mkdirSync(`${realPath}`);
    writeFileSync(`${realPath}/index.ts`, '');

    let viewsIndexTs = readFileSync(`${realPath}/../index.ts`).toString('utf8');
    viewsIndexTs = `
export * from './${lowerName}';
${viewsIndexTs}
    `
      .trimStart()
      .trimEnd();
    writeFileSync(`${realPath}/../index.ts`, viewsIndexTs);
  });

program
  .command('view')
  .description('create a new view')
  .requiredOption('-n, --name <name>', 'view name')
  .requiredOption('-g, --group <group>', 'view group')
  .action(async (options) => {
    const { name, group } = options;
    const lowerName = name.toLowerCase();
    const lowerGroup = group.toLowerCase();
    const noHyphenNameParts = name.toLowerCase().split('-');
    const formalName = noHyphenNameParts
      .map((part: string) => firstUpper(part))
      .join('');

    const realPath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/views/${lowerGroup}`;

    writeFileSync(
      `${realPath}/${lowerName}-view.dto.ts`,
      viewDtoTs(formalName),
    );

    writeFileSync(
      `${realPath}/${lowerName}-view.dto.test.ts`,
      viewDtoTestTs(formalName, noHyphenNameParts),
    );

    let viewIndexTs = readFileSync(`${realPath}/index.ts`).toString('utf8');
    viewIndexTs = `
export * from './${lowerName}-view.dto';
${viewIndexTs}
    `
      .trimStart()
      .trimEnd();
    writeFileSync(`${realPath}/index.ts`, viewIndexTs);
  });

const main = async () => {
  await program.parseAsync(process.argv);
};

main();
