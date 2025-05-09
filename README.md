# n8n-nodes-tidi

Este pacote contém um node para integração com a API Tidi no n8n.

[n8n](https://n8n.io/) é uma ferramenta de automação de fluxo de trabalho extensível que permite conectar diferentes serviços/APIs.

## Instalação

### Comunidade (npm)
```bash
npm install n8n-nodes-tidi
```

### Local (manual)
1. Clone este repositório
2. Instale as dependências: `npm install`
3. Compile o código: `npm run build`
4. Crie um link simbólico: `npm link`
5. No diretório do n8n: `npm link n8n-nodes-tidi`

## Recursos

O node Tidi API oferece os seguintes recursos:

### Partner (Parceiro)
- **Get Partner Info**: Obtém informações detalhadas do parceiro autenticado

### Service (Serviço)
- **List Services**: Lista todos os serviços do parceiro
  - Filtros adicionais:
    - **Category**: Filtra serviços por categoria
    - **Status**: Filtra serviços por status (ativo/inativo)

### Professional (Profissional)
- **List Professionals**: Lista todos os profissionais do parceiro

### Schedule (Agenda)
- **Check Availability**: Verifica disponibilidade na agenda
  - Parâmetros necessários:
    - **Professional ID**: ID do profissional
    - **Services**: Lista de IDs de serviços em formato JSON (opcional)

## Credenciais

Para utilizar este node, você precisará de:
- **API Key**: Sua chave de API Tidi
- **Base URL**: URL base da API (padrão: http://api.tidi.com.br/pt)

## Exemplos de