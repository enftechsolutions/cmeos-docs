---
title: Validação de Ciclo de Lavagem
description: Validação de Ciclo de Lavagem
---
## Validação de Ciclo de Lavagem

### Finalidade da Tela

O formulário de Validação é a etapa que **conclui oficialmente um ciclo de lavagem** (manual ou por maquinário). É aqui que o operador registra o resultado do teste químico, anexa laudos e fotos do integrador, e libera os itens para a próxima fase do processamento. Sem validação, os itens permanecem bloqueados no ciclo.

---

### Como Utilizar

**1. Acessar o Formulário** Clique em "Validar Ciclo" ou "Validar Carga" a partir do Painel de Expurgo ou da tela de Ciclos Ativos. O formulário exibe o ID do ciclo no breadcrumb.

**2. Informar Resultado do Teste Químico (Obrigatório)** Selecione "APROVADO" ou "REPROVADO" no dropdown. Este é o único campo obrigatório.

**3. Anexar Evidências (Opcional)** Faça upload do laudo do equipamento (PDF ou imagem) e/ou da foto do integrador químico. Esses arquivos são armazenados em base64 no registro do ciclo.

**4. Adicionar Observações** Campo livre para descrever problemas, ocorrências ou detalhes adicionais.

**5. Confirmar Validação** Clique em "Confirmar Validação". O sistema executa em transação atômica: gera o número de lote, atualiza o status de todos os itens, cria movimentações de auditoria e finaliza o ciclo.

---

### Descrição dos Campos e Elementos

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| **Resultado do Teste Químico** | Sim | Dropdown: APROVADO ou REPROVADO |
| **Laudo do Equipamento** | Não | Upload de arquivo PDF ou imagem do laudo da máquina |
| **Foto do Integrador Químico** | Não | Upload de imagem (PNG/JPEG) do indicador químico pós-ciclo |
| **Observações Adicionais** | Não | Texto livre para detalhamento de ocorrências |

---

### Notas Importantes

> [!NOTE] O número de lote é gerado automaticamente no padrão: `LAV-{equipamentoId}/{ano}-{contadorCiclos}` para máquinas, ou `MANUAL-{AAAAMMDD}-{cicloId}` para manuais. Esse lote é gravado em cada item e no registro do ciclo.

> [!IMPORTANT] Materiais da classe **RESPIRATÓRIO** que foram lavados manualmente ou em termodesinfectora recebem o status `AGUARDANDO_DESINFECCAO` ao invés de `LIMPO_AGUARDANDO_PREPARO`. Isso os direciona obrigatoriamente para a etapa de Desinfecção Manual antes do preparo.

> [!CAUTION] Itens externos incluídos no ciclo não geram registros de Movimentação — eles mudam de status para `AGUARDANDO_BAIXA` diretamente. Isso ocorre porque itens externos não possuem `ItemMain` no banco de dados interno.

---

### Como Essa Tela Impacta o Restante do Sistema

A validação é o **momento de transição mais crítico** do expurgo. Ao confirmar: o ciclo recebe status `CONCLUIDO` com lote gerado e data de fim; o contador de ciclos do equipamento é incrementado (para composição do próximo lote); cada item interno recebe o lote e tem seu status atualizado para a próxima etapa; e uma `Movimentacao` com `acao: "FIM_CICLO"` é registrada por item. Após a validação, os itens aparecem automaticamente nas filas de **Preparo**, **Desinfecção Manual** ou **Baixa**, conforme sua classificação.
