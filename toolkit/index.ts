import { Command } from 'commander';
import { DeleteAggregateAction } from './aggregate-delete.cmd';
import { CreateAggregateAction } from './aggregate-create.cmd';
import { CreateEventAction } from './event-create.cmd';
import { DeleteEventAction } from './event-delete.cmd';
import { DeleteViewAction } from './view-delete.cmd';
import { CreateViewAction } from './view-create.cmd';
import { DeleteAttributesAction } from './attributes-delete.cmd';
import { CreateAttributesAction } from './attributes-create.cmd';

const program = new Command();
program.name('4d-dto-toolkit');

const aggregateCommand = program.command('aggregate');
aggregateCommand
  .command('create')
  .description('create a new aggregate')
  .requiredOption('-a, --aggregate <aggregate>', 'aggregate')
  .action(async (options) => {
    new DeleteAggregateAction().process(options);
    new CreateAggregateAction().process(options);
    new CreateViewAction().process({
      viewName: `${options.aggregate}-summary`,
      aggregate: options.aggregate,
    });
  });

aggregateCommand
  .command('delete')
  .description('delete an aggregate')
  .requiredOption('-a, --aggregate <aggregate>', 'aggregate')
  .action(async (options) => {
    new DeleteAggregateAction().process(options);
  });

const eventCommand = program.command('event');

eventCommand
  .command('create')
  .description('create a new event')
  .requiredOption('-n, --eventName <eventName>', 'event name')
  .requiredOption('-a, --aggregate <aggregate>', 'aggregate')
  .action(async (options) => {
    new DeleteEventAction().process(options);
    new CreateEventAction().process(options);
  });

eventCommand
  .command('delete')
  .description('delete an event')
  .requiredOption('-n, --eventName <eventName>', 'event name')
  .requiredOption('-a, --aggregate <aggregate>', 'aggregate')
  .action(async (options) => {
    new DeleteEventAction().process(options);
  });

const viewCommand = program.command('view');
viewCommand
  .command('create')
  .description('create a new view')
  .requiredOption('-n, --viewName <viewName>', 'view name')
  .requiredOption('-a, --aggregate <aggregate>', 'aggregate')
  .action(async (options) => {
    new DeleteViewAction().process(options);
    new CreateViewAction().process(options);
  });

viewCommand
  .command('delete')
  .description('delete a view')
  .requiredOption('-n, --viewName <viewName>', 'view name')
  .requiredOption('-a, --aggregate <aggregate>', 'aggregate')
  .action(async (options) => {
    new DeleteViewAction().process(options);
  });

const attributesCommand = program.command('attributes');
attributesCommand
  .command('create')
  .description('create a new attributes dto')
  .requiredOption('-n, --attributesName <attributesName>', 'attributes name')
  .action(async (options) => {
    new DeleteAttributesAction().process(options);
    new CreateAttributesAction().process(options);
  });

attributesCommand
  .command('delete')
  .description('delete an attributes collection')
  .requiredOption('-n, --attributesName <attributesName>', 'attributes name')
  .action(async (options) => {
    new DeleteAttributesAction().process(options);
  });

const main = async () => {
  await program.parseAsync(process.argv);
};

main();
