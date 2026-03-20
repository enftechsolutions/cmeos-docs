---
title: 'Recipientes '
description: Controle de Desinfecção Quimica
---
## 🧪 Recipientes e Testes Químicos

O controle rigoroso das soluções saneantes é indispensável para a segurança do paciente. Esta seção permite o gerenciamento completo dos seus postos de desinfecção química de alto nível e o registro do monitoramento da eficácia dessas soluções.

### 🪣 Recipientes (Postos de Desinfecção)

A aba de **Recipientes** é utilizada para mapear e gerenciar todas os recipientes de desinfecção quimica da sua CME.

Aqui você define onde a desinfecção acontece e quais as regras para cada ponto.

**Como cadastrar um novo posto de desinfecção:**

### 1. Seção: Identificação

Nesta etapa, você define as características físicas do recipiente para fins de inventário e rastreabilidade.

- **Nome do Recipiente (\*):** Nome identificador único.
  - *Dica:* Use nomes que facilitem a localização física, como "Cuba 01 - Endoscopia" ou "Lavadora Ultrassônica 02".
- **Marca:** Nome do fabricante do recipiente ou equipamento.
- **Modelo:** Modelo específico do fabricante.
- **Número de Série:** Código de patrimônio ou série do fabricante, essencial para o histórico de manutenção.
- **Tempo de Ciclo (Minutos) (\*):** O tempo de imersão ou processamento necessário para que a desinfecção ocorra.
  - *Nota:* O sistema aceita de 1 minuto até 7.200 minutos (120 horas).

---

### 2. Seção: Configuração da Mistura Padrão

Aqui você define a "receita" e a validade da solução química que será utilizada neste posto.

- **Insumo Principal:** Selecione o produto químico (saneante) que será utilizado. Este campo puxa os dados previamente cadastrados no módulo de **Insumos**.
- **Validade Padrão (Horas):** Informe por quanto tempo a solução permanece ativa após ser preparada ou aberta.
  - *Limite:* Mínimo de 1h e máximo de 720h (30 dias). O padrão sugerido pelo sistema é de 24h.
- **Qtd Água Padrão (L):** A quantidade de água necessária para a diluição correta (ex: 5 litros).
- **Qtd Produto Padrão (ML):** A quantidade exata de saneante concentrado a ser adicionada à água para atingir a concentração desejada.

---

### 3. Seção: Status e Finalização

- **Recipiente Ativo para Uso:** * **Ligado (Azul):** O recipiente estará disponível para ser selecionado nas rotinas de desinfecção e testes químicos.
  - **Desligado (Cinza):** O recipiente fica arquivado, impedindo novos registros de uso (ideal para cubas em manutenção ou desativadas).

---

### 📋 Testes Químicos (Histórico e Log)

A aba de **Testes Químicos** funciona como o diário de bordo e auditoria da sua desinfecção. Ela apresenta um log consolidado de todos os testes realizados anteriormente para garantir que a Concentração Mínima Efetiva (CME) das soluções estava adequada antes do uso.

**O que você encontra e acompanha nesta seção:**

- **Histórico de Avaliações:** Registro completo com data e hora de cada teste (ex: teste de fita reagente).
- **Status do Teste:** Visualização rápida se a solução foi **Aprovada** (concentração ideal) ou **Reprovada** (necessidade de troca).
- **Rastreabilidade de Operador:** Identificação de qual profissional realizou a medição e atestou a eficácia do banho químico.
- **Segurança Regulatória:** Dados essenciais para auditorias e comprovação de conformidade com a RDC 15/2012.

---

## 🔗 Como essa tela impacta o restante do sistema

O cadastro de recipientes e o registro dos testes químicos têm impacto direto e crítico no módulo de **Desinfecção Manual**. Sem essa configuração, não é possível realizar nenhum ciclo de desinfecção química no sistema.

**Painel de Desinfecção Manual** — cada recipiente cadastrado e ativo aparece como um painel individual na tela de Desinfecção Manual, onde o técnico inicia e acompanha os ciclos. Os parâmetros que você configura no recipiente — tempo de ciclo, insumo e validade da mistura — alimentam diretamente esse painel. O timer de ciclo exibido ao operador é exatamente o **Tempo de Ciclo** definido aqui.

**Bloqueio por validade de mistura — regra de segurança crítica** — antes de permitir o início de qualquer ciclo de desinfecção, o sistema verifica automaticamente se o recipiente possui um **teste químico aprovado e dentro da validade**. Se o último teste estiver vencido, ou se nenhum teste aprovado existir, o sistema bloqueia completamente o início do ciclo e exige que uma nova mistura seja preparada e aprovada. Isso impede que materiais sejam imersos em soluções com concentração abaixo da CME (Concentração Mínima Eficaz), protegendo diretamente a segurança do paciente.

**Rastreabilidade de insumos** — o **Insumo Principal** vinculado ao recipiente é registrado em cada ciclo realizado, permitindo que o sistema rastreie qual produto químico foi utilizado, em qual concentração e por quanto tempo, gerando histórico completo para auditorias.

**Relatórios e auditoria** — o log de testes químicos registrado na aba de Testes Químicos é a fonte primária para geração dos relatórios de conformidade de desinfecção química, exigidos pela **RDC 15/2012**. Cada teste aprovado ou reprovado fica vinculado ao operador que o realizou, ao recipiente e ao horário, compondo o dossiê de evidências regulatórias da CME.

> [!CAUTION] Um recipiente **sem teste químico aprovado vigente** não pode iniciar ciclos de desinfecção — o sistema bloqueará a operação no backend, independentemente do que o operador tente fazer na tela. Garanta que a rotina de testes seja realizada conforme a validade configurada em cada recipiente para evitar interrupções no fluxo operacional.
