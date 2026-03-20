---
title: 🛡️ Central de Auditoria
description: Central de Auditoria
---
## 🛡️ Central de Auditoria

### Finalidade

Registros oficiais de rastreabilidade para conformidade regulatória. Permite consultar todas as movimentações de materiais separadas por etapa do processo (Expurgo, Preparo, Esterilização, Distribuição), com acesso ao prontuário completo de cada item e detalhes de ciclos.

### Como Utilizar

1. Acesse **Auditoria** no menu lateral.
1. Selecione a aba desejada: **Expurgo**, **Preparo**, **Esterilização** ou **Distribuição**. Ao trocar de aba, os registros são recarregados automaticamente.
1. Ajuste o período com os campos de **Data Inicial** e **Data Final** (padrão: data de hoje para ambos). Clique no botão de busca (lupa) para filtrar.
1. A tabela exibe: Data/Hora, Item/Material (com serial), Operador (com avatar inicial), Equipamento/Lote (badges) e Ações.
1. Na coluna **Ações** (visível ao passar o mouse na linha):
   - **"Ver Prontuário"**: abre o AuditTimelineModal com o histórico completo de movimentações daquele item (timeline cronológica).
   - **"Ver Ciclo"**: abre o CycleDetailsModal com detalhes do ciclo (equipamento, parâmetros, lote, indicadores, itens do ciclo).
1. Use as informações para rastreabilidade regulatória, auditorias internas e investigação de não-conformidades.

### Campos e Informações

| Coluna | Descrição |
| --- | --- |
| Data/Hora | Data e hora do registro da movimentação |
| Item / Material | Nome do material e código serial (SN) do item |
| Operador | Nome do profissional que executou a ação (com avatar) |
| Equipamento / Lote | Nome do equipamento usado (badge) e número do lote gerado (badge azul) |
| Ações | "Ver Prontuário" (timeline do item) e "Ver Ciclo" (detalhes do ciclo de maquinário) |

| Aba | O que exibe |
| --- | --- |
| Expurgo | Movimentações com `tipoEtapa: "EXPURGO"` — lavagem manual e maquinário |
| Preparo | Movimentações com `tipoEtapa: "PREPARO"` — inspeção, conferência, embalagem |
| Esterilização | Movimentações com `tipoEtapa: "ESTERILIZACAO"` — ciclos de autoclave |
| Distribuição | Movimentações com `tipoEtapa: "DISTRIBUICAO"` — dispensação e requisições |

> [!NOTE] O AuditTimelineModal exibe o histórico **completo** do item — todas as etapas pelas quais passou desde o cadastro. Ideal para rastreabilidade de ponta a ponta.

> [!IMPORTANT] O filtro de data padrão é **apenas o dia atual**. Para auditorias de períodos maiores, lembre-se de ajustar a data inicial antes de buscar.

> [!CAUTION] Esta tela é a base para auditorias regulatórias (ANVISA, vigilância sanitária). Mantenha os registros consistentes — qualquer movimentação faltante no prontuário de um item pode indicar falha operacional.

### Impacto no Sistema

- **Consulta apenas (leitura)**: Esta tela não altera dados.
- Dados vêm da API `/api/auditoria/setores` filtrando pela aba (setor) e período.
- Os modais AuditTimelineModal e CycleDetailsModal fazem chamadas adicionais para carregar o histórico detalhado.
