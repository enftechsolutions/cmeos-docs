---
title: Esterlização
description: Descrição de Esterilização
---
## Esterilização — Nova Carga

### Finalidade da Tela

O Painel de Esterilização gerencia o carregamento de **autoclaves** com materiais que concluíram o preparo. A estrutura é análoga ao Painel de Expurgo, mas focada exclusivamente em equipamentos do tipo `AUTOCLAVE` e itens com status `AGUARDANDO_ESTERILIZACAO`. Inclui uma confirmação adicional de segurança sobre indicadores químicos antes do início do ciclo.

---

### Como Utilizar

**1. Visualizar a Fila de Preparos** A tabela "Fila de Preparos (Prontos p/ Esterilizar)" lista todos os itens com status `AGUARDANDO_ESTERILIZACAO`. Exibe serial, material ou nome da caixa (com ícone de caixa para kits). Selecione itens via checkbox.

**2. Selecionar Autoclave e Tipo de Ciclo** Os cards de autoclaves exibem equipamentos do tipo `AUTOCLAVE`. Para cada uma, selecione o tipo de ciclo no dropdown "Ciclo de Processamento". Se a autoclave possui apenas um tipo configurado, ele é pré-selecionado.

**3. Iniciar Ciclo (Confirmação em Duas Etapas)** Ao clicar em "Carregar", o sistema exibe dois modais em sequência: primeiro "Segurança de Carga" — confirmando que os indicadores químicos físicos foram inseridos na autoclave; depois "Confirmar Início" — com a contagem de volumes. Só após ambas confirmações o ciclo é criado via API dedicada (`/api/ciclos-autoclave/iniciar`).

**4. Acompanhar Ciclos Ativos** Autoclaves em uso exibem timer de contagem regressiva, hora de início e ID do ciclo. Ciclos finalizados mostram badge "Validar" com botão "Liberar Carga" em vermelho.

**5. Funcionalidades de Gestão** Ícone de histórico em cada autoclave abre o modal de auditoria. Perfis Administrador/Responsável CME podem forçar finalização de ciclos em andamento.

---

### Descrição dos Campos e Elementos

| Elemento | Descrição |
| --- | --- |
| **Fila de Preparos** | Itens com status `AGUARDANDO_ESTERILIZACAO`, com serial e nome do material/caixa |
| **Card de Autoclave** | Cada equipamento tipo AUTOCLAVE com nome, marca, dropdown de ciclo e status |
| **Dropdown "Ciclo de Processamento"** | Tipos de ciclo da autoclave (ex: 134°C/18min, 121°C/30min) |
| **Modal "Segurança de Carga"** | Primeira confirmação: indicadores químicos inseridos |
| **Modal "Confirmar Início"** | Segunda confirmação: quantidade de volumes |
| **Timer (CicloTimer)** | Contagem regressiva com duração do `tempoCicloDefault` da autoclave |
| **Botão "Liberar Carga"** | Redireciona para formulário de validação da autoclave |

---

### Notas Importantes

> [!IMPORTANT] A esterilização usa uma API separada (`/api/ciclos-autoclave/iniciar`) do expurgo (`/api/ciclos-maquinario/iniciar`). Ambas compartilham a mesma tabela de ciclos, mas o fluxo de autoclave adiciona o campo `confirmouIndicador: true` ao payload e a validação exige mais evidências.

> [!CAUTION] A confirmação em duas etapas (indicadores + quantidade) é uma medida de segurança crítica. Esterilizar sem indicadores químicos adequados pode resultar em materiais não estéreis sendo liberados para uso, representando risco ao paciente.

---

### Como Essa Tela Impacta o Restante do Sistema

Ao iniciar o ciclo, os itens passam de `AGUARDANDO_ESTERILIZACAO` para `EM_ESTERILIZACAO` e ficam vinculados ao ciclo. Movimentações com `tipoEtapa: "ESTERILIZACAO"` e `acao: "INICIO_CICLO"` são registradas. O snapshot do ciclo selecionado é salvo no registro para auditoria futura.
