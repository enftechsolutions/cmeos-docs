---
title: Check-list do Preparo
description: Check-list-do-preparo
---
## Checklist de Preparo (Formulário por Item)

### Finalidade da Tela

O Checklist de Preparo é o formulário onde o operador **valida a integridade, monta kits/caixas, embala e registra o integrador químico** para cada material individualmente. É adaptativo: muda o comportamento conforme o tipo de material (Simples, Kit com composição, ou Caixa Fixa com itens físicos rastreáveis).

---

### Como Utilizar

**1. Visualizar Informações do Material** O cabeçalho exibe: nome do material, código serial, tipo (badge colorido) e notas técnicas (descrição).

**2. Realizar o Checklist de Validação** O formulário contém 4 etapas obrigatórias:

- **Inspeção Visual de Limpeza**: confirma ausência de sujidade e oxidação
- **Teste de Funcionalidade**: confirma articulações, cortes e travas operacionais
- **Conferência de Conteúdo/Composição**: varia conforme o tipo do material (veja abaixo)
- **Barreira Estéril e Evidência**: marca integrador químico inserido e permite upload de foto da montagem

**3. Conferência — Comportamento por Tipo**

- **Material Simples**: checkbox único "O item corresponde ao modelo cadastrado"
- **Caixa Fixa**: lista todos os sub-itens com QR Code individual. O operador bipa cada serial (ou marca manualmente) e a barra de progresso mostra `N de M unidades`. Itens não encontrados na caixa geram erro sonoro
- **Kit com Composição**: lista os componentes com quantidade requerida. Itens com `requerQrCode: true` precisam ser bipados; itens sem QR podem ser marcados com clique manual. Barra de progresso `N de M`

**4. Selecionar Sistema de Embalagem** Dropdown com as embalagens cadastradas no sistema, cada uma exibindo o nome e dias de validade. A seleção afeta o cálculo de data de validade da etiqueta.

**5. Preencher Observações (se necessário)** Campo obrigatório quando a conferência está incompleta (faltam itens no kit/caixa). A observação é registrada como justificativa no relatório.

**6. Rejeitar Material (se necessário)** O botão "Rejeitar Limpeza" retorna o item ao Expurgo com status `AGUARDANDO_LIMPEZA`. Requer preenchimento da justificativa no campo de observações. Um modal de confirmação exibe a justificativa antes de executar.

**7. Finalizar Preparo** Se o checklist está completo, clique em "Finalizar Preparo". O sistema: cria o registro de preparo com todos os dados coletados, gera a etiqueta de rastreabilidade e exibe na tela com opção de impressão via QZ-Tray.

**8. Finalizar com Composição Incompleta** Se faltam itens na conferência, o sistema exige observação preenchida e exibe um modal listando os itens faltantes, pedindo confirmação explícita.

---

### Descrição dos Campos e Elementos

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| **Inspeção Visual** | Sim | Checkbox: material livre de sujidade/oxidação |
| **Teste Funcional** | Sim | Checkbox: articulações e travas testadas |
| **Conferência** | Sim* | Para simples: checkbox. Para kits/caixas: barra de progresso + scan/manual |
| **Integrador Químico** | Sim | Checkbox + upload de foto da montagem final |
| **Sistema de Embalagem** | Sim | Dropdown com embalagens cadastradas (nome + dias de validade) |
| **Observações** | Condicional | Obrigatório se composição incompleta ou para rejeição |
| **Foto da Montagem** | Não | Upload de imagem para auditoria visual |
| **"Selecionar Tudo"** | — | Checkbox que marca todos os itens do checklist de uma vez |

---

### Notas Importantes

> [!NOTE] A bipagem no Checklist de Preparo funciona de forma diferente da Fila: aqui, o scan identifica **sub-itens dentro do kit/caixa** (não navega para outro item). O sistema busca via API para validar se o serial pertence a um material que compõe o kit.

> [!IMPORTANT] Materiais respiratórios que concluem o preparo recebem a etiqueta com `tipoProcesso: "DESINFECCAO"` ao invés de `"PREPARO"`, refletindo que passaram pela etapa adicional de desinfecção. O status final é o mesmo (`AGUARDANDO_ESTERILIZACAO`), mas a etiqueta diferencia visualmente.

> [!CAUTION] Ao rejeitar um material, ele volta **imediatamente** para `AGUARDANDO_LIMPEZA` no Expurgo, exigindo novo ciclo completo de lavagem. Esta ação é irreversível e registra movimentação com a justificativa fornecida.

---

### Como Essa Tela Impacta o Restante do Sistema

O Preparo é a **última etapa antes da esterilização**. Ao finalizar: o item recebe status `AGUARDANDO_ESTERILIZACAO` e fica disponível na fila de Nova Carga de esterilização; uma etiqueta de rastreabilidade é gerada com lote, validade (calculada pela embalagem), operador e data; a movimentação com `tipoEtapa: "PREPARO"` é registrada; e para kits/caixas incompletos, a lista de itens faltantes é anexada ao registro. A rejeição cria um ciclo de retrabalho que reinicia o processamento desde o Expurgo.
