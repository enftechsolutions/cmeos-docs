---
title: Desinfecção Manual
description: Desinfecção Quimica
---
## Desinfecção Manual

### Finalidade da Tela

A Desinfecção Manual é uma etapa obrigatória exclusiva para **materiais respiratórios** que passaram por limpeza manual ou termodesinfectora. A tela gerencia o preparo da solução desinfetante (mistura química), o controle de validade dessa mistura, a imersão dos materiais nos vasilhames e a finalização do ciclo com liberação para o Preparo. Possui duas abas: **Painel Operacional** e **Histórico de Ciclos**.

---

### Como Utilizar

**Aba: Painel Operacional**

**1. Verificar Status dos Vasilhames** Cada vasilhame (recipiente de desinfecção) é exibido como um card. O badge indica: "Mistura OK" (verde) se há uma mistura aprovada e dentro da validade, "Expirada" (vermelho) se a mistura passou da validade, ou "Pend. Validação" se nenhuma mistura foi registrada.

**2. Preparar Mistura do Dia** Se o vasilhame não possui mistura válida, clique em "Preparar Mistura do Dia" (ou "Refazer Mistura" se expirada). O modal de Preparo de Mistura se abre, onde o operador registra o produto utilizado, concentração, quantidade de água e anexa uma foto do indicador químico como evidência. O backend valida a aprovação e registra o tempo de validade em horas.

**3. Monitorar Validade da Mistura** Vasilhames com mistura ativa exibem um timer de validade (ValidityTimer) com contagem regressiva. Quando a validade expira, o vasilhame é automaticamente bloqueado para novos ciclos até que uma nova mistura seja preparada.

**4. Selecionar Itens na Fila** A seção "Aguardando Desinfecção" lista todos os itens com status `AGUARDANDO_DESINFECCAO`. Marque os checkboxes dos itens desejados.

**5. Iniciar Ciclo de Desinfecção** Com itens selecionados e vasilhame com mistura válida, clique em "Iniciar com N itens". O sistema: valida no backend se a mistura está dentro da validade, cria um `CicloDesinfecaoManual`, vincula os itens e atualiza seus status para `EM_DESINFECCAO_MANUAL`, e registra movimentações.

**6. Acompanhar e Finalizar o Ciclo** O card do vasilhame passa a exibir um timer de ciclo (baseado no `tempoCicloDefault` do vasilhame), o nome do operador e a quantidade de volumes. Clique em "Finalizar" quando o processo estiver concluído. Os itens são liberados para `LIMPO_AGUARDANDO_PREPARO` e o contador de ciclos do vasilhame é incrementado.

**Aba: Histórico de Ciclos**

Exibe uma tabela com todos os ciclos finalizados, contendo: data/hora de início e fim, vasilhame utilizado, dados da diluição (produto, concentração, água), materiais processados com serial, operadores de início e fim, e botões para visualizar o integrador químico (foto) ou baixar relatório em PDF.

---

### Descrição dos Campos e Elementos

| Elemento | Descrição |
| --- | --- |
| **Card do Vasilhame** | Representa cada recipiente físico de desinfecção. Exibe nome, badge de status da mistura, timer de validade e ciclo ativo (se houver) |
| **Badge "Mistura OK/Expirada/Pend."** | Indicador visual do estado da solução desinfetante |
| **ValidityTimer** | Contagem regressiva da validade da mistura em horas, com atualização automática |
| **CicloTimer** | Timer de contagem regressiva do ciclo ativo, baseado no `tempoCicloDefault` do vasilhame |
| **Tabela "Aguardando Desinfecção"** | Lista dos itens com status `AGUARDANDO_DESINFECCAO` com checkbox, serial e material |
| **Modal de Preparo de Mistura** | Formulário para registro do produto, concentração, água e upload de foto do indicador |
| **Histórico — Diluição** | Coluna que exibe produto, concentração e água utilizados no ciclo |
| **Botão Integrador (flask)** | Abre visualizador de imagem em tela cheia da foto do indicador químico |
| **Botão Download PDF** | Gera relatório PDF do ciclo via `@react-pdf/renderer` |

---

### Notas Importantes

> [!NOTE] A validação de validade da mistura é feita tanto no frontend (para desabilitar o botão de iniciar ciclo) quanto no backend (para rejeitar a requisição caso a mistura tenha expirado entre o clique e a submissão). Essa dupla validação garante integridade mesmo em cenários de uso concorrente.

> [!IMPORTANT] Somente itens com status `AGUARDANDO_DESINFECCAO` aparecem nesta fila. Esse status é atribuído automaticamente pelo sistema durante a validação de ciclo de lavagem quando o material é da classe **RESPIRATÓRIO** e foi lavado manualmente ou em termodesinfectora. Materiais que não são respiratórios nunca passam por esta tela.

> [!CAUTION] Cada vasilhame só pode ter **um ciclo ativo por vez**. Enquanto houver um ciclo em andamento, o botão de iniciar outro ciclo não é exibido. Finalize o ciclo atual antes de iniciar um novo.

---

### Como Essa Tela Impacta o Restante do Sistema

A Desinfecção Manual é um **passo intermediário obrigatório** para respiratórios entre o Expurgo e o Preparo. Ao iniciar o ciclo, cada item recebe uma `Movimentacao` com `tipoEtapa: "DESINFECCAO_MANUAL"`. Ao finalizar, os itens passam para `LIMPO_AGUARDANDO_PREPARO` e aparecem automaticamente na fila de Preparo. O contador de ciclos do vasilhame é incrementado, permitindo rastreabilidade de quantos processamentos cada recipiente realizou. Todo o histórico fica disponível para auditorias com evidências fotográficas e dados da diluição.
