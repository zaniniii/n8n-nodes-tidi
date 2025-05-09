"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TidiNode = void 0;
class TidiNode {
    constructor() {
        this.description = {
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
    }
    async execute() {
        const endpoint = this.getNodeParameter('endpoint', 0);
        const credentials = await this.getCredentials('tidiApi');
        const apiKey = credentials.apiKey;
        const apiUrl = credentials.apiUrl;
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
exports.TidiNode = TidiNode;
