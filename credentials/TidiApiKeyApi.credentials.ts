import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class TidiApiKeyApi implements ICredentialType {
    name = 'tidiApiKeyApi';
    displayName = 'Tidi API Key API';

    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
												typeOptions: { password: true },
            default: '',
        },
    ];

    authenticate = {
        type: 'generic' as const,
        properties: {
            headers: {
                'x-api-key': '={{$credentials.apiKey}}',
            },
        },
    };
}