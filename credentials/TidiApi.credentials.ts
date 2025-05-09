import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class TidiApi implements ICredentialType {
  name = 'tidiApi';
  displayName = 'Tidi API';
  documentationUrl = 'https://docs.tidi.com.br';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      default: '',
    },
    {
      displayName: 'API URL',
      name: 'apiUrl',
      type: 'string',
      default: 'https://api.tidi.com.br',
    },
  ];
}