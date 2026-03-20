---
title: 'Distribuição: Devolução de Materiais'
description: 'Distribuição: Devolução de Materiais'
---
## 🔄 Distribuição: Devolução de Materiais

### Finalidade

Registrar a **devolução de materiais** que foram distribuídos via requisição. O setor que recebeu o material devolve à CME para reprocessamento, usando o código da requisição original e identificação do portador.

### Como Utilizar

1. Acesse **Distribuição → Confirmação de Retirada** no menu lateral.
1. Na coluna esquerda, a lista exibe todas as **requisições em aberto** (status `ABERTA`) — ou seja, materiais que foram entregues mas ainda não foram devolvidos.
1. Use o campo de busca para filtrar por paciente, setor, material ou ID da requisição.
1. Clique em uma requisição para selecioná-la. O painel direito ("Detalhes da Devolução") mostra o resumo: material, serial/lote e setor.
1. No campo **"Código da Requisição"**, informe ou bipe o código de validação original da requisição (mesmo código usado na entrega).
1. No campo **"Responsável pela Devolução"**, escaneie o crachá do profissional que está devolvendo (via UserScanInput). O sistema detecta automaticamente nome e matrícula.
1. Clique em **"Confirmar Recebimento"** para registrar a devolução.
1. Mensagem de sucesso aparece por 5 segundos e a lista é atualizada automaticamente.

### Campos e Informações

| Campo | Descrição |
| --- | --- |
| Lista de Abertas | Requisições com status ABERTA. Mostra: ID, setor, paciente/leito, serial ou lote, material |
| Busca | Filtro local por paciente, setor, ID ou material |
| Código da Requisição | Campo de scan/digitação do código de validação original (UnifiedScanInput) |
| Responsável pela Devolução | Scan de crachá (UserScanInput) — detecta nome e matrícula automaticamente |

> [!NOTE] O UserScanInput detecta automaticamente os dados do profissional ao escanear o crachá. Nome e matrícula são preenchidos sem digitação manual.

> [!IMPORTANT] O código de validação informado **deve corresponder** ao código da requisição selecionada. Caso contrário, o sistema retorna erro de validação.

> [!CAUTION] Ao confirmar a devolução, o item volta para o fluxo de reprocessamento (retorna ao expurgo). Certifique-se de que o item físico está sendo efetivamente entregue à CME.

### Impacto no Sistema

- A requisição é fechada (status `DEVOLVIDA` ou equivalente).
- O item retorna ao fluxo: status muda para `AGUARDANDO_LIMPEZA` para reprocessamento.
- Registra: quem devolveu (nome + matrícula), quem recebeu na CME (usuário logado) e data/hora.
