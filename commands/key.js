const inquirer = require('inquirer');
const color = require('colors');
const KeyManager = require('../lib/keymanager.js');

const key = {
  async set() {
    const key_manager = new KeyManager();

    const input = await inquirer.prompt([{
      type: 'input',
      name: 'key',
      message: 'Enter API Key '.green + 'https://nomics.com',
      validate: isRequired
    }]);

    const key = key_manager.setKey(input.key);

    if (key) {
      console.log('API key set'.blue);
    }
  },

  show() {
    console.log('show working');
  },

  remove() {
    console.log('remove working');
  }
};

module.exports = key;
