---
title: Entrada de Insumos/Rouparia
description: Entrada de Insumos/Rouparia
---
# Entrada de Insumos/Rouparia

## Para que serve esta tela

Esta tela é usada para registrar a entrada de **insumos descartáveis e rouparia** na CME, inserindo-os diretamente no fluxo de Preparo. É o ponto de entrada de materiais **limpos e novos** no sistema — não de materiais sujos retornando do uso (esse fluxo é feito na tela de Recebimento de Materiais no Expurgo).

Exemplos de uso: chegada de uma remessa de gazes, registrar uma carga de campos cirúrgicos da lavanderia, ou dar entrada em insumos vindos do almoxarifado que precisam ser separados e embalados antes de ir ao estoque.

A tela funciona como um **carrinho de compras**: você configura um tipo de material por vez e o adiciona ao lote. Quando o lote estiver completo com todos os materiais da entrega, você finaliza tudo de uma vez e o sistema envia os itens diretamente para a fila do Preparo.

---

## Diferença em relação ao Recebimento de Materiais (Expurgo)

| Aspecto | Entrada de Insumos/Rouparia | Recebimento de Materiais (Expurgo) |
| --- | --- | --- |
| **Tipo de material** | Insumos novos e rouparia limpa | Materiais usados retornando para reprocessamento |
| **Estado dos itens** | Limpos, aguardando preparo | Sujos, precisam de limpeza antes do preparo |
| **Status gerado** | `LIMPO_AGUARDANDO_PREPARO` | `AGUARDANDO_LIMPEZA` |
| **Próximo passo** | Tela de Preparo | Fila de Limpeza no Expurgo |
| **Gera Troca Direta?** | Não | Opcional |

---

## Como usar — passo a passo

### Passo 1: Selecionar o Modelo do Material

Escolha o tipo de material que está sendo registrado na entrada. A lista exibe todos os **Modelos de Material** cadastrados no sistema.

> [!NOTE] **Modelo** é o tipo ou "template" do material — por exemplo, "Gaze 7,5 cm x 7,5 cm" ou "Campo Cirúrgico Estéril". Ele não corresponde a uma peça física específica, mas define o padrão que as peças físicas seguem. O sistema usa o modelo selecionado para identificar ou criar automaticamente o cadastro de material para o setor proprietário escolhido.

Se o modelo desejado ainda não existir, clique no botão **`+`** ao lado do campo para criar um novo modelo sem sair desta tela. Após a criação, o modelo é automaticamente selecionado no formulário.

---

### Passo 2: Selecionar o Setor Proprietário

Indique qual setor será o **dono** desses materiais após a entrada. O setor proprietário define de qual estoque os itens farão parte depois que saírem do Preparo.

> [!IMPORTANT] O campo Setor Proprietário **não é zerado** quando você adiciona um item ao lote. Isso é intencional para agilizar o trabalho quando vários materiais pertencem ao mesmo setor — você só precisa selecionar o setor uma vez. Se o próximo material for de um setor diferente, troque o campo manualmente antes de adicionar.

---

### Passo 3: Definir o modo de Rastreio (LOTE ou QR)

Este é o campo mais importante e determina como cada peça física será identificada no sistema.

#### Modo LOTE

Usado para insumos e rouparia sem identificação individual — gazes, compressas, campos cirúrgicos em pacote, entre outros. Você informa apenas a **quantidade** total e o sistema gera códigos de rastreio automáticos para cada unidade (`MAT-{id}-{timestamp}-{sequência}`).

Use os botões `+` e `−` ou digite diretamente no campo numérico para definir a quantidade.

> [!NOTE] No modo LOTE, as unidades criadas não têm código QR individual legível. O rastreio existe no banco de dados, mas não há etiquetas físicas distintas por unidade. É o modo apropriado para materiais que são consumidos em procedimentos sem necessidade de acompanhar cada peça.

#### Modo QR

Usado para materiais que precisam de **rastreabilidade individual por peça** — quando cada unidade tem (ou terá) sua própria etiqueta QR. Você escaneia um QR Code por vez e o sistema adiciona o serial à lista. A quantidade final é determinada automaticamente pelo número de itens bipados.

O campo de leitura aceita tanto leitura por scanner físico quanto digitação manual. O sistema avisa se um código já foi bipado nesta sessão e bloqueia duplicatas.

> [!IMPORTANT] No modo QR, o sistema verifica se o serial já existe no banco de dados da instituição. Se um código já estiver cadastrado em outro material ou contexto, a criação do lote inteiro será bloqueada com erro. Verifique a origem dos códigos antes de escanear.

---

### Passo 4: Adicionar ao Lote

Clique em **"Adicionar ao Lote"**. O item aparece na tabela do **Resumo da Carga** à direita, com seu nome, setor, quantidade e o tipo de rastreio registrado ("Rastreio por QR" ou "Entrada por Lote").

O formulário é parcialmente limpo (modelo, quantidade e seriais são zerados), mas o **Setor Proprietário é mantido** para facilitar o próximo registro.

Use o botão de **reset** (ícone de seta circular) para limpar todos os campos incluindo o setor, quando precisar começar uma configuração completamente nova.

Repita os passos 1 a 4 para cada tipo de material diferente da entrega.

---

### Passo 5: Revisar o Resumo da Carga

O painel direito mostra todos os materiais adicionados ao lote atual, com as colunas:

| Coluna | Descrição |
| --- | --- |
| **Material** | Nome do modelo e o tipo de rastreio aplicado |
| **Setor** | Setor proprietário dos itens |
| **Qtd** | Quantidade de unidades físicas a serem criadas |

O contador no cabeçalho ("Total de X unidades físicas") soma todas as unidades de todos os tipos no lote.

Cada linha tem um botão de lixeira para **remover** um item do lote antes da confirmação.

---

### Passo 6: Finalizar Carga e Enviar ao Preparo

Clique em **"Finalizar Carga e Enviar ao Preparo"**. O sistema processa cada item do lote sequencialmente — para cada tipo, cria os registros físicos no banco e os envia para o Preparo com status `LIMPO_AGUARDANDO_PREPARO`.

Após o processamento bem-sucedido de todos os itens, a tela redireciona automaticamente para **Preparo**, onde os novos itens já estarão disponíveis na fila.

> [!CAUTION] O botão de finalizar processa os itens **um por um em sequência**. Se ocorrer erro em algum item (ex.: serial duplicado), o sistema mostra um aviso de quantos foram processados com sucesso e quantos falharam. Os itens já processados com sucesso **não são desfeitos** — apenas o item com erro deixa de ser criado. Revise os itens com erro e faça uma nova entrada apenas para eles.

---

## Descrição completa dos campos

| Campo | Obrigatoriedade | Descrição |
| --- | --- | --- |
| **Modelo do Material** | Obrigatório | Define o tipo de material; determina nome e configurações base do item |
| **Setor Proprietário** | Obrigatório | Setor que será dono dos itens após o ciclo de Preparo; mantido entre adições ao lote |
| **Rastreio (LOTE / QR)** | Obrigatório | Define se os itens terão seriais automáticos (LOTE) ou seriais individuais por bipagem (QR) |
| **Quantidade** | Obrigatório (modo LOTE) | Número de unidades físicas a criar; mínimo 1 |
| **Campo de Bipagem** | Obrigatório (modo QR) | Recebe os QR Codes individuais via scanner ou digitação; duplicatas são bloqueadas |

---

## Pontos de Atenção

> [!IMPORTANT] **Esta tela não deve ser usada para materiais que retornam do uso.** Gazes já utilizadas, campos cirúrgicos sujos ou instrumentais usados em procedimentos devem ser registrados pela tela de **Recebimento de Materiais (Expurgo)**. Usar esta tela para materiais sujos pularia a etapa de limpeza e colocaria itens contaminados diretamente no fluxo de Preparo.

> [!NOTE] Se o Modelo selecionado ainda não tiver um cadastro de Material para a combinação Modelo + Setor Proprietário escolhida, o sistema **cria automaticamente** esse cadastro no momento da confirmação. Não é necessário pré-cadastrar o material antes de usar esta tela.

> [!CAUTION] No modo QR, o sistema valida que nenhum serial informado já existe no banco **para qualquer material da instituição**. Se você tentar registrar um QR Code que pertence a outra peça já cadastrada, toda a submissão do lote será bloqueada. Isso é uma proteção contra o cadastro duplicado acidental de peças físicas.

---

## Como essa tela impacta o restante do sistema

### Criação de itens físicos no status LIMPO_AGUARDANDO_PREPARO

Ao finalizar o lote, para cada tipo de material configurado, o sistema executa uma transação atômica que:

1. Localiza ou cria o registro `Material` correspondente à combinação Modelo + Setor Proprietário
1. Cria N registros `ItemMain` com status `LIMPO_AGUARDANDO_PREPARO` e localização `CME`
1. Vincula cada item ao setor proprietário informado
1. Cria um registro de `Movimentacao` com tipo `CARGA_INICIAL` para cada peça, registrando o operador responsável pela entrada

### Aparecimento automático na fila do Preparo

Os itens criados com status `LIMPO_AGUARDANDO_PREPARO` ficam disponíveis imediatamente na tela de **Preparo**, onde o operador seleciona a embalagem, registra os insumos usados e define a validade. Não é necessária nenhuma ação adicional — o redirecionamento automático após a confirmação já leva o usuário para a fila.

### Seriais automáticos no modo LOTE

Para itens sem QR Code individual, o sistema gera identificadores automáticos no formato `MAT-{materialId}-{timestamp}-{sequência}`. Esses seriais existem para fins de rastreabilidade interna — cada unidade física tem sua própria linha na tabela `ItemMain` e seu próprio histórico de `Movimentacao`, mesmo que não haja uma etiqueta física impressa para ela.

### Sem impacto no estoque de materiais prontos

Diferente do fluxo de Recebimento do Expurgo, a Entrada de Insumos **não gera Troca Direta** nem crédito para setores. Os itens entram diretamente no ciclo interno da CME. Eles só aparecerão como disponíveis para distribuição após completarem o ciclo de Preparo (e, se aplicável, Esterilização).

### Atualização do campo ultimaMovimentacao

Ao final de cada transação, o campo `ultimaMovimentacao` do registro `Material` é atualizado. Isso mantém a ordenação cronológica correta na listagem de materiais, fazendo com que os materiais mais recentemente trabalhados apareçam primeiro nas consultas.
