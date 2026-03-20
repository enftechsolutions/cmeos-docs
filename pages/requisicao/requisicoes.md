---
title: Requisições
description: Como efetuar Requisições ao Setor CME
---
# Nova Requisição de Material

## Para que serve esta tela

Esta é a tela de **solicitação de materiais estéreis** usada pelos setores do hospital. Quando um enfermeiro ou técnico precisa de materiais processados pela CME — como pinças, pacotes cirúrgicos ou insumos — ele acessa esta tela, monta o pedido e gera um **Código de Validação** de 6 dígitos. Esse código é a "senha" que ele levará pessoalmente à CME para retirar os materiais.

A tela foi projetada para funcionar de dois modos de acordo com o perfil do usuário logado:

- **Modo Remoto (Enfermeiro):** O próprio solicitante preenche a tela no computador do setor. Ele mesmo é identificado como solicitante automaticamente.
- **Modo Balcão (Operador/Administrador):** Alguém chega fisicamente ao balcão da CME. O atendente escaneia o crachá da pessoa para registrar quem está solicitando.

---

## Como usar

### Passo a passo

**1. Selecionar o Setor de Destino**

Escolha o setor para o qual os materiais serão destinados. Este campo é obrigatório e define a lista de materiais disponíveis para solicitação.

> [!NOTE] A lista de materiais é atualizada automaticamente ao trocar o setor. Apenas materiais do estoque central da CME (ou do arsenal do próprio setor) com validade vigente aparecem como opção.

---

**2. Identificar o Solicitante (apenas no Modo Balcão)**

Se você for Operador ou Administrador, o campo **"Identificação do Solicitante"** aparecerá no formulário. Escaneie o crachá da pessoa que está fazendo o pedido presencialmente. Isso vincula o nome do profissional ao pedido para rastreabilidade.

---

**3. Preencher os Dados do Paciente**

Esta seção aparece para a maioria dos setores e é opcional. Preencha se o material será usado em um paciente específico:

| Campo | Descrição |
| --- | --- |
| **Atendimento** | Número do prontuário ou atendimento hospitalar |
| **Leito** | Identificação do leito (ex.: `104A`) |
| **Nome Completo** | Nome do paciente para registro e rastreabilidade |

> [!NOTE] Os dados do paciente são opcionais — o formulário pode ser enviado sem preenchê-los caso o material seja para uso geral do setor.

---

**4. Adicionar os Materiais**

Na seção **"Materiais Solicitados"**, selecione o material pelo nome e defina a quantidade. É possível adicionar múltiplos materiais em um único pedido.

> [!IMPORTANT] Só aparecem na lista os materiais que possuem **ao menos uma unidade física disponível** no estoque e dentro do prazo de validade. Materiais vencidos ou sem estoque não são exibidos.

---

**5. Gerar o Código**

Clique no botão **"GERAR CÓDIGO"**. Em caso de sucesso, o sistema exibe uma tela com o código de 6 dígitos em destaque.

> [!IMPORTANT] Dirija-se à CME e informe o código ao atendente. Sem ele, o pedido não pode ser atendido. O código é válido enquanto a requisição estiver com status **Pendente**.

---

## Descrição dos Campos

| Campo | Obrigatoriedade | Observação |
| --- | --- | --- |
| **Setor de Destino** | Obrigatório | Define o destino dos materiais e filtra a lista disponível |
| **Identificação do Solicitante** | Obrigatório (Modo Balcão) | Aparece apenas para perfis Operador/Administrador; escaneie o crachá |
| **Atendimento** | Opcional | Número do atendimento/prontuário do paciente |
| **Leito** | Opcional | Identificação do leito do paciente |
| **Nome Completo do Paciente** | Opcional | Nome para vinculação do material ao paciente |
| **Material** | Obrigatório | Seleção do tipo de material; lista filtra por disponibilidade real de estoque |
| **Quantidade** | Obrigatório | Mínimo 1; para materiais rastreáveis individualmente, cada unidade gera um registro separado |

---

## Pontos de Atenção

> [!CAUTION] O código gerado é de **uso único e pessoal**. Não envie o código por mensagem — ele deve ser apresentado presencialmente na CME para garantir que o material seja entregue à pessoa correta.

> [!IMPORTANT] **Materiais rastreáveis vs. materiais a granel:** Instrumentais cirúrgicos e similares têm rastreabilidade individual — ao solicitar 3 unidades, o sistema cria 3 registros separados, um para cada peça física. Insumos e rouparia (classe `INSUMO_ROUPARIA`) são tratados como quantidade em bloco e geram um único registro.

> [!NOTE] Se um material que você precisa **não aparece na lista**, verifique se há unidades disponíveis no estoque com validade vigente. Materiais vencidos ou sem estoque físico são automaticamente ocultados da listagem.

---

## Como essa tela impacta o restante do sistema

### Criação de registros no banco

Ao clicar em "Gerar Código", o sistema executa uma transação atômica que cria um ou mais registros na tabela `Requisicao`, todos vinculados ao mesmo código de validação de 6 dígitos. O status inicial é sempre `PENDENTE`.

Para materiais rastreáveis individualmente (não pertencentes à classe `INSUMO_ROUPARIA`), **cada unidade solicitada gera uma requisição separada**. Ou seja, um pedido de 3 bisturis cria 3 registros distintos, permitindo que cada peça seja dispensada com um item físico diferente e tenha seu próprio histórico de movimentação.

Para materiais a granel (rouparia, gazes, insumos), é criado um único registro com a quantidade total.

---

### Fila de Atendimento (Requisições Pendentes)

Assim que o pedido é criado, ele aparece imediatamente na tela **Distribuição → Requisições Pendentes**, que é a fila de trabalho da CME. O atendente da CME vê o setor solicitante, o nome do solicitante, o material pedido e a quantidade. Ao clicar em "Validar e Atender", ele confirma o código de 6 dígitos e seleciona o item físico a dispensar.

---

### Rastreabilidade e Movimentação

No momento do atendimento pela CME, o sistema:

1. Atualiza a `Requisicao` para status `ABERTA` (ou `CONCLUIDA` para insumos de vida única)
1. Atualiza o `ItemMain` para status `DISTRIBUIDO` (ou `CONSUMIDO` para vida única), registrando o setor de destino como localização
1. Cria um registro de `Movimentacao` com a etapa `DISTRIBUICAO` ou `CONSUMO`, vinculando o atendente, o item físico e a requisição

Isso garante que o histórico completo de cada peça — de quem pediu, para qual setor, para qual paciente, e quem dispensou — fique permanentemente registrado no sistema.

---

### Dados do Paciente

As informações de atendimento, leito e nome do paciente são salvas diretamente nos registros de `Requisicao`. Elas ficam disponíveis nos relatórios de rastreabilidade e no histórico de distribuição, permitindo identificar em qual procedimento/paciente cada material foi utilizado.

---

### Materiais Externos

Se o pedido incluir materiais provenientes de processamento externo (estoque de empresas reprocessadoras), a lógica é ligeiramente diferente: ao ser atendido, o registro no `EstoqueExterno` muda de status `EM_ESTOQUE` para `EM_USO`, vinculando o lote de material externo diretamente ao setor de destino. Não há um item físico rastreável individualmente — o controle é por lote e quantidade.
