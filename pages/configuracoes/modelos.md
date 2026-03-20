---
title: Modelos de Material
description: Como cadastrar e gerenciar os modelos de materiais no sistema.
---
# Modelos de Material

Os **Modelos de Material** são o catálogo do sistema — definem todos os tipos de materiais processados pela CME (caixas, instrumentais avulsos, respiratórios, rouparia, etc.).

Cada item físico na CME é sempre vinculado a um modelo.

---

## Tipos de material

| Tipo | Exemplos |
| --- | --- |
| **Instrumental** | Caixa cirurgia geral, pinça, tesoura |
| **Respiratório** | Circuito respiratório, máscara, nebulizador |
| **Insumo / Rouparia** | Gazes, Atadura, Campo (Entrada pela Area Limpa) |

---

## Como cadastrar um novo modelo

1. Acesse **Configurações → Modelos de Material**
1. Clique em **Novo Modelo**
1. Preencha:
   - **Nome** do modelo (ex: "Caixa Cirurgia Geral")
   - **Tipo** (instrumental, respiratório, etc.)
   - **Rastreamento individual** — se cada unidade terá QR Code próprio
   - **Composição** — para caixas e kits, informe os instrumentos que compõem o item
1. Salve

> **Informação:** Ao ativar **rastreamento individual**, o sistema gera um QR Code único para cada unidade deste modelo. Recomendado para caixas cirúrgicas e instrumentais de alto valor.

---

## Criar modelo rapidamente durante o fluxo

Você também pode criar um modelo rapidamente durante o processo de entrada de materiais (sem sair da tela de recepção). Clique no ícone **+** ao lado do campo de seleção de material.

---

## 🔗 Como essa tela impacta o restante do sistema

Os Modelos de Material são a base de toda a rastreabilidade do CME.OS. **Nenhum item físico pode existir no sistema sem estar vinculado a um modelo.** Isso significa que qualquer operação, entrada, processamento, distribuição, auditoria , depende diretamente dos modelos cadastrados aqui.

**Cadastro de itens físicos** — ao registrar um material no sistema (seja pela recepção, expurgo ou entrada limpa), o técnico sempre seleciona um modelo como base. É o modelo que define o nome do item, seu tipo e se cada unidade receberá um QR Code individual. Sem o modelo cadastrado, o item não pode ser criado.

**Rastreamento individual por QR Code** — quando o modelo é configurado com rastreamento individual ativo, o sistema gera automaticamente um QR Code único para cada unidade física registrada. Esse código acompanha o item por todo o seu ciclo de vida no CME: expurgo, limpeza, preparo, esterilização e distribuição. Modelos sem rastreamento individual são controlados em lote, sem código por unidade.

**Composição de caixas e kits** — a composição definida no modelo é utilizada na etapa de **Preparo** para guiar o técnico na conferência dos instrumentos. O sistema exibe quais peças deveriam estar na caixa com base na composição cadastrada, permitindo identificar itens faltantes antes da embalagem e esterilização.

**Tipo do material e roteamento no fluxo** — o tipo definido no modelo (Instrumental, Respiratório, Rouparia/Insumo) influencia como o item é processado e quais etapas do fluxo ele percorre dentro do CME. Materiais do tipo Respiratório, por exemplo, seguem protocolos e equipamentos distintos dos instrumentais cirúrgicos.

**Arsenal Setorial** — ao vincular itens a um setor, o técnico seleciona o modelo para identificar o tipo de item que está sendo registrado no arsenal. O modelo é o elo entre o item físico e o patrimônio do setor.

**Criação rápida durante o fluxo** — para não interromper a operação, o sistema permite criar um novo modelo diretamente durante o cadastro de materiais, sem precisar navegar até esta tela. Porém, modelos criados assim podem estar incompletos — recomenda-se revisá-los aqui posteriormente para garantir que composição, tipo e configuração de rastreamento estejam corretos.

> [!CAUTION] Evite excluir modelos que já possuem itens físicos registrados no sistema. A exclusão de um modelo remove a referência de todos os itens vinculados a ele, comprometendo o histórico de rastreabilidade. Se um modelo não for mais utilizado, deixe-o inativo em vez de excluir.
