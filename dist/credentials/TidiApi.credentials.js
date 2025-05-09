class ApiKeyCredentials {
  constructor() {
    this.name = 'apiKeyCredentials';
    this.displayName = 'Tidi API Key Credentials';
    this.documentationUrl = 'https://tidi.com.br/docs';
    this.properties = [
      {
        displayName: 'API Key',
        name: 'apiKey',
        type: 'string',
        default: '',
        required: true,
        typeOptions: {
          password: true,
        },
      },
      {
        displayName: 'Base URL',
        name: 'baseUrl',
        type: 'string',
        default: 'http://api.tidi.com.br/pt',
        required: true,
      },
    ];
  }
}
module.exports = { ApiKeyCredentials };