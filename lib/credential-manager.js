const ConfigStore = require('configstore');

const keytar = require('keytar');

class CredentialManager {
  constructor(name) {
    this.conf = new ConfigStore(name);
    this.service = name;
  }

  async getKeyAndSecret() {
    const key = this.conf.get('apiKey');
    if (!key) {
        throw new Error('API key not found');
    } else {
       let secret = await keytar.getPassword(this.service, key);
        return [key, secret];
    }
  }

  async storeKeyAndSecret(key, secret){
	this.conf.set('apiKey', key);
	await keytar.setPassword(this.service, key, secret);
  }

  async clearKeyAndSecret(){
      let key = this.conf.get('apiKey');
      this.conf.delete('apiKey');
      await keytar.deletePassword(this.service, key);
  }
}

module.exports = CredentialManager;
