---
title: Preparo
description: Fila de trabalho do preparo — montagem, embalagem e etiquetagem de materiais.
---
## Preparo — Fila de Trabalho

### Finalidade da Tela

A Área de Preparo é onde os materiais limpos são **inspecionados, montados, embalados e etiquetados** antes da esterilização. A tela apresenta a fila de itens com status `LIMPO_AGUARDANDO_PREPARO`, `AGUARDANDO_PREPARO` ou `REJEITADO_NA_ESTERILIZACAO`, permitindo acesso rápido por busca manual, bipagem de QR Code ou leitura por câmera.

---

### Como Utilizar

**1. Visualizar a Fila** A tabela central lista todos os itens aguardando preparo com: código serial, nome do material, tipo (via badge colorido), caixa associada (se houver), proprietário (setor ou empresa externa) e status. Um ícone de QR Code aparece nos itens que requerem bipagem individual.

**2. Iniciar Preparo por Busca/Bipagem** Use o campo "Busca Rápida / QR Code" no topo para digitar ou bipar o código serial do item. O sistema busca primeiro na lista carregada (otimização) e, se não encontrar, faz uma chamada à API para verificar. Se o item existe e está em status permitido, redireciona diretamente para o Checklist de Preparo. Se o status não permitir preparo, exibe erro sonoro e mensagem.

**3. Iniciar Preparo pela Tabela** Clique em "Iniciar Preparo" na linha do item desejado. O sistema navega para o formulário de checklist.

**4. Filtrar a Lista** Use o campo "Filtrar por material ou proprietário" para buscar na lista já carregada por nome de material, serial, proprietário ou caixa.

---

### Descrição dos Campos e Elementos

| Elemento | Descrição |
| --- | --- |
| **Busca Rápida / QR Code** | Campo com auto-focus periódico (a cada 3s) para bipagem contínua. Suporta digitação manual, leitor USB e câmera |
| **Contador "Fila de Trabalho"** | Exibe o total de itens aguardando preparo |
| **Coluna "Rastreio"** | Ícone de QR Code para materiais que exigem bipagem individual |
| **Coluna "Identificação"** | Código serial em fonte mono |
| **Coluna "Material"** | Nome do material. Se pertence a uma caixa, exibe ícone de caixa e nome da caixa |
| **Coluna "Tipo"** | Badge colorido: SIMPLES, CAIXA, KIT, etc. |
| **Coluna "Proprietário"** | Setor, empresa externa ou "CME Geral" |
| **Coluna "Status"** | Badge com o status humanizado (ex: "LIMPO AGUARDANDO PREPARO") |
| **Botão "Iniciar Preparo"** | Navega para o Checklist de Preparo do item |

---

### Notas Importantes

> [!NOTE] O auto-focus periódico (a cada 3 segundos) reposiciona o cursor no campo de busca se nenhum campo de texto estiver ativo. Isso permite que o operador use o leitor de código de barras sem precisar clicar no campo entre cada leitura.

> [!IMPORTANT] Itens rejeitados na esterilização (`REJEITADO_NA_ESTERILIZACAO`) retornam a esta fila para reprocessamento. Eles seguem o mesmo fluxo de checklist que um item novo.

---

### Como Essa Tela Impacta o Restante do Sistema

A Fila de Preparo é uma **tela de navegação** — sua principal função é direcionar o operador ao Checklist de cada item. Não realiza alterações no banco de dados; toda a lógica de processamento está no formulário de Checklist (próxima tela).
