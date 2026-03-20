---
title: Estoque Externo
description: Gerenciamento de Estoque Externo
---
## 📋 Estoque Externo — Materiais de Terceiros

### Finalidade

Visão consolidada de **todos os materiais externos (de terceiros) sob custódia da CME**. Permite acompanhar o status e validade de cada item externo, com busca por material, lote ou empresa fornecedora.

### Como Utilizar

1. Acesse **Materiais Externos → Estoque** no menu lateral.
1. O card no canto superior direito mostra o **Total de Itens** (soma de quantidades de todos os registros).
1. Use a barra de busca para filtrar por nome do material, número de lote ou nome da empresa.
1. A tabela exibe: Material/Empresa, Lote, Status, Validade e Saldo (quantidade disponível).
1. A coluna **Validade** usa coloração semafórica: azul/primário (>30 dias), amarelo (≤30 dias), vermelho (vencido).
1. Os badges de **Status** indicam a fase do ciclo: Em Estoque (verde), Em Uso (azul), No Expurgo (laranja), Aguardando Baixa (roxo).

### Campos e Informações

| Coluna | Descrição |
| --- | --- |
| Material / Empresa | Nome do material e empresa proprietária |
| Lote | Número do lote registrado na entrada |
| Status | `EM_ESTOQUE` (disponível), `EM_USO` (em uso no hospital), `EM_EXPURGO` (sendo reprocessado), `AGUARDANDO_BAIXA` (pronto para devolver) |
| Validade | Data de validade com coloração semafórica |
| Saldo | Quantidade disponível daquele item/lote |

> [!NOTE] Esta tela é apenas de consulta — não possui ações de movimentação. Para dar entrada em novos materiais, use a tela "Entrada". Para registrar a devolução, use a tela "Baixa".

> [!IMPORTANT] Materiais com status `AGUARDANDO_BAIXA` já concluíram o ciclo na CME e devem ser devolvidos à empresa proprietária. Acompanhe esses itens na tela de Baixa.

### Impacto no Sistema

- **Consulta apenas (leitura)**: Esta tela não altera dados.
- Os dados vêm da API `/api/materiais-externos/estoque` que retorna todos os registros de `EstoqueExterno` do cliente.
