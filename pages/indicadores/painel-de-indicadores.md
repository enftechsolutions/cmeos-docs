---
title: Painel de Indicadores
description: Dashboard de KPIs para gestão quantitativa da CME.
---

## **📊 Painel de Indicadores**

### **Finalidade**

Dashboard de KPIs (Key Performance Indicators) para gestão quantitativa da CME. Apresenta métricas de produção, rankings de equipamentos, setores, materiais e operadores em um período selecionável, com exportação CSV.

### **Como Utilizar**

1. Acesse **Indicadores** no menu lateral.
1. O dashboard carrega automaticamente com dados dos **últimos 30 dias** (padrão).
1. No cabeçalho, ajuste o período usando os campos de **Data Inicial** e **Data Final**, depois clique em **"Filtrar"** para atualizar.
1. Os **6 cards de KPI** no topo mostram: Lavagem (total expurgo), Esterilização (saída autoclave), Ciclos (equipamentos), Distribuição (itens entregues), Empréstimos (troca direta) e Estoque (saldo atual).
1. Abaixo, a seção de **Rankings** exibe: Materiais Mais Produzidos (com barra de progresso proporcional), Produção por Equipamento, Demanda por Setor, Invólucros Mais Utilizados e Operadores com mais ações.
1. Clique em **"Exportar"** (botão verde) para gerar CSV com todos os indicadores e rankings do período.

### **Campos e Informações**

| **KPI** | **Descrição** |
| --- | --- |
| Lavagem (Total Expurgo) | Quantidade de itens que passaram pelo expurgo no período |
| Esterilização (Saída Autoclave) | Quantidade de itens esterilizados no período |
| Ciclos (Equipamentos) | Número total de ciclos de maquinário realizados |
| Distribuição (Itens Entregues) | Quantidade de itens distribuídos/dispensados aos setores |
| Empréstimos (Troca Direta) | Quantidade de itens emprestados via troca direta entre setores |
| Estoque (Saldo Atual) | Número total de itens atualmente no estoque (snapshot, não filtrado por período) |

| **Ranking** | **Descrição** |
| --- | --- |
| Materiais Mais Produzidos | Top materiais por quantidade esterilizada, com barra visual de proporção |
| Produção por Equipamento | Equipamentos ranqueados por quantidade de ciclos, com tipo (Lavadora/Autoclave) |
| Demanda por Setor | Setores ranqueados por quantidade de pedidos de material |
| Invólucros Mais Utilizados | Tipos de embalagem mais usados no preparo |
| Operadores | Profissionais ranqueados por número de ações registradas |

> [!NOTE] O KPI "Estoque" mostra o saldo atual no momento da consulta, não filtrado pelo período selecionado. Os demais KPIs são filtrados pelo intervalo de datas.

> [!IMPORTANT] A exportação CSV gera um arquivo completo com todos os KPIs e rankings do período, separado por seções (Indicadores Gerais, Produção por Equipamento, Demanda por Setor, Materiais Mais Produzidos, Invólucros).

### **Impacto no Sistema**

- **Consulta apenas (leitura)**: Esta tela não altera dados.
- Os dados são calculados a partir das tabelas Movimentação, CicloMaquinario, ItemMain e Requisição no período informado.
- CSV é gerado client-side e baixado diretamente.
