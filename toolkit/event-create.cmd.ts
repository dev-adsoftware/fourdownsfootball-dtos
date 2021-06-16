import { readFileSync, realpathSync, writeFileSync } from 'fs-extra';
import path from 'path';
import { firstUpper } from './utilities';

export class CreateEventAction {
  public async process(options: {
    eventName: string;
    aggregate: string;
  }): Promise<void> {
    const { eventName, aggregate } = options;
    const lowerName = eventName.toLowerCase();
    const lowerAggregate = aggregate.toLowerCase();
    const noHyphenNameParts = eventName.toLowerCase().split('-');
    const formalName = noHyphenNameParts
      .map((part: string) => firstUpper(part))
      .join('');
    const dotName = eventName.toLowerCase().replace(/-/g, '.');

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
    indexTs = indexTs.replace(
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
    eventFactoryTestTs = eventFactoryTestTs.replace(
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
  }
}
