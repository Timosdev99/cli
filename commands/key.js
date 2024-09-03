const keymanager = require('../lib/keymanager')
const inquirer = require('inquirer')
const color = require('colors')


const key = {
   async set() {
        const key_manager = new keymanager()
        const input = await inquirer.prompt([{
            type: 'input',
            name: 'key',
            message: 'Enter API Key '.green + 'https://nomics.com',
            validate: isRequired
        }])
        const key = key_manager.setKey(input.key)

        if (key) {
            console.log('Api key set' .blue)
        }

    },

    show() {
        console.log('show working')
    },

    remove() {
        console.log('remove working')
    }
}

module.exports = key;