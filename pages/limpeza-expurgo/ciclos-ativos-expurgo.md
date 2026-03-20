---
title: Ciclos Ativos — Expurgo
description: Tela de ciclos ativos - Expurgo
---
## Ciclos Ativos — Expurgo

### Finalidade da Tela

A tela de Ciclos Ativos oferece uma **visão dedicada e detalhada** de todos os processos de lavagem em andamento ou aguardando validação. Enquanto o Painel de Expurgo mostra os ciclos como parte do grid de postos, esta tela os apresenta como cards individuais em grid, com informações expandidas sobre cada processo.

---

### Como Utilizar

**1. Acessar a Tela** Clique em "Ciclos Ativos" no Painel de Expurgo ou acesse diretamente pelo menu lateral. A tela carrega automaticamente todos os ciclos com status `EM_ANDAMENTO` ou `AGUARDANDO_VALIDACAO`.

**2. Visualizar Informações do Ciclo** Cada card exibe: nome do equipamento (ou "Limpeza Manual"), ID do ciclo, hora de início, nome do operador que iniciou e o status atual. Ciclos de máquina exibem o timer de contagem regressiva; ciclos manuais mostram "Bancada Manual — Sem limite de tempo".

**3. Expandir a Carga** Clique em "Carga (N)" para expandir/recolher a lista de itens dentro daquele ciclo. Cada item mostra o nome do material e o setor proprietário.

**4. Validar Carga (Ciclos Finalizados)** Ciclos com status `AGUARDANDO_VALIDACAO` exibem um botão vermelho "Validar Carga" que redireciona para o formulário de validação do ciclo.

**5. Finalizar Ciclo Manual** Ciclos manuais em andamento exibem um botão "Finalizar" que redireciona diretamente para a validação, já que não possuem timer automático.

**6. Interromper Timer (Apenas Gestores)** Para ciclos de máquina em andamento, perfis Administrador e Responsável CME veem o botão "Interromper Timer" que força a conclusão do ciclo antes do tempo.

---

### Descrição dos Campos e Elementos

| Elemento | Descrição |
| --- | --- |
| **Barra de status colorida** | Faixa fina no topo do card: azul para ciclos normais, vermelha para aguardando validação, índigo para manuais |
| **Ícone do tipo** | Disco rígido (HardDrive) para máquinas, Usuário (User) para manuais |
| **Início / Operador** | Boxes compactos mostrando hora de início e primeiro nome de quem iniciou o ciclo |
| **Timer/Progresso** | Barra animada para máquinas com contagem regressiva, ou indicador "Bancada Manual" para ciclos sem equipamento |
| **Carga (expandível)** | Accordion que lista todos os itens dentro do ciclo com material e setor |
| **Badge de status** | "Ativo" (azul) ou "Validar" (vermelho pulsante) |

---

### Notas Importantes

> [!NOTE] Quando o timer de um ciclo de máquina atinge zero, o sistema executa automaticamente a transição para `AGUARDANDO_VALIDACAO` via chamada à API `finalizar-timer`. A tela é recarregada automaticamente após essa transição.

> [!IMPORTANT] Ciclos manuais não possuem duração predefinida. O operador é responsável por avaliar quando a limpeza foi concluída e clicar em "Finalizar" para prosseguir à validação.

---

### Como Essa Tela Impacta o Restante do Sistema

Esta tela é um **painel de monitoramento** — as ações de validação e interrupção de timer são executadas por chamadas à API que: atualizam o status do ciclo, registram movimentações de auditoria e liberam os itens para a próxima etapa. A tela de Ciclos Ativos não cria dados novos; ela permite acompanhar e agir sobre ciclos já criados no Painel de Expurgo.
