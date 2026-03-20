---
title: Baixa de Materiais Externos — Devolução ao Proprietário
description: Baixa de Materiais Externos — Devolução ao Proprietário
---
## ↗️ Baixa de Materiais Externos — Devolução ao Proprietário

### Finalidade

Registrar a **saída definitiva** de materiais externos que estavam sob custódia da CME, devolvendo-os à empresa proprietária. O processo inclui seleção dos itens pendentes, identificação do portador e registro de comprovante fotográfico.

### Como Utilizar

1. Acesse **Materiais Externos → Baixa** no menu lateral.
1. A tabela principal mostra o **Histórico de Saídas** paginado: Data/Hora, Retirado Por, Empresa, quantidade de Itens, Responsável CME. Se houver comprovante, o botão de visualização aparece na última coluna.
1. Clique em **"Registrar Saída"** para abrir o modal de baixa.
1. Selecione a **Empresa Proprietária** no dropdown. Ao selecionar, a lista de materiais pendentes (`AGUARDANDO_BAIXA`) da empresa carrega automaticamente no painel esquerdo.
1. Informe **"Retirado Por"** (nome do portador que está levando os itens).
1. No painel esquerdo ("Materiais Disponíveis para Saída"), clique nos itens desejados. Eles aparecem no painel direito ("Itens na Saída") como carrinho.
1. No carrinho, ajuste a **quantidade** de cada item se necessário (máximo = saldo disponível, mínimo = 1).
1. Preencha **Observações** (opcional) e anexe **Comprovante/Protocolo** (foto do canhoto de retirada, opcional).
1. Clique em **"Finalizar Baixa"** para registrar.

### Campos e Informações

| Campo | Descrição |
| --- | --- |
| Empresa Proprietária | Dropdown de empresas externas ativas. Ao selecionar, carrega os itens pendentes |
| Retirado Por | Nome do portador que está retirando os materiais |
| Materiais Disponíveis | Lista de itens com status `AGUARDANDO_BAIXA` daquela empresa. Exibe nome, lote e saldo |
| Itens na Saída (Carrinho) | Itens selecionados para devolução, com campo de quantidade editável |
| Observações da Saída | Campo de texto livre (ex.: dados do motorista, referência de nota fiscal) |
| Comprovante / Protocolo | Upload de imagem (foto câmera ou arquivo). Armazenado como base64 |

> [!NOTE] A seleção de empresa atualiza automaticamente a lista de pendentes — apenas itens com status `AGUARDANDO_BAIXA` aparecem. Se não houver itens, uma mensagem informativa é exibida.

> [!IMPORTANT] A quantidade de baixa por item não pode exceder o saldo disponível. O sistema trava automaticamente no valor máximo.

> [!CAUTION] A baixa é irreversível. Ao finalizar, os itens são removidos do estoque externo da CME. Certifique-se de que o comprovante está anexado para rastreabilidade.

### Impacto no Sistema

- Altera o status dos itens selecionados em `EstoqueExterno` (remove do controle ativo da CME).
- Registra log com: empresa, usuário CME responsável, portador, data/hora, comprovante e observações.
- O histórico de saídas fica disponível para consulta e auditoria com paginação.
