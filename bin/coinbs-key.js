import { Command } from 'commander';
import * as key from '../commands/key.js';

const program = new Command();

program
  .command('set-key')
  .description('Set API Key -- Get at https://nomics.com')
  .action(key.set);

program
  .command('show-key')
  .description('Show API Key')
  .action(key.show);

program
  .command('remove-key')
  .description('Remove API Key')
  .action(key.remove);

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}