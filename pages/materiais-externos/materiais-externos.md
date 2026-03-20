---
title: Entrada de Materiais Externos
description: materiais-externos
---
## 📦 Entrada de Materiais Externos

### Finalidade

Registrar o recebimento de materiais vindos de **empresas externas** ou **setores internos** que trazem itens estéreis (com lote e validade) ou não estéreis (para reprocessamento na CME). Esta tela gerencia a porta de entrada de tudo que não é patrimônio próprio da CME.

### Como Utilizar

1. Acesse **Materiais Externos → Entrada** no menu lateral.
1. A tela exibe o **Histórico de Entradas** em tabela paginada (10 por página) com colunas: Data/Hora, Condição (Estéril/Não Estéril), Entregue Por, Origem/Dono, quantidade de Itens e Observação.
1. Clique no número de itens para abrir o modal de detalhes da entrada (DetalhesEntradaModal).
1. Para registrar nova entrada, clique em **"Registrar Entrada"** no canto superior direito.
1. No modal, defina a **Condição do Material**: toggle entre ESTÉRIL e NÃO ESTÉRIL.
1. Preencha **"Quem Entregou?"** (nome do portador/entregador).
1. Selecione o **tipo de origem**: EMPRESA EXTERNA ou SETOR INTERNO, depois escolha no dropdown.
1. Na seção **Itens Recebidos**, preencha cada linha com: Nome do Material, Lote (obrigatório se estéril), Validade (obrigatório se estéril) e Quantidade. Clique em "+ Adicionar Material" para mais linhas.
1. Preencha **Observações Gerais** (opcional) e anexe o **Laudo de Esterilização** ou **Comprovante de Entrada** (foto/imagem, opcional).
1. Clique em **"Registrar Entrada"** para salvar.

### Campos e Informações

| Campo | Descrição |
| --- | --- |
| Condição do Material | Toggle: ESTÉRIL (verde) ou NÃO ESTÉRIL (laranja). Determina campos obrigatórios |
| Quem Entregou? | Nome do portador físico que entregou o material na CME |
| Origem / Dono | Tipo (Empresa Externa ou Setor Interno) + seleção da entidade no dropdown |
| Nome do Material | Texto livre descritivo de cada material recebido |
| Lote | Número do lote (obrigatório apenas para materiais estéreis) |
| Validade | Data de validade (obrigatório apenas para materiais estéreis) |
| Quantidade | Número de unidades por linha de material |
| Laudo / Comprovante | Upload de imagem (câmera ou arquivo). Enviado como base64 |
| Observações Gerais | Campo de texto livre para detalhes adicionais |

> [!NOTE] O relógio no cabeçalho do modal é atualizado em tempo real (a cada segundo) enquanto o formulário está aberto, registrando o momento exato da entrada.

> [!IMPORTANT] Para materiais **Estéreis**, os campos Lote e Validade são **obrigatórios** em cada linha de item. Para **Não Estéreis**, apenas o nome do material é obrigatório — lote e validade são enviados como null.

> [!CAUTION] Após registrar a entrada, os itens são criados no estoque externo com status `EM_ESTOQUE`. Certifique-se de que os dados de lote e validade estão corretos, pois serão usados para controle de vencimento.

### Impacto no Sistema

- Cria registros na tabela `EstoqueExterno` com status `EM_ESTOQUE`, vinculados à empresa ou setor de origem.
- Cada item recebe `nomeMaterial`, `lote`, `dataValidade` e `quantidade` conforme preenchido.
- O arquivo de laudo é armazenado como base64 no registro da entrada.
- Itens estéreis entram disponíveis para uso imediato; não estéreis entram para reprocessamento.
