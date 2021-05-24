import { Command } from 'commander';
import { realpathSync, writeFileSync, readFileSync } from 'fs-extra';
import * as path from 'path';

const firstUpper = (name: string) =>
  `${name[0].toUpperCase()}${(name as string).slice(1)}`;

const program = new Command();
program.name('4d-dto-toolkit');

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

    const templatesPath = `${path.dirname(realpathSync(__filename))}/templates`;
    const srcAggregatePath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/aggregates/${lowerAggregate}`;

    let eventDtoTs = readFileSync(
      `${templatesPath}/events/event.dto.ts`,
    ).toString('utf8');
    eventDtoTs = eventDtoTs
      .replace(/FormalName/g, formalName)
      .replace(/DotName/g, dotName)
      .replace(/\.\.\/\.\.\/\.\.\/src\/event\.dto/g, '../../../event.dto');
    writeFileSync(
      `${srcAggregatePath}/events/${lowerName}-event.dto.ts`,
      eventDtoTs,
    );

    let eventDtoTestTs = readFileSync(
      `${templatesPath}/events/event.dto.test.ts`,
    ).toString('utf8');
    eventDtoTestTs = eventDtoTestTs
      .replace(/FormalName/g, formalName)
      .replace(/\.\/event\.dto/g, `./${lowerName}-event.dto`);
    writeFileSync(
      `${srcAggregatePath}/events/${lowerName}-event.dto.test.ts`,
      eventDtoTestTs,
    );

    let indexTs = readFileSync(`${srcAggregatePath}/index.ts`).toString('utf8');
    indexTs = indexTs
      .replace(
        new RegExp(
          `export \\* from '\\.\\/events\\/${lowerName}-event\\.dto';\n`,
          'g',
        ),
        '',
      )
      .replace(
        /\/\* autogen replace: export \*\//,
        `
export * from './events/${lowerName}-event.dto';
/* autogen replace: export */
`
          .trimLeft()
          .trimRight(),
      );
    writeFileSync(`${srcAggregatePath}/index.ts`, indexTs);

    let eventFactoryTs = readFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.ts`,
    ).toString('utf8');
    eventFactoryTs = eventFactoryTs
      .replace(
        new RegExp(
          `import { ${formalName}Event } from '\\.\\/events\\/${lowerName}-event\\.dto';\n`,
          'g',
        ),
        '',
      )
      .replace(
        new RegExp(`\\s*'${dotName}': new ${formalName}Event\\(\\)\\,\\n`, 'g'),
        '\n',
      )
      .replace(
        /\/\* autogen replace: import \*\//,
        `
import { ${formalName}Event } from './events/${lowerName}-event.dto';
/* autogen replace: import */
`
          .trimLeft()
          .trimRight(),
      )
      .replace(
        /\/\* autogen replace: constructor \*\//,
        `
'${dotName}': new ${formalName}Event(),
      /* autogen replace: constructor */
`
          .trimLeft()
          .trimRight(),
      );
    writeFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.ts`,
      eventFactoryTs,
    );

    let eventFactoryTestTs = readFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.test.ts`,
    ).toString('utf8');
    eventFactoryTestTs = eventFactoryTestTs
      .replace(new RegExp(`\\s*'${dotName}': \\{\\}\\,\\n`, 'g'), '\n')
      .replace(
        /\/\* autogen replace: constructor \*\//,
        `
'${dotName}': {},
      /* autogen replace: constructor */
`
          .trimLeft()
          .trimRight(),
      );
    writeFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.test.ts`,
      eventFactoryTestTs,
    );
  });

const main = async () => {
  await program.parseAsync(process.argv);
};

main();
