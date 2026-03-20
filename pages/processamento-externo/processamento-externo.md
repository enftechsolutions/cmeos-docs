---
title: Processamento Externo
description: Processamento Externo
---
## Processamento Externo: Envio

### Finalidade

Registrar o envio de materiais internos da CME (status `LIMPO_AGUARDANDO_PREPARO`) para uma **empresa reprocessadora externa** que realizará a esterilização terceirizada. Suporta seleção por bipagem individual (serial) ou por lote.

### Como Utilizar

1. Acesse **Processamento Externo → Envio** no menu lateral.
1. No painel esquerdo, selecione a **Empresa Reprocessadora** de destino no dropdown (apenas empresas ativas).
1. Anexe um **Comprovante de Envio** (opcional) — foto ou PDF.
1. Preencha **Observações / Coleta** (opcional) — ex.: dados do transportador.
1. No campo de **Bipagem** (painel azul), bipe o QR Code do item ou digite o identificador de lote. O sistema aceita tanto serial individual quanto ID de lote — ao bipar um lote, todos os itens daquele lote são selecionados automaticamente.
1. Alternativamente, no painel direito, clique manualmente nos itens da lista "Materiais Disponíveis (Preparo)" para selecioná-los (checkbox).
1. Use o campo "Filtrar lista..." para buscar por serial ou nome do material.
1. Clique em **"Finalizar Envio (N)"** para registrar o envio.

### Campos e Informações

| Campo | Descrição |
| --- | --- |
| Empresa Reprocessadora | Dropdown de empresas ativas cadastradas como reprocessadoras |
| Comprovante de Envio | Upload de imagem/PDF (opcional). Armazenado como base64 |
| Observações / Coleta | Texto livre (ex.: dados do motorista, nota fiscal) |
| Bipagem | Campo de scan: aceita serial individual ou ID de lote. Beep sonoro de confirmação |
| Materiais Disponíveis | Lista de itens com status `LIMPO_AGUARDANDO_PREPARO`. Mostra nome, setor proprietário, serial e lote |

> [!NOTE] Ao bipar um lote, o sistema busca na API todos os itens daquele lote com status `LIMPO_AGUARDANDO_PREPARO` e seleciona todos automaticamente. Itens já selecionados são ignorados com feedback sonoro diferente.

> [!IMPORTANT] Apenas itens com status `LIMPO_AGUARDANDO_PREPARO` são elegíveis para envio externo. Itens em outras etapas do fluxo não aparecem nesta tela.

### Impacto no Sistema

- Cria um registro de `ProcessamentoExterno` com tipo ENVIO, vinculando empresa, itens e comprovante.
- Altera o status dos itens selecionados para indicar que estão em processamento externo.
- Após o envio, os itens saem da fila de preparo interno e aguardam recebimento na tela de Recebimento.
- Redireciona para a tela de Estoque após sucesso.
