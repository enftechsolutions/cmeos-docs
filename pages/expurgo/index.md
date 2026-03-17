---
title: Expurgo
description: Gerenciamento da área de limpeza e descontaminação de materiais.
---

# Expurgo

O módulo de **Expurgo** gerencia a primeira etapa do processamento: a **limpeza e descontaminação** dos materiais que chegaram da área de uso.

Aqui você controla:
- A **fila de materiais** aguardando lavagem
- Os **equipamentos** disponíveis (lavadora, ultrassônica, termodesinfectora)
- Os **ciclos ativos** com temporizador em tempo real
- A **validação** dos ciclos concluídos

---

## Visão geral da tela

A tela do Expurgo é dividida em duas áreas:

**Painéis de equipamentos (parte superior)**

Cada equipamento aparece como um cartão com:
- Nome e modelo do equipamento
- Status atual (Disponível / Em ciclo / Aguardando validação)
- Tipo de ciclo selecionado
- Temporizador regressivo quando há ciclo ativo
- Botão para liberar a carga quando o ciclo terminar

**Fila de materiais (parte inferior)**

Tabela com todos os itens aguardando lavagem, mostrando:
- Código serial
- Nome do material
- Origem (setor interno ou cliente externo — identificado com a badge **EXT**)
- Caixa/contêiner ao qual pertence

---

## Navegação rápida

- [Receber novo material](/expurgo/recepcao-materiais)
- [Iniciar ciclo de lavagem](/expurgo/ciclos-lavagem)
- [Validar ciclo concluído](/expurgo/validacao-ciclo)

---

> **Informação:** Materiais marcados com **EXT** pertencem a clientes externos (ex: clínicas parceiras). Eles seguem o mesmo fluxo, mas são identificados separadamente para controle de rastreabilidade.
