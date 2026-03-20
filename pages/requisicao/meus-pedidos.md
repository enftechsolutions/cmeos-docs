---
title: Meus Pedidos
description: Materiais enviados para reprocessamento fora do hospital.
---
# Meus Pedidos & Trocas

## Para que serve esta tela

Esta tela é o **painel de acompanhamento pessoal** do usuário. Ela reúne em um único lugar todo o histórico de solicitações de materiais feitas por ele (ou pelo seu setor), além dos registros de Trocas Diretas (empréstimos de materiais entre setores e a CME).

Ao contrário das telas operacionais da CME, esta tela é voltada para **quem solicita** — enfermeiros, técnicos e outros profissionais dos setores hospitalares. Ela permite verificar o status de um pedido, consultar o código de validação de uma requisição ainda pendente e acompanhar o histórico completo de movimentação de cada item solicitado.

A tela está organizada em duas abas:

- **Requisições** — pedidos de materiais estéreis gerados pela tela Nova Requisição
- **Trocas Diretas** — registros de empréstimos onde o setor recebe materiais da CME com obrigação de devolução (saldo devedor)

---

## Como usar

### Aba Requisições

Exibe as últimas 50 requisições vinculadas ao usuário logado, agrupadas por **Código de Validação**. Cada linha da tabela representa um pedido completo (que pode conter vários materiais diferentes, todos compartilhando o mesmo código de 6 dígitos).

| Coluna | O que mostra |
| --- | --- |
| **Data** | Data e hora em que a solicitação foi gerada |
| **Código** | Código de 6 dígitos que deve ser apresentado na CME para retirada |
| **Itens** | Materiais solicitados (máximo 2 visíveis; o restante aparece como `+N`) |
| **Setor** | Setor de destino para o qual os materiais foram solicitados |
| **Status** | Situação atual do pedido (ver tabela de status abaixo) |
| **Paciente** | Nome e leito do paciente vinculado, quando informado; caso contrário exibe "Uso Geral" |

**Clique em qualquer linha** para abrir o painel de detalhes com a linha do tempo completa do pedido.

---

### Aba Trocas Diretas

Exibe as Trocas Diretas do setor do usuário. Administradores e Operadores CME visualizam todas as trocas da instituição; demais perfis veem apenas as trocas do seu próprio setor.

| Coluna | O que mostra |
| --- | --- |
| **Data** | Data e hora de criação do registro de troca |
| **ID Troca** | Identificador numérico do registro |
| **Itens** | Materiais envolvidos na troca |
| **Setor** | Setor de origem que solicitou o empréstimo |
| **Status** | Situação atual da troca |
| **Saldo Devedor** | Quantidade de itens que ainda precisam ser devolvidos à CME; "Quitado" quando tudo foi devolvido |

---

## Tabela de Status

| Status exibido | Significado |
| --- | --- |
| **Aguardando Retirada** | A requisição foi criada, o código está ativo e o material ainda não foi retirado na CME |
| **Entregue / Em Uso** | A CME atendeu o pedido e o material está em uso no setor |
| **Cancelado** | A requisição foi cancelada antes do atendimento |
| **Em Aberto** | Troca Direta registrada com saldo devedor em aberto |
| **Parcial** | Parte dos itens da Troca Direta já foi devolvida, mas ainda há saldo pendente |
| **Devolvido** | Todos os itens da Troca Direta foram devolvidos e o registro foi finalizado |

---

## Painel de Detalhes (ao clicar em um registro)

Ao clicar em qualquer linha da tabela, uma janela de detalhes é aberta com três seções:

**1. Informações Gerais**

Para requisições: data, setor de destino, paciente/leito e o código de validação em destaque. Para trocas: data, setor e responsável pela coleta.

**2. Itens do Pedido**

Lista todos os materiais do registro com quantidade e status individual por item. Para requisições com materiais rastreáveis, cada unidade física aparece como um item separado — o código serial da peça dispensada fica visível após o atendimento.

**3. Linha do Tempo (Auditoria)**

Cronologia completa do registro em ordem crescente de data, mostrando:

- **Requisição Criada** — data/hora e quem solicitou
- **Item Retirado** — para cada unidade entregue: nome do material, código serial da peça, nome de quem retirou (coletor) e nome do atendente da CME
- **Item Devolvido** — registro de devolução com data, nome do devolvedor e o material retornado
- Para Trocas: **Empréstimo Registrado**, **Devolução Recebida** e **Troca Finalizada**

> [!NOTE] Se a requisição ainda estiver com status **Aguardando Retirada**, o painel exibe um aviso em destaque com o código de validação e a instrução para comparecer à CME.

---

## Pontos de Atenção

> [!IMPORTANT] O histórico exibe os **últimos 50 registros**. Pedidos mais antigos não aparecem nesta tela — consulte a equipe da CME ou acesse o módulo de Auditoria para registros anteriores.

> [!NOTE] Mesmo que você tenha solicitado 3 unidades de um material rastreável, cada unidade aparece como um item separado no painel de detalhes. Isso é proposital: cada peça física tem seu próprio código serial e linha do tempo independente.

> [!CAUTION] **Trocas Diretas com saldo devedor** indicam que o setor está com materiais da CME sem devolução registrada. O campo "Saldo Devedor" mostra a quantidade exata em débito. Trocas em aberto por muito tempo podem impactar a disponibilidade de materiais no estoque da CME.

---

## Como essa tela impacta o restante do sistema

### Visibilidade sem alteração de dados

Esta tela é exclusivamente de **leitura e consulta** — nenhuma ação executada aqui altera registros no banco de dados. Toda a informação exibida é reflexo de ações realizadas em outras telas do sistema (Nova Requisição, Distribuição → Pendentes, Troca Direta).

---

### Agrupamento inteligente das requisições

O sistema busca todas as requisições individuais do usuário e as agrupa pelo `codigoValidacao`. Como um único pedido com 3 materiais gera 3 registros separados no banco (para rastreabilidade individual), a tela os consolida visualmente em uma única linha, facilitando a leitura sem perder granularidade nos detalhes.

---

### Linha do Tempo como auditoria completa

Os eventos exibidos na linha do tempo são montados a partir de múltiplas tabelas: `Requisicao` (datas de criação e atendimento), `ItemMain` (código serial da peça dispensada), `Usuario` (nome do atendente e do coletor), e `HistoricoDevolucaoTroca` (devoluções parciais e finais das Trocas Diretas). Isso significa que a tela oferece, em linguagem acessível, o mesmo nível de rastreabilidade disponível no módulo de Auditoria técnica.

---

### Saldo Devedor das Trocas Diretas

O campo `saldo` de cada item de uma Troca Direta é calculado e atualizado a cada devolução registrada na tela **Entrada e Saída → Troca Direta → Devolução**. Quando todos os itens atingem saldo zero, a troca é automaticamente marcada como `FINALIZADO` e o status muda para "Devolvido" nesta tela.

---

### Botão "Nova Requisição"

O botão no canto superior direito é um atalho direto para a tela **Nova Requisição de Material**, permitindo ao usuário criar um novo pedido sem precisar navegar pelo menu lateral.
