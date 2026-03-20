---
title: Ciclos Ativos
description: Visualização de Ciclos Ativos
---
## Ciclos Ativos — Esterilização

### Finalidade da Tela

Tela dedicada ao monitoramento de todos os ciclos de autoclave em andamento ou aguardando validação. Filtra automaticamente apenas ciclos do tipo `AUTOCLAVE`, separando-os dos ciclos de lavagem.

---

### Como Utilizar

Funciona de forma análoga à tela de Ciclos Ativos do Expurgo, mas filtrada para autoclaves. Cada card exibe: nome da autoclave, status (badge), hora de início, timer de contagem regressiva, lista de materiais na carga e botões de ação. Ciclos em `AGUARDANDO_VALIDACAO` exibem "Liberar Carga Agora" com animação pulsante. Gestores podem forçar finalização.

---

### Como Essa Tela Impacta o Restante do Sistema

Ponto de monitoramento. As ações de validação e interrupção são executadas via API — a liberação de carga redireciona para o formulário de validação da autoclave.

---

## Validação de Carga (Liberação da Autoclave)

### Finalidade da Tela

O formulário de "Liberação de Carga" conclui oficialmente o ciclo de esterilização, exigindo evidências documentais mais rigorosas que a validação de lavagem.

---

### Como Utilizar

**1. Resultado do Ciclo (Obrigatório):** Selecione APROVADO ou REPROVADO. **2. Relatório da Autoclave (Obrigatório):** Upload do registro impresso pela autoclave (PDF ou imagem). **3. Foto do Integrador Químico (Obrigatório):** Upload da imagem do indicador químico pós-ciclo. **4. Foto do Indicador Biológico (Opcional):** Upload da evidência do teste biológico. **5. Observações Técnicas:** Campo livre para registrar ocorrências. **6. Confirmar e Liberar Carga:** Após validação, o sistema gera o lote (padrão `STERIL-{equipamentoId}/{ano}-{contadorCiclos}`), atualiza os itens para `NO_ARMAZENAMENTO`, gera a etiqueta de rastreabilidade com `isEsteril: true` e exibe opção de impressão.

---

### Descrição dos Campos

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| **Resultado do Ciclo** | Sim | Dropdown APROVADO/REPROVADO |
| **Relatório da Autoclave** | Sim | PDF ou imagem do registro da máquina |
| **Foto do Integrador Químico** | Sim | Imagem do indicador químico |
| **Foto do Indicador Biológico** | Não | Imagem do teste biológico |
| **Observações Técnicas** | Não | Campo livre |

---

### Notas Importantes

> [!NOTE] Diferente da validação de lavagem (onde laudo e foto são opcionais), a validação de esterilização **exige obrigatoriamente** o relatório da autoclave e a foto do integrador químico. Essa exigência reflete os requisitos regulatórios da ANVISA para esterilização.

> [!IMPORTANT] Após a liberação, a etiqueta gerada contém o campo `isEsteril: true` e `tipoProcesso: 'ESTERILIZACAO'`, diferenciando visualmente materiais estéreis dos que passaram apenas por preparo. O lote usa prefixo `STERIL` ao invés de `LAV`.

---

### Como Essa Tela Impacta o Restante do Sistema

A validação de esterilização é o **ponto de transição para o armazenamento**. Os itens recebem status `NO_ARMAZENAMENTO` e ficam disponíveis para distribuição. O lote de esterilização é gravado em cada item, a etiqueta de rastreabilidade é gerada para impressão imediata, e o contador da autoclave é incrementado. A partir deste ponto, os materiais aparecem no Estoque CME como disponíveis para requisição.
