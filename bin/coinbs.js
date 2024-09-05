#!/usr/bin/env node
import { Command } from 'commander';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const program = new Command();

program
  .version(pkg.version)
  .command('key', 'Manage API Key -- https://nomics.com')
  .command('check', 'Check Coin Price Info')
  .parse(process.argv);

console.log('coinbs is working');