---
title: 'Registros Gerais'
description: 'Registros gerais da tela de Entrada de Materiais'
---
# Registros Gerais

## Para que serve esta tela

Esta é a **visão administrativa e gerencial** de todas as movimentações de distribuição e entrada de materiais da instituição. Diferente da tela **Meus Pedidos & Trocas** — que mostra apenas o histórico do próprio usuário — o Histórico de Registros aplica um sistema de permissões que determina o escopo de visualização de cada perfil: alguns usuários veem apenas seus próprios registros, outros veem tudo do seu setor, e perfis com autoridade máxima enxergam toda a instituição.

Ela serve como ferramenta de rastreabilidade, auditoria operacional e controle de pendências, concentrando num único lugar as duas grandes categorias de movimentação de materiais:

- **Requisições** — solicitações formais de materiais estéreis feitas pelos setores à CME
- **Trocas Diretas** — registros de entradas de materiais no expurgo da CME, tanto com geração de crédito (Troca Direta) quanto apenas para processamento (Entrada Simples)

---

## Sistema de Permissões e Visibilidade

Esta é a característica mais importante desta tela. O que cada usuário enxerga depende diretamente do seu perfil cadastrado no sistema.

### Escopo de registros visíveis

| Perfil | O que aparece na lista |
| --- | --- |
| **Administrador** | Todos os registros de todos os setores da instituição |
| **Gestor** | Todos os registros de todos os setores da instituição |
| **Operador** | Todos os registros de todos os setores da instituição |
| **Supervisor** | Apenas registros do seu próprio setor |
| **Enfermeiro / Técnico** | Apenas os registros gerados pelo próprio usuário |

> [!IMPORTANT] Um Enfermeiro acessando esta tela verá exatamente os mesmos dados que vê na tela **Meus Pedidos & Trocas** — seus próprios pedidos. Operadores e Administradores, por outro lado, têm visão global de toda a instituição, o que torna esta tela o principal painel de controle da CME.

---

### Visibilidade do Código de Validação / Código de Troca

Além de controlar quais registros são visíveis, o sistema também controla **quem pode ver os códigos numéricos** associados a cada operação. Esses códigos são considerados dados sensíveis pois são usados para autenticar a retirada de materiais.

**Para Requisições (Código de Validação de 6 dígitos):**

| Perfil | O que aparece na coluna "Código" |
| --- | --- |
| Administrador, Gestor, Enfermeiro, Supervisor | Código real (ex.: `482917`) |
| Operador, demais perfis | `******` (mascarado) |

**Para Trocas Diretas (Código de Troca):**

| Perfil | O que aparece na coluna identificadora |
| --- | --- |
| Administrador | Código alfanumérico completo da troca |
| Todos os demais | Apenas o ID numérico do registro (`#42`) |

> [!NOTE] O mascaramento dos códigos é aplicado no servidor, antes de enviar os dados ao navegador. Não é um efeito visual — o valor real nunca trafega para usuários sem permissão.

---

## As duas abas

### Aba Requisições

Exibe as últimas **100 requisições** filtradas pelo escopo do perfil do usuário, agrupadas por Código de Validação (cada linha = um pedido completo, que pode ter múltiplos materiais).

| Coluna | Descrição |
| --- | --- |
| **Data** | Data e hora em que a requisição foi gerada |
| **Código** | Código de validação de 6 dígitos (visível ou mascarado conforme perfil) |
| **Solicitante** | Nome do profissional que fez o pedido (usuário logado ou nome escaneado no balcão) |
| **Setor** | Setor para o qual os materiais foram solicitados |
| **Status** | Situação atual do pedido (ver tabela de status abaixo) |
| **Itens** | Materiais solicitados (até 2 visíveis na tabela; restante como `+N`) |

---

### Aba Trocas Diretas

Exibe as últimas **100 Trocas Diretas** filtradas pelo perfil do usuário. Esta aba tem uma coluna exclusiva em relação à tela Meus Pedidos: a coluna **Tipo**, que identifica a modalidade de entrada de materiais.

| Coluna | Descrição |
| --- | --- |
| **Data** | Data e hora do registro da entrada no expurgo |
| **Código / ID** | Código completo (apenas Administradores) ou ID numérico simples |
| **Tipo** | Identifica a modalidade da entrada: **Troca Direta** (gerou crédito para o setor) ou **Entrada Simples** (apenas processamento, sem crédito) |
| **Solicitante** | Setor de origem dos materiais |
| **Setor** | Setor vinculado ao registro |
| **Status** | Situação atual da troca |
| **Saldo** | Quantidade de itens ainda pendentes de devolução para o setor (`N pendentes`) ou `Quitado` |

---

## Tabela de Status

| Status exibido | Significado |
| --- | --- |
| **Aguardando Retirada** | Requisição criada e aguardando atendimento na CME |
| **Entregue / Em Uso** | Material já dispensado pela CME e em uso no setor |
| **Cancelado** | Requisição cancelada antes do atendimento |
| **Em Aberto** | Troca Direta com saldo devedor ativo — o setor ainda tem itens a devolver |
| **Parcial** | Parte dos itens foi devolvida, mas há saldo devedor restante |
| **Devolvido** | Todos os itens da troca foram devolvidos ao setor e o protocolo foi encerrado |

---

## Painel de Detalhes (ao clicar em um registro)

Clicar em qualquer linha da tabela abre uma janela de detalhes com três seções:

### Informações Gerais

Para **Requisições**: data, setor de destino, paciente/leito e o Código de Validação (visível apenas para perfis autorizados).

Para **Trocas Diretas**: data, setor, responsável pela entrega e o Código de Troca (visível apenas para Administradores).

### Itens do Registro

Para requisições: lista de materiais com quantidade e status individual por item.

Para trocas: cada tipo de material aparece com três valores — **Saída** (quantas unidades saíram para o setor), **Devolvido** (quantas já retornaram) e **Saldo Devedor** (diferença ainda em aberto, destacada em vermelho quando positivo).

### Histórico Cronológico (Linha do Tempo de Auditoria)

Cronologia completa do registro em ordem crescente. Os eventos variam conforme o tipo:

**Para Requisições:**

- **Requisição Criada** — data/hora e nome do solicitante
- **Item Retirado** — para cada unidade dispensada: nome do material, código serial da peça física entregue, nome de quem retirou (coletor) e nome do atendente da CME
- **Item Devolvido** — se aplicável: data, material e nome do devolvedor

**Para Trocas Diretas:**

- **Empréstimo Registrado (Crédito)** — quando tipo = Troca Direta: registra que a CME recebeu os materiais e gerou crédito para o setor; identifica quem recebeu na CME
- **Entrada para Serviço (Simples)** — quando tipo = Entrada Simples: registra a entrada apenas para processamento, sem crédito
- **Saída Registrada** — cada evento de devolução com: materiais entregues, quantidades, códigos seriais das peças físicas utilizadas, nome de quem retirou (devolvedor) e nome do operador da CME que entregou
- **Protocolo Finalizado** — quando todos os itens atingem saldo zero e a troca é encerrada

> [!NOTE] Na linha do tempo das Trocas Diretas, o histórico cronológico inclui os **códigos seriais das peças físicas** entregues em cada saída. Isso permite rastrear exatamente qual peça foi para qual setor em qual momento, mesmo quando houve múltiplas saídas parciais ao longo do tempo.

---

## Diferença em relação à tela Meus Pedidos & Trocas

É comum surgir dúvida sobre quando usar cada tela. A distinção fundamental é:

| Aspecto | Meus Pedidos & Trocas | Histórico de Registros |
| --- | --- | --- |
| **Público-alvo** | O profissional que fez o pedido | Equipe da CME, gestores, supervisores |
| **Escopo de dados** | Sempre apenas os pedidos do próprio usuário | Varia por perfil: pode ser global |
| **Coluna "Tipo"** | Não existe | Presente na aba Trocas (Troca Direta vs. Entrada Simples) |
| **Limite de registros** | 50 últimos | 100 últimos |
| **Código de validação** | Sempre visível (é o próprio usuário) | Visível apenas para perfis autorizados |
| **Aviso de retirada pendente** | Sim (destaque vermelho no modal) | Não |

---

## Pontos de Atenção

> [!IMPORTANT] Operadores e Administradores que acessam esta tela enxergam **todos os pedidos da instituição**, incluindo dados de pacientes (nome e leito). O acesso a esta tela deve ser restrito a profissionais autorizados pelo gestor da CME.

> [!NOTE] O histórico exibe os **100 registros mais recentes** filtrados pelo perfil. Registros anteriores não aparecem nesta tela. Para consultas de auditoria mais amplas e com filtros de data, utilize o módulo **Auditoria** no menu lateral.

> [!CAUTION] O mascaramento do Código de Validação (`******`) para perfis sem autorização é uma medida de segurança intencional. O código é usado para autenticar a retirada de materiais na CME — sua visibilidade por pessoas não autorizadas poderia permitir retiradas indevidas.

---

## Como essa tela impacta o restante do sistema

### Apenas leitura — sem alteração de dados

Esta tela é exclusivamente de consulta. Nenhuma ação realizada aqui modifica registros no banco de dados. Toda a informação exibida é reflexo de operações realizadas nas telas de Nova Requisição, Recebimento de Materiais (Expurgo) e Distribuição → Requisições Pendentes.

### Fonte de dados e volume

A tela consulta até 100 registros de cada categoria, ordenados do mais recente para o mais antigo. Para requisições com escopo global (Administrador/Operador), isso pode representar pedidos de todos os setores da instituição nas últimas horas ou dias, dependendo do volume de operações.

### Proteção de dados pessoais no servidor

Os dados de usuários retornados (atendentes, solicitantes, recebedores) são sanitizados pelo servidor antes de chegar ao navegador: apenas `id`, `nome`, `cargo` e `registroProfissional` são retornados. Dados como senha, login, e outros campos sensíveis nunca trafegam para esta tela, mesmo para Administradores.

### Rastreabilidade bidirecional das Trocas

O histórico cronológico das Trocas Diretas exibe os seriais das peças físicas entregues em cada evento de saída. Isso significa que é possível, a partir desta tela, saber: qual peça física específica (identificada pelo serial) foi entregue para qual setor, em qual data, por qual operador da CME, e para qual portador. Essa cadeia de custódia é o coração da rastreabilidade do CME.OS.
