import inquirer from 'inquirer';
import colors from 'colors';
import KeyManager from '../lib/keymanager.js';

const isRequired = input => input === '' ? 'This value is required' : true;

export const set = async () => {
  const keyManager = new KeyManager();

  const input = await inquirer.prompt([{
    type: 'input',
    name: 'key',
    message: 'Enter API Key '.green + 'https://nomics.com',
    validate: isRequired
  }]);

  const key = keyManager.setKey(input.key);

  if (key) {
    console.log('API key set'.blue);
  }
};

export const show = () => {
  console.log('show working');
};

export const remove = () => {
  console.log('remove working');
};