---
title: Tipos de Embalagem
description: Como gerenciar os tipos de embalagem e seus prazos de validade.
---
## 📦 Tipos de Embalagem e Validade

As configurações de embalagem são fundamentais para garantir a segurança do processo de esterilização. Elas definem quais opções estarão disponíveis durante a etapa de **Preparo** e automatizam o cálculo da **data de validade** que será impressa nas etiquetas.

### Por que configurar?

Ao cadastrar uma embalagem, o sistema passa a calcular automaticamente o vencimento de cada item esterilizado, evitando erros manuais e garantindo que o material esteja sempre dentro dos padrões de segurança hospitalar.

---

### 🚀 Como cadastrar uma nova embalagem

1. Acesse o menu **Configurações** ⚙️ e selecione **Embalagens**.

1. No campo **Cadastrar Novo Invólucro**, preencha as informações:

   - **Nome da Embalagem:** Utilize nomes claros (ex: "Papel Grau Cirúrgico + Filme").
   - **Validade (Dias):** Insira o tempo de prateleira recomendado pelas suas padronizações

1. Clique em **Adicionar**;

   > **Dica de mestre:** Você pode editar ou excluir embalagens existentes a qualquer momento clicando nos ícones de lápis (editar) ou lixeira (excluir) na tabela de listagem.

---

### 📊 Referências de Validade (EXEMPLOS)

Abaixo, apresentamos algumas validades comumente utilizadas no mercado brasileiro para auxiliar na sua configuração inicial:

| **Tipo de Embalagem** | **Validade Sugerida (Exemplo)** | **Observação** |
| --- | --- | --- |
| **Papel Grau Cirúrgico** | 180 dias | Selagem térmica íntegra. |
| **SMS (Manta)** | 30 a 90 dias | Depende da gramatura e do fabricante. |
| **Container Rígido** | 180 a 365 dias | Filtro de barreira microbiana deve estar em dia. |
| **Tyvek** | 365 dias | Ideal para esterilização a baixa temperatura (Peróxido). |
| **Tecido de Algodão** | 07 dias | Conforme recomendações da SOBECC. |

---

### ⚠️ Nota Importante sobre Conformidade

As validades sugeridas acima são apenas **referências bibliográficas**. A definição final do prazo de validade é de responsabilidade técnica do enfermeiro responsável pelo CME, devendo sempre respeitar:

- As instruções de uso do fabricante do invólucro.
- As condições de armazenamento (temperatura e umidade).
- Os protocolos internos da sua instituição e as normas da **RDC 15/2012**.

---

## 🔗 Como essa tela impacta o restante do sistema

As embalagens cadastradas aqui têm impacto direto e automático em duas etapas críticas do fluxo operacional: o **Preparo** e a **impressão de etiquetas**. Sem ao menos uma embalagem cadastrada, o técnico não consegue concluir o preparo de nenhum material.

**Módulo de Preparo** — ao finalizar o preparo de um item, o técnico obrigatoriamente seleciona o tipo de embalagem utilizada. Nesse momento, o sistema busca automaticamente a configuração dessa embalagem — especificamente o campo **Validade (Dias)** — e calcula a data de vencimento do material: data atual + dias de validade configurados. Esse cálculo é feito pelo sistema sem intervenção manual, eliminando erros humanos no preenchimento de validades.

**Etiquetas de rastreabilidade** — a data de validade calculada a partir da embalagem é o dado central impresso na etiqueta gerada ao final do preparo. É essa data que o técnico, o enfermeiro e o setor requisitante consultam para verificar se o material ainda está dentro do prazo de segurança. O nome da embalagem também é registrado no histórico do item para fins de rastreabilidade.

**Estoque e controle de vencimento** — os materiais em estoque têm seu status de validade acompanhado com base na data calculada no preparo. Itens com validade próxima ou vencida são sinalizados pelo sistema, permitindo que a equipe identifique e retire de uso materiais fora do prazo antes que cheguem ao paciente.

**Materiais respiratórios** — para materiais do tipo Respiratório, que seguem direto para o estoque após o preparo (sem passar pela autoclave), a embalagem e sua validade são ainda mais críticas, pois é o único controle de prazo aplicado a esses itens após a desinfecção.

> [!CAUTION] Alterar a validade de uma embalagem existente **não afeta os materiais já preparados** — o cálculo de vencimento usa o valor vigente no momento do preparo e fica registrado imutavelmente no histórico do item. Porém, todos os preparos futuros que utilizarem essa embalagem passarão a usar o novo valor de validade. Revise cuidadosamente antes de editar, e informe a equipe sobre qualquer mudança nos parâmetros.
