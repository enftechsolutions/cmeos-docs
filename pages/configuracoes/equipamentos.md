---
title: Equipamentos
description: >-
  Cadastro e gerenciamento de autoclaves, lavadoras e outros equipamentos da
  CME.
---
## ⚙️ Equipamentos

Todos os equipamentos da CME são cadastrados nesta seção: **Autoclaves**, **Lavadoras Automáticas**, **Termodesinfectoras** e **Ultrassônicas**. O cadastro correto de cada equipamento é a base do sistema — é a partir dele que os técnicos registram os ciclos de processamento no dia a dia, e que o sistema gera os indicadores de custo e eficiência operacional.

### Como cadastrar um equipamento

1. Acesse **Configurações → Equipamentos**
1. Clique em **Novo Equipamento**
1. Preencha os dados do equipamento:
   - **Nome** (ex: "Autoclave 01", "Termodesinfectora 02")
   - **Tipo** — Autoclave, Lavadora, Termodesinfectora ou Ultrassom
   - **Marca / Modelo**
   - **Número de série**
1. Salve

O equipamento cadastrado ficará disponível nos módulos operacionais do sistema (Expurgo e Esterilização), onde os técnicos poderão registrar os ciclos realizados.

> [!IMPORTANT] O **Tipo** do equipamento define quais campos e funcionalidades estarão disponíveis na configuração dos ciclos. Autoclaves e Lavadoras possuem parametrizações diferentes — escolha o tipo correto antes de salvar.

---

## 🔄 Configuração de Ciclos

Dentro de cada equipamento, a aba **Ciclos** é onde você parametriza como a máquina deve operar: temperatura, tempo, consumo e custos. Esses dados aparecem automaticamente para o técnico durante o uso diário, garantindo que o processo seja executado exatamente conforme o protocolo.

O formulário de ciclo é **diferente dependendo do tipo de equipamento**. Veja abaixo as especificidades de cada um.

---

### 🔵 Ciclos de Autoclaves

Autoclaves realizam processos de **esterilização**, portanto os ciclos são configurados com foco em método, temperatura e tempo de exposição.

#### Como cadastrar um ciclo de Autoclave

1. Abra o equipamento e clique na aba **Ciclos**
1. Clique em **Novo Ciclo**
1. Preencha os campos abaixo
1. Clique em **Salvar Ciclo**

| Campo | Descrição |
| --- | --- |
| Nome do Ciclo | Identificação clara do ciclo (ex: "Instrumental Pesado", "Príon", "Flash") |
| Método | Tipo de processo de esterilização (ex: Vapor Saturado, Peróxido de Hidrogênio, Pré-Vácuo) |
| Temperatura (°C) | Temperatura de esterilização definida pelo fabricante (ex: 121°C ou 134°C) |
| Tempo (min) | Tempo de exposição/esterilização em minutos |
| Consumo Água (L) | Volume de água consumido por ciclo, para cálculo de eficiência |
| Consumo Energia (kW) | Energia elétrica consumida por ciclo |
| Custo Mão de Obra (R$) | Valor estimado do custo humano por ciclo executado |

> [!NOTE] Autoclaves **não possuem** a seção de Insumos Utilizados, pois o processo de esterilização não envolve consumo de insumos químicos rastreáveis pelo sistema.

---

### 🟢 Ciclos de Lavadoras (Termodesinfectoras e Ultrassônicas)

Lavadoras Termodesinfectoras e Ultrassônicas realizam processos de **limpeza e desinfecção**, que envolvem o consumo direto de insumos químicos (detergentes, enzimáticos, neutralizantes, etc.). Por isso, além dos parâmetros operacionais, o sistema exige que você informe **quais insumos são utilizados em cada ciclo e em qual quantidade**.

Essas informações alimentam os **indicadores de uso de insumos**, permitindo rastrear o consumo real por equipamento, por ciclo e por período.

#### Como cadastrar um ciclo de Lavadora

1. Abra o equipamento e clique na aba **Ciclos**
1. Clique em **Novo Ciclo**
1. Preencha os parâmetros operacionais do ciclo
1. Na seção **Insumos Utilizados**, adicione os insumos consumidos no ciclo
1. Clique em **Salvar Ciclo**

**Parâmetros operacionais:**

| Campo | Descrição |
| --- | --- |
| Nome do Ciclo | Identificação clara do ciclo (ex: "Ciclo Padrão", "Ciclo Instrumental Delicado") |
| Temperatura (°C) | Temperatura de operação definida pelo fabricante |
| Tempo (min) | Tempo de duração do ciclo em minutos |
| Consumo Água (L) | Volume de água consumido por ciclo, para cálculo de eficiência |
| Consumo Energia (kW) | Energia elétrica consumida por ciclo |
| Custo Mão de Obra (R$) | Valor estimado do custo humano por ciclo executado |
| Insumos Utilizados em Cada Ciclo | Insere os insumos utilizados e sua quantidade (cadastrado na tela de insumos) |

**Insumos utilizados no ciclo:**

Para cada insumo consumido neste ciclo, siga os passos:

1. No campo **Selecione um insumo**, escolha o insumo desejado na lista
1. Informe a **quantidade** utilizada por ciclo (ex: 50 ml, 2 comprimidos)
1. Clique em **Adicionar**
1. Repita o processo para todos os insumos que o ciclo utiliza

> [!IMPORTANT] Para que os insumos apareçam disponíveis para seleção, eles precisam estar previamente cadastrados em **Configurações → Insumos**. Caso o insumo desejado não apareça na lista, cadastre-o antes de configurar o ciclo.

> [!CAUTION] Os dados inseridos nos ciclos — tanto de autoclaves quanto de lavadoras — impactam diretamente nos **indicadores de custo** e nos **relatórios de eficiência**. Preencha sempre com base no manual do fabricante e no protocolo do seu CME. Valores incorretos gerarão indicadores imprecisos.

---

## 🛠️ Manutenções (Preventiva e Corretiva)

Manter o registro de manutenções em dia é um requisito legal e operacional. Na aba **Manutenções** de cada equipamento, você pode registrar todas as intervenções técnicas realizadas, criando um histórico completo de cada máquina.

### Como registrar uma manutenção

Clique em **Nova Manutenção** e preencha os campos:

| Campo | Descrição |
| --- | --- |
| Tipo de Manutenção | Selecione entre: Preventiva, Corretiva, Calibração ou Outros |
| Data | Data em que a intervenção ocorreu |
| Custo (R$) | Valor total investido na intervenção |
| Empresa | Nome da prestadora de serviço responsável |
| Técnico | Nome do profissional que realizou o serviço |
| Descrição | Detalhamento técnico do que foi realizado (ex: "troca de guarnição da porta", "ajuste de vácuo") |
| Anexo de Laudo | Upload do laudo técnico original para centralizar a documentação |

> [!IMPORTANT] Registrar as manutenções garante rastreabilidade em caso de falhas de processo e ajuda a prever paradas técnicas antes que elas afetem a produção. Em auditorias e inspeções sanitárias, o histórico de manutenção pode ser exigido como evidência de controle de qualidade.

---

## 💡 Por que configurar corretamente?

Os parâmetros definidos nesta tela aparecem automaticamente para o técnico durante o uso diário do sistema. Uma configuração precisa garante que:

- O operador não selecione tempos ou temperaturas incorretos
- O material seja processado exatamente conforme o protocolo do CME
- Os custos operacionais sejam calculados com precisão
- O consumo de insumos seja rastreado ciclo a ciclo
- Os relatórios gerenciais reflitam a realidade da operação

---

## 🔗 Como essa tela impacta o restante do sistema

O cadastro de equipamentos e seus ciclos é **o motor operacional do CME.OS**. Cada autoclave e lavadora cadastrada aqui aparece diretamente nos módulos operacionais, e os ciclos configurados são o que o técnico seleciona no dia a dia para iniciar o processamento. Nenhum ciclo de esterilização ou limpeza maquinária pode ser registrado sem um equipamento devidamente configurado.

**Módulo de Esterilização**, cada autoclave cadastrada aparece como um painel no módulo de Esterilização, onde o técnico seleciona os materiais e escolha qual ciclo será executado. A lista de ciclos disponíveis para seleção é exatamente a lista configurada aqui. Equipamentos sem ciclos cadastrados não podem ser utilizados para iniciar esterilizações.

**Módulo de Expurgo — Maquinário** — cada lavadora, termodesinfectora e ultrassônica cadastrada aparece no módulo de Expurgo como uma opção de equipamento para processamento de limpeza. Da mesma forma, somente os ciclos configurados para aquele equipamento ficam disponíveis para o técnico selecionar.

**Snapshot imutável para rastreabilidade** — ao iniciar qualquer ciclo operacional, o sistema registra um **snapshot** dos parâmetros do ciclo no momento exato da execução (temperatura, tempo, método). Isso significa que, mesmo que os parâmetros sejam alterados futuramente nesta tela, o histórico de cada ciclo realizado preserva com exatidão quais condições foram aplicadas naquele momento — garantindo rastreabilidade completa para auditorias e investigações de incidentes.

**Indicadores de custo e eficiência** — os dados de consumo de água, energia e custo de mão de obra configurados nos ciclos são capturados a cada execução e consolidados nos relatórios gerenciais. É a partir desses valores que o sistema calcula o custo real por ciclo, por equipamento e por período.

**Indicadores de consumo de insumos (lavadoras)** — para lavadoras, os insumos e quantidades definidos nos ciclos são registrados a cada execução, alimentando os relatórios de consumo de produtos químicos por equipamento.

**Histórico de manutenção como evidência regulatória** — as manutenções registradas na aba Manutenções de cada equipamento compõem o dossiê técnico da máquina. Em inspeções da ANVISA e auditorias de qualidade, o histórico de manutenções preventivas e calibrações pode ser exigido como evidência de controle de qualidade do processo de esterilização.

> [!CAUTION] Alterar os parâmetros de um ciclo existente afeta **todos os futuros registros** daquele ciclo, mas não altera o histórico já registrado (que usa o snapshot). Ainda assim, mudanças nos parâmetros devem ser feitas com cautela e sempre baseadas no protocolo atualizado do CME e no manual do fabricante.
