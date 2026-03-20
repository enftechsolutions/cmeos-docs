---
title: Expurgo
description: Funcionalidades tela expurgo
---
## Expurgo — Painel Principal

### Finalidade da Tela

O Painel de Expurgo é o centro de comando da etapa de higienização inicial. Ele reúne em uma única interface a **fila de materiais aguardando limpeza**, os **postos de trabalho** (manuais e por maquinário) e o **monitoramento em tempo real** dos ciclos em andamento. A tela também trata materiais externos (de empresas terceirizadas) de forma unificada com os internos.

---

### Como Utilizar

**1. Visualizar a Fila de Higienização** Ao acessar a tela, o sistema carrega automaticamente todos os volumes com status `AGUARDANDO_LIMPEZA` (internos) e `EM_EXPURGO` (externos). A tabela inferior exibe cada item com seu serial, nome do material e, para externos, um badge "Ext" com o nome da empresa de origem.

**2. Selecionar Itens para Processamento** Marque os checkboxes dos itens desejados na tabela ou use o checkbox do cabeçalho para selecionar todos. A seleção ativa os botões dos postos de trabalho — que ficam desabilitados enquanto nenhum item é selecionado.

**3. Iniciar Limpeza Manual (Bancada)** Clique em "Iniciar" no card de Limpeza Manual. Um modal de confirmação é exibido informando a quantidade de volumes. Ao confirmar, o sistema cria um ciclo do tipo `MANUAL` sem equipamento vinculado. Os itens internos passam para `EM_LIMPEZA_MANUAL` e os externos vão diretamente para `AGUARDANDO_BAIXA`.

**4. Iniciar Ciclo em Máquina** Para cada equipamento (Lavadora, Termodesinfectora, Ultrassônica), selecione o **Tipo de Ciclo** no dropdown correspondente e clique em "Processar". Um modal de confirmação aparece antes de iniciar. O sistema cria um ciclo de maquinário com snapshot dos parâmetros do ciclo para auditoria futura. Os itens internos passam para `EM_LIMPEZA`.

**5. Monitorar Ciclos Ativos** Cards de ciclos manuais ativos aparecem no grid de postos com badge "Ativo" e a hora de início. Cards de máquinas em uso exibem um timer de contagem regressiva baseado no `tempoCicloDefault` do equipamento. Quando o timer zera, o sistema atualiza automaticamente o status para `AGUARDANDO_VALIDACAO`.

**6. Validar ou Forçar Finalização** Ciclos em `AGUARDANDO_VALIDACAO` exibem um botão vermelho "Validar Ciclo" que redireciona para o formulário de validação. Administradores e Responsáveis CME podem usar "Forçar Finalização" para interromper o timer de um ciclo em andamento.

---

### Descrição dos Campos e Elementos

| Elemento | Descrição |
| --- | --- |
| **Fila de Higienização** | Tabela com todos os volumes aguardando processamento. Exibe serial, material, badge de origem (interno/externo) e nome da empresa para externos |
| **Checkbox (linha/cabeçalho)** | Seleção individual ou total dos itens para direcionamento aos postos de trabalho |
| **Card "Limpeza Manual"** | Posto virtual para registrar lavagem em bancada, sem equipamento |
| **Card de Equipamento** | Representa cada máquina cadastrada (Lavadora, Termodesinfectora, Ultrassônica) com seu nome, marca e dropdown de tipo de ciclo |
| **Dropdown "Ciclo de Lavagem"** | Lista os tipos de ciclo configurados para aquele equipamento. Destacado em vermelho se nenhum ciclo foi selecionado com itens marcados |
| **Timer (CicloTimer)** | Barra de progresso com contagem regressiva. Duração definida pelo `tempoCicloDefault` do equipamento |
| **Botão "Receber Material"** | Atalho para a tela de Recebimento no Expurgo |
| **Botão "Ciclos Ativos"** | Navega para a tela dedicada ao monitoramento detalhado de todos os ciclos |
| **Ícone de Histórico (⏱)** | Em cada equipamento, abre o modal de Auditoria (timeline de eventos daquele equipamento) |

---

### Notas Importantes

> [!NOTE] Os itens internos e externos aparecem na mesma fila e podem ser selecionados juntos para um mesmo ciclo. Internamente, o backend separa as listas (`itensIds` vs `externosIds`) e trata cada tipo de forma distinta — internos geram Movimentação; externos apenas mudam de status.

> [!IMPORTANT] Se o equipamento possui apenas um tipo de ciclo configurado, ele é pré-selecionado automaticamente. Se nenhum ciclo estiver configurado, o sistema exibe erro e impede o início. Garanta que todos os equipamentos tenham ao menos um tipo de ciclo associado no cadastro.

> [!CAUTION] A funcionalidade "Forçar Finalização" só é visível para perfis **Administrador** e **Responsável CME**. Ela interrompe o timer antes do tempo previsto — use apenas em situações excepcionais, pois o material pode não ter completado o ciclo de higienização adequadamente.

---

### Como Essa Tela Impacta o Restante do Sistema

O Painel de Expurgo é o **primeiro ponto de processamento ativo** após o recebimento. Ao iniciar um ciclo, cada item recebe um registro de `Movimentacao` com `tipoEtapa: "EXPURGO"` e `acao: "INICIO_CICLO"`, incluindo o snapshot do tipo de ciclo utilizado. Os itens ficam vinculados ao `cicloMaquinarioId` durante o processamento, impedindo que sejam utilizados em outras operações simultaneamente. Ao final do ciclo (na validação), o destino do item depende da sua classificação: materiais respiratórios lavados manualmente ou em termodesinfectora vão para **Desinfecção Manual** (`AGUARDANDO_DESINFECCAO`), enquanto os demais seguem para **Preparo** (`LIMPO_AGUARDANDO_PREPARO`). Itens externos não seguem o fluxo interno — após limpeza, vão diretamente para `AGUARDANDO_BAIXA`.
