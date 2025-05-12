import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class TidiIntegration implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Tidi',
        name: 'tidiIntegration',
        icon: 'file:tidi.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Integração com a API Tidi',
        defaults: {
            name: 'Tidi',
        },
        credentials: [
            {
                name: 'tidiApiKeyApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
																noDataExpression: true,
                options: [
                    { name: 'Partner', value: 'partner' },
                    { name: 'Service', value: 'services' },
                    { name: 'Professional', value: 'professionals' },
                    { name: 'Schedule', value: 'schedule' },
                ],
                default: 'partner',
                required: true,
                displayOptions: {
                    show: {
                        operation: ['get', 'post'],
                    },
                },
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
																noDataExpression: true,
                options: [
                    { name: 'Get', value: 'get' },
                    { name: 'Post', value: 'post' },
                ],
                default: 'get',
                required: true,
            },
            {
                displayName: 'Language',
                name: 'language',
                type: 'string',
                default: 'pt',
                required: true,
            },
            // Filtros para Services
            {
                displayName: 'Filters',
                name: 'serviceFilters',
                type: 'collection',
                default: {},
                displayOptions: {
                    show: {
                        resource: ['services'],
                        operation: ['get'],
                    },
                },
                options: [
                    {
                        displayName: 'Category',
                        name: 'category',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Active',
                        name: 'active',
                        type: 'boolean',
                        default: false,
                    },
                ],
            },
            // Filtros para Professionals
            {
                displayName: 'Filters',
                name: 'professionalFilters',
                type: 'collection',
                default: {},
                displayOptions: {
                    show: {
                        resource: ['professionals'],
                        operation: ['get'],
                    },
                },
                options: [
                    {
                        displayName: 'Specialty',
                        name: 'specialty',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Active',
                        name: 'active',
                        type: 'boolean',
                        default: false,
                    },
                ],
            },
            // Parâmetros para Schedule
            {
                displayName: 'Professional ID',
                name: 'professionalId',
                type: 'string',
                default: '',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['schedule'],
                        operation: ['post'],
                    },
                },
            },
            {
                displayName: 'Service IDs',
                name: 'serviceIds',
                type: 'string',
                default: '[]',
                description: 'JSON array com IDs dos serviços',
                required: true,
                displayOptions: {
                    show: {
                        resource: ['schedule'],
                        operation: ['post'],
                    },
                },
            },
        ],
        outputs: ['main'],
        inputs: ['main'],
    };
}