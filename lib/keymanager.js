
const {configstore} = require('configstore')
const pkg = require('../package.json')

const keymanager = {
  setKey(key) {
          let conf = new configstore(pkg.name)
          conf.set('apiKey', key);
          return key;
        },
        getKey() {
                const key = this.conf.get('apiKey');
                if (!key) {
                  throw new Error('No API Key Found - Get a key at https://nomics.com');
                }
                return key;
              },
              deleteKey() {
                const key = this.conf.get('apiKey');
                if (!key) {
                  throw new Error('No API Key Found - Get a key at https://nomics.com');
                }
                this.conf.delete('apiKey');
              }
}

module.exports = keymanager;