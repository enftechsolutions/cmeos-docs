---
title: 'Processamento Externo: Histórico'
description: 'Processamento Externo: Histórico'
---
## 📜 Processamento Externo: Histórico

### Finalidade

Trilha de auditoria completa de todas as operações de **envio e recebimento** com empresas reprocessadoras externas. Permite filtrar por empresa, período e visualizar documentos anexados.

### Como Utilizar

1. Acesse **Processamento Externo → Histórico** no menu lateral.
1. Use os filtros superiores: **Empresa Reprocessadora** (dropdown), **Data Inicial** e **Data Final**. Clique em "Limpar Filtros" para resetar.
1. A tabela exibe: Operação (Envio/Recebimento com ícone colorido), Empresa, Responsável CME, Data/Hora, quantidade de Itens, Documentos e Status.
1. Na coluna **Docs**, clique no ícone de olho para visualizar o comprovante/laudo original em modal (suporta imagem e PDF). O botão de download (DownloadExternalProcessButton) permite baixar o documento.
1. Na coluna **Status**: verde = RECEBIDO/CONCLUÍDO, âmbar = PARCIAL, azul = EM TRÂNSITO.
1. Paginação no rodapé (10 registros por página).

### Campos e Informações

| Coluna | Descrição |
| --- | --- |
| Operação | "Envio para Processo" (azul) ou "Recebimento Estéril" (verde) + observação truncada |
| Empresa | Nome da empresa reprocessadora |
| Responsável | Operador CME que registrou a operação |
| Data / Hora | Data e hora do registro |
| Itens | Quantidade de itens envolvidos na operação |
| Docs | Botão de visualização do documento + botão de download do relatório |
| Status | RECEBIDO, CONCLUÍDO, PARCIAL ou EM TRÂNSITO |

> [!NOTE] O modal de visualização de documentos suporta tanto imagens quanto PDFs (renderizado via iframe). Ambos possuem botão de download.

### Impacto no Sistema

- **Consulta apenas (leitura)**: Esta tela não altera dados. É puramente de auditoria.
