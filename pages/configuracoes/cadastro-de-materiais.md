---
title: Cadastro de Materiais
description: Cadastrar Materiais para os Estoques
---
# Cadastro de Materiais

O **Cadastro de Materiais** é o local onde você transforma os **Modelos** (catálogo) em itens físicos reais que circularão pela CME. É nesta etapa que cada pinça, kit ou caixa recebe sua identidade única para rastreamento.

---

## Tipos de Registro

### 1. Material Unitário (Item Avulso)

Recomendado para o cadastro de itens individuais e únicos, como uma **"Pinça Kelly Curva Avulsa"** ou uma **"Tesoura Metzenbaum"**.

- **Cadastro por Lote (Sem QR Code físico):** O sistema gera automaticamente um QR Code interno para o item. Ideal para fluxos onde a etiqueta será impressa e fixada no momento do preparo.
- **Cadastro com QR Code (Existente):** Utilize este modo se o instrumental já possuir uma gravação a laser ou etiqueta pré-existente. Você pode realizar a leitura utilizando:
  - Leitor de código de barras (Biper);
  - Câmera do celular ou tablet;
  - Webcam.

### 2. Kits e Caixas

Utilizados para agrupar diversos instrumentais sob uma única unidade de rastreio.

- **Kits:** Você define o nome do kit no modelo e, no cadastro, informa a **composição** detalhada.
- **Caixas:** Funciona de forma semelhante aos kits, permitindo a alocação "pinça por pinça".
- **Rastreabilidade Composta:** Você pode configurar se cada item dentro da caixa/kit terá seu próprio QR Code individual ou se apenas a caixa/kit como um todo será rastreada.

---

## Atributos Importantes

Ao cadastrar qualquer material, dois campos são essenciais para o controle administrativo e de segurança:

| --- | **Campo** | **Funcionalidade** |
| --- | --- | --- |
| **Proprietário** | Define de qual estoque é o material (cadastrado previamente nas configurações ''Setores'') |  |
| **Implantável** | Identifica se o material é um item que ficará no paciente. Ativa protocolos específicos de esterilização e registros de carga. |  |

---

## Atalhos e Facilidades

- **Criação Rápida de Modelo:** Se você estiver cadastrando um material e perceber que o modelo ainda não existe, clique no ícone **"+"** ao lado do campo de seleção. Isso abre um atalho para criar o modelo sem interromper o fluxo de cadastro atual.
- **Identificação Visual:** Cada item cadastrado aparecerá vinculado ao seu respectivo proprietário e categoria, facilitando a organização no estoque e na distribuição.

---

> **Dica de Especialista:** Para itens de alto valor ou caixas cirúrgicas complexas, utilize sempre o **Rastreamento Individual** com QR Code para garantir que nenhum item seja perdido durante o processamento.

---

---

## 🔗 Como essa tela impacta o restante do sistema

O cadastro de materiais é o **ponto de entrada de todos os itens físicos no sistema**. A partir do momento em que um material é cadastrado, ele recebe uma identidade única — um código serial — e começa a circular pelo fluxo operacional da CME. Todo o restante do sistema opera sobre itens que foram previamente criados aqui.

**Expurgo** — ao receber um material sujo, o técnico identifica o item bipando seu QR Code ou digitando o código serial gerado no cadastro. O sistema localiza o item e inicia o registro da cadeia de rastreabilidade a partir daquele ponto. Materiais não cadastrados não podem ser identificados pelo sistema e ficam fora do fluxo rastreado.

**Preparo** — a composição definida no cadastro de kits e caixas é o que o sistema usa na etapa de preparo para guiar o técnico na conferência dos instrumentais. O sistema exibe quais peças deveriam estar presentes, permitindo identificar itens faltantes antes da embalagem.

**Esterilização** — o código serial do item é o vínculo que liga o material físico ao ciclo de esterilização registrado no sistema. É esse elo que garante a rastreabilidade completa: saber exatamente qual autoclave, qual ciclo, qual temperatura e qual técnico processou cada item específico.

**Setor proprietário e distribuição** — o campo **Proprietário** definido no cadastro determina para qual setor o material retorna após o processamento. Após a esterilização, quando o item vai para distribuição, o sistema usa essa informação para indicar o destino correto e garantir que cada material volte ao setor que é o dono.

**Campo Implantável e protocolo especial** — materiais marcados como **Implantável** ativam no sistema um protocolo de registro diferenciado, exigido pela legislação sanitária. Cargas que contenham itens implantáveis requerem controles adicionais de rastreabilidade, pois um implante que falha pode ser rastreado diretamente até o lote de esterilização, a autoclave utilizada e os indicadores de processo aplicados.

**Estoque** — os materiais cadastrados aparecem no estoque vinculados ao seu setor proprietário e com o status atual atualizado em tempo real: disponível, em processamento, aguardando limpeza, entre outros. O estoque é simplesmente a visão consolidada do estado de todos os materiais cadastrados nesta tela.

**Etiquetas** — o código serial gerado ou escaneado no cadastro é o identificador que aparece na etiqueta impressa ao final do preparo. É esse código que permite ao enfermeiro ou ao setor consultar o histórico completo de processamento de um material específico pela Busca Rápida do sistema.

> [!IMPORTANT] Materiais cadastrados como **lote** (sem QR Code individual) têm rastreabilidade limitada ao lote — o sistema sabe que foram processados, mas não consegue distinguir unidades individuais dentro do grupo. Para instrumentais de alto valor, caixas cirúrgicas complexas e qualquer item implantável, utilize sempre o cadastro com **QR Code individual** para garantir rastreabilidade completa unidade por unidade.
