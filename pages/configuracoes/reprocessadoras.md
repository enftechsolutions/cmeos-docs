---
title: 'Reprocessadoras '
description: 'Cadastro de Empresas Reprocessadoras '
---
## 🏭 Empresas Reprocessadoras

-Nesta seção são cadastrados os parceiros externos responsáveis pela **esterilização terceirizada** de materiais. Quando um item não pode ser processado internamente pelo CME — seja por limitação de equipamento ou por protocolo específico — ele é enviado para uma empresa reprocessadora, e o sistema precisa saber quais empresas estão habilitadas, quais métodos cada uma oferece e qual a validade da esterilização por elas realizada.

### Como cadastrar uma empresa reprocessadora

1. Acesse **Configurações → Reprocessadoras**
1. Clique em **+ Nova Empresa**
1. Preencha os dados da empresa e os métodos de esterilização oferecidos
1. Clique em **Cadastrar Empresa**

### Campos do cadastro

**Dados da empresa:**

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| Razão Social / Nome da Empresa | ✅ Sim | Nome oficial ou razão social da empresa parceira |
| CNPJ | Não | CNPJ da empresa (formatado automaticamente pelo sistema) |
| Telefone de Contato | Não | Telefone principal para contato (formatado automaticamente) |
| E-mail Institucional | Não | E-mail de contato da empresa |
| Endereço Completo | Não | Endereço da empresa (Rua, Número, Bairro, Cidade - UF) |

---

### **Métodos e Validades:**

Esta é a seção mais importante do cadastro. Aqui você define quais **métodos de esterilização** a empresa oferece e qual a **validade** garantida para cada método. Esses dados são usados pelo sistema para controlar automaticamente o prazo de validade dos materiais enviados para reprocessamento externo.

Para adicionar um método:

1. Digite o **nome do método** (ex: "Vapor Saturado", "Peróxido de Hidrogênio", "Óxido de Etileno")
1. Informe o **valor da validade** e selecione a **unidade** (Dias, Meses ou Anos)
1. Clique no botão **+** para adicionar

Repita o processo para cada método que a empresa oferece. É possível cadastrar múltiplos métodos por empresa.

> [!IMPORTANT] **Ao menos um método de esterilização é obrigatório** para salvar o cadastro. O sistema não permite cadastrar uma empresa reprocessadora sem definir seus métodos e validades, pois essa informação é essencial para o controle de prazo dos materiais processados externamente.

> [!NOTE] O sistema converte automaticamente a validade para dias internamente. Por exemplo, "2 Meses" será armazenado como "60 dias" e "1 Ano" como "365 dias". Isso garante que o cálculo de vencimento seja sempre preciso, independentemente da unidade informada no cadastro.

**Status da empresa:**

O campo **Empresa Ativa no Sistema** controla se a empresa estará disponível para seleção durante o registro de envios para reprocessamento externo. Empresas **inativas** são exibidas na lista com um badge "INATIVA" e ficam desabilitadas para uso operacional, mas seu histórico é preservado.

### Consultando e gerenciando empresas cadastradas

As empresas cadastradas são exibidas em **cartões individuais**, cada um contendo o nome, CNPJ, telefone, e-mail, endereço e os métodos de esterilização disponíveis. Utilize o campo **Buscar parceiros** para localizar rapidamente uma empresa pelo nome.

Em cada cartão há duas ações disponíveis:

- **Editar** — abre o formulário preenchido com os dados da empresa para atualização
- **Excluir** (ícone de lixeira) — remove o cadastro da empresa após confirmação

> [!CAUTION] Ao excluir uma empresa reprocessadora, os dados de método e validade vinculados a ela também serão removidos. Se a empresa possui histórico de materiais enviados, avalie se a exclusão é a ação correta ou se basta desativá-la pelo campo **Empresa Ativa no Sistema**.

## 🔗 Como essa tela impacta o restante do sistema

O cadastro de Empresas Reprocessadoras é **pré-requisito direto** para operar o módulo de Processamento Externo. Sem ao menos uma empresa ativa cadastrada, não é possível registrar o envio de nenhum item para esterilização terceirizada. Duas telas dependem diretamente deste cadastro:

**Envio para Processamento Externo** — ao registrar o envio de um lote de materiais para esterilização externa, o sistema exige a seleção de uma empresa reprocessadora. Somente empresas com status **ativo** aparecem disponíveis nesta etapa. Se uma empresa foi desativada, ela deixará de aparecer na lista de seleção mesmo que já tenha processado materiais anteriormente.

**Recebimento de Processamento Externo** — ao registrar o retorno dos materiais já esterilizados, o sistema utiliza os **métodos e validades** configurados no cadastro da empresa para calcular automaticamente a data de vencimento de cada item. Por exemplo: se a empresa processou o material pelo método "Vapor Saturado" com validade de 900 dias, o sistema já calcula e registra a data de expiração no momento do recebimento, sem necessidade de preenchimento manual.

> [!IMPORTANT] A validade configurada por método no cadastro da empresa é o que o sistema usa como base de cálculo para o vencimento dos materiais recebidos. Se a validade estiver incorreta no cadastro, todos os materiais recebidos daquela empresa por aquele método terão suas datas de expiração calculadas de forma errada. Mantenha as validades sempre atualizadas conforme os laudos técnicos da empresa parceira.
