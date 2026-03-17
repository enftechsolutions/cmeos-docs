---
title: Estoque
description: Visualização e controle do inventário de materiais da CME.
---

# Estoque

O módulo de **Estoque** oferece visibilidade completa de todos os materiais presentes na CME e nos setores do hospital.

---

## Estoque Central

Acesse **Estoque** no menu lateral para ver o inventário consolidado com:

- **Código serial** de cada unidade
- **Nome do material** com ícone do tipo (instrumental, respiratório, insumo, rouparia)
- **Status atual** do material
- **Setor proprietário** (quem é o "dono" do item)
- **Localização atual** (onde o item está agora)
- **Data de validade** da esterilização (com alerta quando próxima do vencimento)

---

## Status dos materiais

| Status | Significado |
|--------|-------------|
| **Estéril — Pronto** | Disponível para distribuição |
| **Aguardando Preparo** | Na fila do Preparo |
| **Em Esterilização** | Dentro de uma autoclave |
| **Em Manutenção** | Fora de serviço para reparo |
| **Emprestado** | Cedido a outro setor |
| **Vencido** | Prazo de validade expirado |

> **Atenção:** Materiais com status **Vencido** não devem ser utilizados em procedimentos. Eles precisam passar por um novo ciclo de esterilização antes de serem redistribuídos.

---

## Filtros disponíveis

Na tela do estoque, você pode filtrar por:
- **Nome ou serial** do material
- **Setor** proprietário ou localização
- **Status** do material
- **Tipo** (instrumental, respiratório, etc.)

---

## Estoque Setorial

Acesse **Estoque → Setorial** para uma visão agrupada por setor — útil para verificar o que cada departamento tem em mãos.

---

## Baixa de material

Para retirar definitivamente um item do sistema (descarte, perda, devolução):

1. Localize o item no estoque
2. Clique no ícone de ação → **Realizar Baixa**
3. Selecione o motivo (ex: Descarte por desgaste, Perda, Devolução ao fornecedor)
4. Confirme

O item é inativado com registro do motivo, operador e data/hora.

---

## Exportar relatório

Clique em **Exportar** na tela do estoque para baixar o inventário atual em PDF ou planilha. Útil para auditorias e inventários periódicos.
