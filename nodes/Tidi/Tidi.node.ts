import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';

export class TidiNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Tidi',
    name: 'tidi',
    group: ['transform'],
    version: 1,
    description: 'Interage com a API Tidi',
    defaults: {
      name: 'Tidi',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'tidiApi',
        required: true,
      },
    ],
    properties: [
      {
        displayName: 'Endpoint',
        name: 'endpoint',
        type: 'string',
        default: '',
        placeholder: '/v1/endpoint',
      },
    ],
  };

  async execute(this: IExecuteFunctions) {
    const endpoint = this.getNodeParameter('endpoint', 0) as string;
    const credentials = await this.getCredentials('tidiApi');
    const apiKey = credentials.apiKey as string;
    const apiUrl = credentials.apiUrl as string;

    const response = await this.helpers.httpRequest({
      method: 'GET',
      url: `${apiUrl}${endpoint}`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return [this.helpers.returnJsonArray(response)];
  }
}