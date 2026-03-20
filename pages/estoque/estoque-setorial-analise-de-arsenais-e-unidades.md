---
title: Estoque Setorial — Análise de Arsenais e Unidades
description: Estoque Setorial — Análise de Arsenais e Unidades
---
## 🏥 Estoque Setorial — Análise de Arsenais e Unidades

### Finalidade

Permite visualizar **todo o patrimônio vinculado a um setor específico**, independentemente de onde o item esteja fisicamente. Se um setor (ex.: Centro Cirúrgico) possui 50 materiais patrimoniados, esta tela mostra todos — incluindo os que estão na CME passando por reprocessamento, identificados com o marcador "EM TRÂNSITO".

### Como Utilizar

1. Acesse **Armazenamento → Estoque Setorial** no menu lateral.
1. No seletor **"Selecionar Proprietário"**, escolha o setor desejado. Perfis Administrador e Operador CME têm acesso à opção "TODOS OS SETORES (Geral)" para visão global.
1. A tabela carrega mostrando todos os itens cujo `setorProprietarioId` corresponde ao setor selecionado.
1. Use o campo **"Buscar Material / Serial"** para filtrar por nome ou código serial.
1. Use o filtro **"Filtrar por Status"** para segmentar: Em Arsenal/Uso, Disponível (Pronto), No Expurgo, No Preparo, Na Esterilização.
1. A coluna **"Localização Atual"** mostra onde o item está fisicamente. Quando o item está na CME mas pertence a outro setor, o indicador **"EM TRÂNSITO"** aparece com ponto pulsante azul.
1. A coluna **Validade** possui coloração semafórica (verde >30 dias, amarelo ≤30 dias, vermelho ≤7 dias, vermelho forte = vencido).
1. Use os botões **PDF** e **CSV** para exportar o relatório do setor selecionado. O rodapé da página também oferece o botão "PDF de Patrimônio".
1. A paginação (15 itens por página) aparece no rodapé da tabela.

### Campos e Informações

| Campo / Coluna | Descrição |
| --- | --- |
| Selecionar Proprietário | Dropdown de setores. "TODOS OS SETORES" disponível apenas para Admin/Operador |
| Serial / QR Code | Código serial do item + Lote atual (se houver) |
| Material / Modelo | Nome do material e modelo/classe vinculada |
| Proprietário | Setor dono do material |
| Localização Atual | Setor onde o item está fisicamente. Indicador "EM TRÂNSITO" quando difere do proprietário |
| Status | Badge colorido: Disponível (verde), No Arsenal/Uso (azul), No Expurgo (laranja), No Preparo (índigo), Esterilização (roxo) |
| Validade | Data de validade com coloração semafórica |

> [!NOTE] Esta tela é complementar ao Estoque CME. Enquanto o Estoque CME mostra o patrimônio da CME, o Estoque Setorial mostra o patrimônio de cada setor consumidor — mesmo que parte dele esteja temporariamente na CME.

> [!IMPORTANT] O indicador "EM TRÂNSITO" significa que o item pertence ao setor selecionado, mas está fisicamente na CME (em reprocessamento ou armazenamento centralizado). O setor não perdeu a posse — o item voltará após o ciclo.

> [!CAUTION] Apenas perfis **Administrador** e **Operador CME** podem visualizar "TODOS OS SETORES". Demais perfis veem apenas setores aos quais têm acesso.

### Impacto no Sistema

- **Consulta apenas (leitura)**: Esta tela não altera dados. É puramente analítica/consultiva.
- **Exportação PDF**: Gera relatório formatado (StockReportPDF) com estatísticas de disponível/processando/em uso, aberto em nova aba.
- **Exportação CSV**: Download com separador `;`, encoding UTF-8 BOM, contendo Serial, Material, Proprietário, Status, Setor Atual e Validade.
