# n8n-nodes-tidi

Este é um nó da comunidade n8n. Ele permite que você utilize a **Tidi** em seus fluxos de trabalho no n8n.

**Tidi** é uma plataforma de agendamento e gestão de serviços que permite integrar parceiros, profissionais e serviços em fluxos de trabalho automatizados.

[n8n](https://n8n.io/) é uma plataforma de automação de fluxos de trabalho com licença [fair-code](https://docs.n8n.io/reference/license/).

## Sumário
- [Instalação](#instalação)
- [Operações](#operações)
- [Credenciais](#credenciais)
- [Compatibilidade](#compatibilidade)
- [Uso](#uso)
- [Recursos](#recursos)
- [Histórico de versões](#histórico-de-versões)

---

## Instalação

Siga o [guia de instalação](https://docs.n8n.io/integrations/community-nodes/installation/) na documentação de nós comunitários do n8n.

Para instalar via linha de comando:
```bash
npm install n8n-nodes-tidi
```

---

## Operações

O nó suporta as seguintes operações com a API Tidi:

| Recurso       | Operação | Descrição                              |
|--------------|----------|----------------------------------------|
| Partner      | GET      | Retorna informações do parceiro autenticado |
| Services     | GET      | Retorna os serviços cadastrados        |
| Professionals| GET      | Retorna os profissionais vinculados    |
| Schedule     | POST     | Verifica disponibilidade de agendamento |

---

## Credenciais

Para utilizar este nó, você precisa de uma **API Key** válida da Tidi.

### Pré-requisitos
1. Ter uma conta ativa na Tidi
2. Gerar uma API Key nas configurações do painel do parceiro

### Configuração
1. No painel do n8n, vá para **Credenciais > Criar Nova**
2. Selecione **Tidi API Key**
3. Cole sua API Key no campo correspondente

---

## Compatibilidade

- **Versão mínima do n8n**: v0.166.0
- **Testado com**: n8n v0.166.0 a v0.170.0

---

## Uso

### Exemplo: Obter informações do parceiro
1. Adicione o nó Tidi ao fluxo de trabalho
2. Configure:
   - Recurso: `Partner`
   - Operação: `GET`
   - Idioma: `pt` (ou `en` para inglês)

### Exemplo: Verificar disponibilidade de agendamento
1. Configure:
   - Recurso: `Schedule`
   - Operação: `POST`
   - Preencha:
     - ID do Profissional: `id_do_profissional`
     - IDs dos Serviços: `["id_servico1", "id_servico2"]`

---

## Recursos

* [Documentação oficial do n8n](https://docs.n8n.io/)
* [Documentação da API Tidi](https://docs.tidi.com.br/) (exemplo)
* [Código-fonte no GitHub](https://github.com/seu-usuario/n8n-nodes-tidi)

---

## Histórico de versões

### v1.0.0 (2023-11-15)
- Lançamento inicial
- Suporte a todas as operações documentadas
- Implementação completa de autenticação