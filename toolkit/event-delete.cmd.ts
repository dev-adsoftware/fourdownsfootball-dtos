import {
  readFileSync,
  realpathSync,
  removeSync,
  writeFileSync,
} from 'fs-extra';
import path from 'path';
import { dotName, formalName } from './utilities';

export class DeleteEventAction {
  public async process(options: {
    eventName: string;
    aggregate: string;
  }): Promise<void> {
    const { eventName, aggregate } = options;
    const lowerName = eventName.toLowerCase();
    const lowerAggregate = aggregate.toLowerCase();

    // const templatesPath = `${path.dirname(realpathSync(__filename))}/templates`;
    const srcAggregatePath = `${path.dirname(
      realpathSync(__filename),
    )}/../src/aggregates/${lowerAggregate}`;

    removeSync(`${srcAggregatePath}/events/${lowerName}-event.dto.ts`);
    removeSync(`${srcAggregatePath}/events/${lowerName}-event.dto.test.ts`);

    let indexTs = readFileSync(`${srcAggregatePath}/index.ts`).toString('utf8');
    indexTs = indexTs.replace(
      new RegExp(
        `export \\* from '\\.\\/events\\/${lowerName}-event\\.dto';\n`,
        'g',
      ),
      '',
    );
    writeFileSync(`${srcAggregatePath}/index.ts`, indexTs);

    let eventFactoryTs = readFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.ts`,
    ).toString('utf8');
    eventFactoryTs = eventFactoryTs
      .replace(
        new RegExp(
          `import { ${formalName(
            eventName,
          )}Event } from '\\.\\/events\\/${lowerName}-event\\.dto';\n`,
          'g',
        ),
        '',
      )
      .replace(
        new RegExp(
          `\\s*'${dotName(eventName)}': new ${formalName(
            eventName,
          )}Event\\(\\)\\,\\n`,
          'g',
        ),
        '\n',
      );
    writeFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.ts`,
      eventFactoryTs,
    );

    let eventFactoryTestTs = readFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.test.ts`,
    ).toString('utf8');
    eventFactoryTestTs = eventFactoryTestTs.replace(
      new RegExp(`\\s*'${dotName(eventName)}': \\{\\}\\,\\n`, 'g'),
      '\n',
    );

    writeFileSync(
      `${srcAggregatePath}/${lowerAggregate}.event.factory.test.ts`,
      eventFactoryTestTs,
    );
  }
}
