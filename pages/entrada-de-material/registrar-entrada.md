---
title: 'Registrar Entrada'
description: 'Registrar Entrada de Material'
---
# Recebimento de Materiais (Expurgo)

## Para que serve esta tela

Esta é a **porta de entrada física da CME** para materiais sujos vindos dos setores do hospital. Quando um profissional chega ao balcão do expurgo trazendo instrumentais, pacotes ou outros materiais utilizados, o operador da CME usa esta tela para registrar essa entrada, identificar cada item e iniciar o ciclo de reprocessamento.

A tela opera de duas formas distintas controladas pelo **toggle "É Troca Direta?"** no canto superior direito. A diferença entre os dois modos é fundamental para o funcionamento do estoque e da logística de distribuição:

---

## Os dois modos de operação

### Modo 1 — Troca Direta (toggle ATIVADO — padrão)

Utilizado quando o setor traz materiais sujos **e espera receber materiais limpos equivalentes em troca**. É o fluxo padrão e mais comum na CME.

Ao confirmar o lote nesse modo:

- O sistema registra que a CME recebeu os materiais do setor
- Gera um **código de 6 dígitos** que funciona como um crédito: o setor pode apresentar esse código na CME para retirar materiais limpos equivalentes (via tela de Distribuição)
- A propriedade dos itens é transferida para a CME, que passa a ser responsável pelo reprocessamento

> [!IMPORTANT] O código gerado deve ser entregue ao portador logo após a confirmação. Uma janela com o código aparece automaticamente na tela no momento da confirmação. Esse código é o vínculo entre os materiais sujos recebidos e os materiais limpos que serão entregues depois.

---

### Modo 2 — Devolução Padrão / Entrada Simples (toggle DESATIVADO)

Utilizado quando os materiais entram na CME para processamento **sem gerar crédito de retirada**. Casos de uso: materiais enviados por cortesia, itens de uso único sendo devolvidos para descarte controlado, ou qualquer situação em que o setor não irá retirar materiais em troca.

Nesse modo, o sistema registra a entrada, move os itens para o status de aguardando limpeza, mas **não gera código de troca nem débito no registro da Troca Direta**.

> [!NOTE] Mesmo no modo Entrada Simples, é criado um registro interno de `TrocaDireta` com tipo `ENTRADA_SIMPLES` para fins de rastreabilidade e auditoria. A diferença é que o saldo devedor não é gerado para o setor.

---

## Como usar — passo a passo

### Passo 1: Identificar a entrega

Antes de adicionar qualquer material à bandeja, preencha as informações de identificação:

**Portador / Solicitante** Escaneie o crachá do profissional que trouxe os materiais. O sistema irá identificar o nome e a matrícula do portador e vincular essa informação ao registro. Se o setor de origem ainda não estiver preenchido, o sistema tenta preenchê-lo automaticamente com o setor do portador.

> [!NOTE] O escaneamento do portador é opcional mas recomendado. Em caso de dúvidas posteriores sobre a origem dos materiais, essa informação é a principal referência de rastreabilidade da entrega.

**Setor de Origem** Selecione o setor de onde vieram os materiais. Este campo é **obrigatório** para confirmar o lote. Ele determina de qual setor os itens manuais serão retirados e para qual setor o crédito de troca será gerado.

> [!IMPORTANT] Se você escanear um item antes de selecionar o setor, o sistema preenche o setor automaticamente com base no setor proprietário do item escaneado. Se você já tiver selecionado um setor e escanear um item de outro setor, o sistema **bloqueia o escaneamento** com um aviso de conflito para evitar mistura de materiais de setores diferentes no mesmo lote.

---

### Passo 2: Adicionar itens à Bandeja

Existem dois métodos para adicionar itens. Você pode alternar entre eles pelas abas **"Bipagem Unitária"** e **"Entrada Manual"**.

#### Método A — Bipagem Unitária (recomendado)

Use o leitor de código de barras ou a câmera para escanear o QR Code impresso na etiqueta de cada material. A cada escaneamento bem-sucedido:

- O item é identificado pelo seu código serial único
- É adicionado à bandeja com seu nome e serial visíveis
- O sistema emite um bipe de confirmação
- O campo de leitura é limpo automaticamente para o próximo escaneamento

O campo de bipagem **fica permanentemente em foco** durante o uso (ele se auto-foca a cada 2 segundos se nenhum outro campo estiver ativo), permitindo escaneamento contínuo sem precisar clicar no campo a cada item.

> [!CAUTION] O sistema não permite escanear o mesmo item duas vezes. Se um serial já estiver na bandeja e for bipado novamente, o sistema emite um bipe de erro e exibe um aviso. Isso evita duplicidade no registro.

#### Método B — Entrada Manual

Usado quando o material **não possui QR Code** ou quando a etiqueta está ilegível. Nesse modo:

1. Selecione o setor de origem (obrigatório antes de usar esse campo)
1. Escolha o material da lista — ela mostra apenas o que está registrado no inventário daquele setor
1. Defina a quantidade
1. Clique em **Adicionar**

> [!IMPORTANT] A lista do modo manual mostra o saldo disponível de cada material no setor (`[Disp: N]`). Se você tentar adicionar uma quantidade maior do que o disponível, o sistema bloqueia a adição com um aviso. Isso garante que o recebimento não ultrapasse o que o setor efetivamente possui.

> [!NOTE] Itens adicionados manualmente **não têm código serial individual** na bandeja — são identificados pela etiqueta "Manual" em laranja. No momento da confirmação do lote, o sistema seleciona automaticamente os itens físicos mais antigos do setor (regra FIFO) para vincular ao registro. Isso é menos preciso do que a bipagem, que garante rastreabilidade individual peça a peça.

---

### A Bandeja de Entrada (painel direito)

O painel à direita mostra em tempo real o conteúdo do lote que está sendo montado:

| Indicador | O que mostra |
| --- | --- |
| **Modelos** | Número de tipos distintos de material na bandeja |
| **Total Qtd** | Soma de todas as unidades (considerando quantidades manuais) |
| **Lista de itens** | Cada entrada, com nome, serial (se bipado) ou "Manual", e quantidade |

Cada item na bandeja pode ser **removido individualmente** pelo ícone de lixeira que aparece ao passar o cursor sobre ele.

Na parte inferior do painel, um indicador mostra o modo ativo (Troca Direta ou Devolução Padrão) antes do botão de confirmação.

---

### Passo 3: Observações Adicionais (opcional)

Campo de texto livre para registrar qualquer informação relevante sobre a entrega, como condição dos materiais, horário fora do padrão, ou instruções especiais de processamento. Essas observações ficam gravadas no registro da operação.

---

### Passo 4: Confirmar Recebimento

Clique em **"Confirmar Recebimento"**. O botão só fica ativo quando há pelo menos um item na bandeja e o setor de origem está selecionado.

Ao confirmar:

- Uma transação atômica é executada no servidor
- Cada item tem seu status alterado para **AGUARDANDO\_LIMPEZA** e sua localização registrada como "Expurgo"
- Um registro de `Movimentacao` é criado para cada peça com o tipo da operação e os dados do portador
- Se for Troca Direta: o saldo devedor é criado no registro da `TrocaDireta`, a propriedade passa para a CME, e o **modal com o código de 6 dígitos** é exibido automaticamente
- A bandeja é esvaziada e fica pronta para o próximo lote
- O item processado aparece na seção **"Últimos Processados"** na parte inferior da tela (mostra os 3 últimos lotes da sessão atual)

---

## Descrição completa dos campos

| Campo | Obrigatoriedade | Descrição |
| --- | --- | --- |
| **Toggle "É Troca Direta?"** | — | Define o modo da operação: ativado gera crédito de retirada para o setor; desativado é apenas entrada para processamento |
| **Portador / Solicitante** | Opcional | Escaneamento de crachá para identificar quem trouxe os materiais |
| **Setor de Origem** | Obrigatório | Setor de onde vieram os materiais; determina o inventário disponível no modo manual e o destino do crédito |
| **Campo de Bipagem** | Opcional (modo Scan) | Recebe o QR Code do material; auto-foco contínuo para fluxo de escaneamento em série |
| **Material no Inventário do Setor** | Opcional (modo Manual) | Lista de materiais registrados no setor selecionado, com saldo disponível |
| **Quantidade** | Obrigatório (modo Manual) | Número de unidades a receber; limitado ao saldo disponível no setor |
| **Observações Adicionais** | Opcional | Texto livre sobre condição da entrega ou instruções especiais |

---

## Pontos de Atenção

> [!CAUTION] **Não misture materiais de setores diferentes em um mesmo lote.** O sistema bloqueia essa situação via scan (detecta conflito de setor proprietário), mas no modo manual é responsabilidade do operador garantir que todos os itens adicionados pertencem ao setor selecionado. Lotes com mistura comprometem o controle de estoque setorial.

> [!IMPORTANT] **Sempre que possível, prefira o modo de Bipagem Unitária.** A entrada manual depende de seleção FIFO automática de itens físicos, o que reduz a rastreabilidade individual. A bipagem garante que você sabe exatamente qual peça física entrou no expurgo e pode rastreá-la peça a peça em todo o seu ciclo.

> [!NOTE] O campo de bipagem foca-se automaticamente a cada 2 segundos enquanto a tela está aberta e nenhum outro campo está ativo. Isso é intencional para agilizar o trabalho em estações de recebimento onde o operador está de pé e usando o leitor. Clique em outro campo sempre que precisar digitar.

> [!CAUTION] O botão "Confirmar Recebimento" **não pode ser desfeito** após o clique. Toda a operação é gravada atomicamente no banco de dados. Se um erro for cometido (setor errado, item errado), será necessário contatar um Administrador para correção manual.

---

## Como essa tela impacta o restante do sistema

### Status dos itens físicos

Para cada item confirmado no lote, o registro `ItemMain` correspondente é atualizado:

- **`statusAtual`** → `AGUARDANDO_LIMPEZA`
- **`setorId` e `setorAtual`** → CME (o item fisicamente passa a estar no expurgo da CME)
- **`localizacao`** → "Expurgo"
- **`setorProprietarioId`** → muda para CME se for Troca Direta; mantém o setor original se for Entrada Simples

Essa mudança de status torna o item visível na fila de processamento do expurgo (tela de **Limpeza no Expurgo**) e o remove do arsenal e inventário do setor de origem.

---

### Registro de Movimentação (auditoria)

Para cada peça processada, é criado um registro na tabela `Movimentacao` com um dos seguintes tipos, dependendo da combinação de modo e método de entrada:

| Combinação | Tipo registrado |
| --- | --- |
| Troca Direta + Bipagem | `ENTRADA_TROCA_SCAN` |
| Troca Direta + Manual | `ENTRADA_TROCA_MANUAL` |
| Entrada Simples + Bipagem | `SERVICO_LIMPEZA_SCAN` |
| Entrada Simples + Manual | `SERVICO_LIMPEZA_MANUAL` |

Todos os registros armazenam: ID do setor de origem, ID da operação (TrocaDireta), código de 6 dígitos, nome do portador e o operador da CME que confirmou.

---

### Registro de Troca Direta e saldo devedor

Independentemente do modo, o sistema cria um registro `TrocaDireta` para fins de rastreabilidade. No modo Troca Direta, para cada tipo de material recebido, é criado um `ItemTrocaDireta` com `saldo` negativo (representando a dívida da CME com o setor: a CME recebeu N unidades sujas e deve devolver N unidades limpas).

Esse saldo é visível na tela **Meus Pedidos & Trocas** do setor solicitante (coluna "Saldo Devedor"), e é decrementado à medida que a CME vai entregando os materiais limpos de volta.

---

### Entrada dos itens na fila de limpeza

Assim que o lote é confirmado, os itens com status `AGUARDANDO_LIMPEZA` passam a aparecer nas telas de processamento do expurgo:

- **Limpeza Manual**: operador registra a limpeza item a item
- **Limpeza em Maquinário**: os itens são agrupados em ciclos de lavadora termodesinfectora

O recebimento aqui é o **ponto de partida de todo o ciclo de reprocessamento** — sem ele, os itens continuam registrados como estando no setor e nunca entram no fluxo da CME.

---

### Setor de Origem e inventário

Ao confirmar o recebimento, os itens saem do inventário do setor de origem. No modo Manual (sem scan), o sistema usa lógica FIFO (First In, First Out) para selecionar quais itens físicos específicos serão movidos — sempre os registros mais antigos primeiro. Isso mantém a consistência do inventário mesmo sem bipagem individual.

No modo Troca Direta, o `setorProprietarioId` é transferido para a CME, o que significa que esses itens **deixam de ser contados no arsenal do setor** até que a CME os devolva processados.
