import inquirer from 'inquirer';
import colors from 'colors';
import KeyManager from '../lib/keymanager.js';


const isRequired = (input) => {
  if(input ==='') {
     return console.log('this value is required')
}
else{
  return true
}
}

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
  try {
    const keyManager = new KeyManager();
    const key = keyManager.getKey();

    console.log('Current API Key: ', key.yellow);

    return key;
  } catch (err) {
    console.error(err.message.red);
  }
};

export const remove = () => {
  console.log('remove working');
};