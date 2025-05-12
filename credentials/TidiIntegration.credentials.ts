import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class TidiApiKey implements ICredentialType {
    name = 'tidiApiKey';
    displayName = 'Tidi API Key';

    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
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