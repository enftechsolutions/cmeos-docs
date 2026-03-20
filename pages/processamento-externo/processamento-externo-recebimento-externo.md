---
title: 'Processamento Externo: Recebimento Externo'
description: Recebimento de materiais retornados de empresa reprocessadora externa.
---
## Processamento Externo: Recebimento

### Finalidade

Registrar o **retorno de materiais esterilizados externamente**, integrando-os ao estoque com validade calculada automaticamente pelo método de esterilização da empresa. Suporta recebimento total ou parcial.

### Como Utilizar

1. Acesse **Processamento Externo → Recebimento** no menu lateral.
1. A tela exibe cards de **Remessas Aguardando Retorno** — cada card representa um envio pendente com a empresa, data de envio e número de volumes. Cards com badge "Recebimento Parcial" indicam que parte dos itens já foi recebida.
1. Clique em **"Receber"** no card desejado para abrir o formulário de conferência.
1. Na tabela de **Conferência de Itens**, todos os itens vêm selecionados por padrão. Desmarque itens que não foram retornados (recebimento parcial).
1. No painel direito, selecione o **Método de Esterilização** utilizado pela empresa (dropdown carregado dos métodos cadastrados para aquela empresa). Ao selecionar, a **Data de Validade** de cada item é calculada automaticamente (data atual + dias de validade do método).
1. É possível **editar manualmente** a validade de cada item individual na tabela — itens editados manualmente não são recalculados ao trocar de método.
1. Anexe a **Foto do Laudo** (obrigatório) — documento comprobatório da esterilização externa.
1. Preencha **Observações** (opcional).
1. Clique em **"Efetivar Recebimento"** para integrar os itens ao estoque.

### Campos e Informações

| Campo | Descrição |
| --- | --- |
| Remessa | Card com empresa, data de envio, status (Em Trânsito / Recebimento Parcial) e quantidade de volumes |
| Conferência de Itens | Tabela com checkbox, serial, material, setor proprietário e campo de validade por item |
| Método de Esterilização | Dropdown dos métodos cadastrados na empresa. Ex.: "Óxido de Etileno (365 dias)" |
| Data de Validade Estéril | Auto-calculada pelo método. Editável individualmente por item |
| Foto do Laudo | Upload obrigatório (imagem). Comprovante de esterilização da empresa |
| Observações | Texto livre (ex.: dados de entrega, conferência visual) |

> [!NOTE] A validade é auto-calculada como `data atual + validadeDias do método`. Se você editar manualmente a validade de um item, ela não será recalculada ao trocar de método — apenas itens não editados são recalculados.

> [!IMPORTANT] O **laudo é obrigatório** para o recebimento. O botão "Efetivar Recebimento" fica desabilitado enquanto: não houver laudo, não houver método selecionado ou nenhum item estiver selecionado.

> [!CAUTION] No recebimento parcial, os itens não selecionados permanecem como pendentes na remessa. A remessa só é concluída quando todos os itens forem recebidos.

### Impacto no Sistema

- Itens recebidos retornam ao status `NO_ARMAZENAMENTO` com a validade informada.
- A Movimentação é registrada com dados do método, laudo e processamento externo.
- Recebimento parcial mantém a remessa ativa para retorno posterior.
- Redireciona para a tela de Estoque após sucesso.
