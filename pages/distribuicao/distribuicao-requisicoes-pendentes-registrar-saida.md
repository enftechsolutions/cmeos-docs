---
title: 'Distribuição: Requisições Pendentes (Registrar Saída)'
description: 'Distribuição: Requisições Pendentes (Registrar Saída)'
---
## 📋 Distribuição: Requisições Pendentes (Registrar Saída)

### Finalidade

Fila de **requisições de materiais feitas pelos setores** que aguardam atendimento pela CME. Cada requisição representa um pedido de material estéril que precisa ser validado com código de segurança antes da entrega.

### Como Utilizar

1. Acesse **Distribuição → Registrar Saída** no menu lateral.
1. A tela exibe cards em grid (3 colunas) — cada card representa uma requisição pendente.
1. Cada card mostra: badge "Pendente" (vermelho), ID da requisição, nome do material solicitado (com quantidade se >1), setor de destino e nome do solicitante.
1. Clique em **"Validar e Atender"** no card para abrir o modal de atendimento (AtenderRequisicaoModal).
1. No modal, informe o **código de validação** (código de segurança fornecido pelo solicitante) para confirmar a entrega.
1. Após validação bem-sucedida, a requisição é atendida e removida da fila.
1. Use o botão **"Atualizar Lista"** no canto superior direito para recarregar as requisições.

### Campos e Informações

| Campo | Descrição |
| --- | --- |
| ID da Requisição | Identificador numérico único da solicitação |
| Material | Nome do material ou material externo solicitado. Quantidade exibida quando >1 |
| Setor de Destino | Setor que solicitou o material |
| Solicitante | Nome do profissional que fez o pedido |
| Código de Validação | Código de segurança necessário para confirmar a entrega (informado no modal) |

> [!NOTE] A fila mostra apenas requisições com status pendente. Requisições já atendidas desaparecem automaticamente da lista.

> [!IMPORTANT] O código de validação é uma camada de segurança que garante que apenas o solicitante autorizado pode retirar o material. Sem o código correto, a requisição não é atendida.

### Impacto no Sistema

- Ao atender: o item é dispensado ao setor solicitante, alterando status para `DISPENSADO`.
- Movimentação registrada com `tipoEtapa: "DISTRIBUICAO"`.
- A requisição passa de pendente para atendida (status `ABERTA` para entrega).
