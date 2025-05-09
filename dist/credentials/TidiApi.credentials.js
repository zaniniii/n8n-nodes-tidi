"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TidiApi = void 0;
class TidiApi {
    constructor() {
        this.name = 'tidiApi';
        this.displayName = 'Tidi API';
        this.documentationUrl = 'https://docs.tidi.com.br';
        this.properties = [
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
}
exports.TidiApi = TidiApi;
