---
title: Estoque CME — Visão Consolidada e Inventário
description: Estoque CME — Visão Consolidada e Inventário
---
## 📦 Estoque CME — Visão Consolidada e Inventário

### Finalidade

Tela central de gestão patrimonial da CME. Exibe **apenas materiais de propriedade da CME** (patrimônio próprio), independentemente de estarem fisicamente na CME ou emprestados a setores. Oferece duas visualizações: **Visão Consolidada** (saldo agrupado por material) e **Inventário Detalhado** (lista individual de cada item com serial, validade e localização).

### Como Utilizar

1. Acesse **Armazenamento → Estoque CME** no menu lateral.
1. A tela abre na aba **Visão Consolidada** por padrão, mostrando quatro cards de estatísticas no topo: Patrimônio CME (total), Disponíveis (prontos para uso), Em Fluxo (processando em alguma etapa) e Em Uso (nos setores).
1. Na tabela consolidada, cada linha representa um tipo de material com as colunas: Total, Disponível, Processando e Em Uso. Passe o mouse sobre o número de "Em Uso" para ver um tooltip detalhando quais setores possuem quantidades daquele material.
1. A barra de progresso na coluna "Status" mostra o percentual de disponibilidade visual (verde = disponível).
1. Use o painel lateral esquerdo para alternar entre **Visão Consolidada** e **Inventário Detalhado**, filtrar por **Classe de Material** (Instrumental, Respiratório, Insumo/Rouparia) e exportar relatórios (PDF ou CSV).
1. No **Inventário Detalhado**, cada item aparece individualmente com serial, material, proprietário, localização atual, status e validade. Itens que estão fisicamente fora da CME aparecem com indicador "EM TRÂNSITO" na coluna Localização.
1. Para **dispensar itens para um setor**: alterne para Inventário Detalhado, selecione os itens desejados (checkbox), clique em "Enviar p/ Setor" no painel lateral, informe o setor de destino e confirme.
1. O botão **"+ Novo Item"** abre o modal de criação de material/item no estoque.
1. O botão **"Registrar Baixa"** abre o modal para dar baixa definitiva em itens (perda, descarte, fim de vida útil).

### Campos e Informações

| Campo / Coluna | Descrição |
| --- | --- |
| Patrimônio CME | Contagem total de itens que pertencem à CME (independente de localização física) |
| Disponíveis (Prontos) | Itens com status `NO_ARMAZENAMENTO` ou `ESTERILIZADO_EM_ESTOQUE` fisicamente na CME |
| Em Fluxo (Processando) | Itens em qualquer etapa do reprocessamento (expurgo, preparo, esterilização) |
| Em Uso (Setores) | Itens dispensados/distribuídos para setores externos |
| Classe de Material | Filtro: Instrumental, Respiratório ou Insumo/Rouparia |
| Validade | Coloração semafórica: verde (>30 dias), amarelo (≤30 dias), vermelho (≤7 dias), vermelho forte (vencido) |
| Ranking "Itens Emprestados" | Painel lateral mostrando os 10 setores com mais itens de patrimônio da CME em sua posse |

> [!NOTE] A Visão Consolidada agrupa por material e exibe o saldo. O Inventário Detalhado lista cada item individual com serial — é nesta segunda visão que se pode selecionar itens para dispensação.

> [!IMPORTANT] A lógica de patrimônio filtra automaticamente: itens que **pertencem a outros setores** mas estão na CME para reprocessamento **não aparecem** nesta tela. Eles são visíveis apenas no Estoque Setorial do respectivo setor proprietário.

> [!CAUTION] A "Registrar Baixa" é uma operação definitiva (o item deixa de contar no patrimônio ativo). Use apenas para descarte, perda confirmada ou fim de vida útil do material.

### Impacto no Sistema

- **Dispensação (Enviar p/ Setor)**: Altera o status do item para `DISPENSADO` e registra Movimentação com `acao: "DISPENSAR"`, setor de destino e observação.
- **Novo Item**: Cria registro de ItemMain vinculado ao cliente, com serial gerado e status inicial `NO_ARMAZENAMENTO`.
- **Baixa**: Remove o item do saldo ativo (altera status para `CONSUMIDO` ou equivalente).
- **Exportações**: PDF abre em nova aba com relatório formatado (StockReportPDF). CSV gera download com separador `;` e encoding UTF-8 BOM.
