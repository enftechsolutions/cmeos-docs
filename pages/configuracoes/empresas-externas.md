---
title: Empresas Externas
description: 'Cadastro(Clientes) de Empresas Externas'
---
## 🏢 Empresas Externas (Clientes Externos)

Nesta seção são cadastradas as empresas, clínicas, médicos e setores externos que **entregam materiais ao CME para processamento**. São os proprietários dos materiais, quem traz o instrumental, aguarda o usoe depois o retira.

É importante não confundir com as **Empresas Reprocessadoras**, que são parceiros que fazem a esterilização por conta do CME. As Empresas Externas são o oposto: são os **clientes** que dependem do CME para processar seus materiais.

Exemplos típicos de cadastro: Clínica Ortopédica Sul Ltda, Dr. João Silva (consultório médico), Centro Cirúrgico Externo, Setor de Endoscopia de outro hospital.

### Como cadastrar uma empresa externa

1. Acesse **Clientes Externos**
1. Clique em **Nova Empresa**
1. Preencha os dados e clique em **Cadastrar Empresa**

### Campos do cadastro

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| Razão Social / Nome Fantasia | ✅ Sim | Nome da clínica, médico ou setor externo |
| CNPJ / CPF | Não | O sistema aceita tanto CPF (para médicos pessoa física) quanto CNPJ (para clínicas e empresas), formatando automaticamente conforme o número digitado |
| Telefone de Contato | Não | Telefone principal para contato com o cliente |
| E-mail Institucional | Não | E-mail da empresa ou responsável |
| Endereço Completo | Não | Endereço completo (Rua, Número, Bairro, Cidade - UF) |
| Empresa Ativa no Sistema | — | Controla se a empresa aparecerá disponível para seleção nas telas operacionais |

> [!NOTE] O campo **CNPJ / CPF** aceita os dois formatos. Se o cliente for um médico pessoa física, basta digitar o CPF — o sistema reconhece automaticamente e aplica a formatação correta. Para clínicas e empresas, use o CNPJ.

### Consultando e gerenciando empresas

As empresas cadastradas são exibidas em cartões individuais com nome, CNPJ/CPF, telefone, e-mail e endereço. A busca funciona por **nome, CNPJ ou e-mail** simultaneamente. As ações disponíveis em cada cartão são **Editar** e **Excluir** (visíveis ao passar o mouse sobre o cartão).

Empresas inativas ficam marcadas com o badge **"INATIVA"** e não aparecem para seleção nas telas operacionais, mas seu histórico é mantido.

---

## 🔗 Como essa tela impacta o restante do sistema

O cadastro de Empresas Externas é um **pré-requisito direto** para operar o módulo de **Materiais Externos**. Sem ao menos uma empresa cadastrada, não é possível registrar entrada, movimentação ou saída de materiais externos. As três telas abaixo dependem diretamente deste cadastro:

**Entrada de Materiais Externos** Ao registrar a entrada de um material trazido por um cliente, o sistema exige que você selecione a origem — que pode ser uma Empresa Externa cadastrada aqui ou um setor interno. O nome da empresa fica vinculado ao registro de entrada e aparece em todo o histórico de rastreabilidade do material.

**Estoque de Materiais Externos** O estoque de materiais externos é organizado por empresa. Cada item em estoque está associado à empresa que o entregou, permitindo visualizar exatamente quais materiais pertencem a cada cliente e qual é o status de cada um.

**Baixa de Materiais Externos** Ao registrar a saída (devolução) de um material processado ao cliente, o sistema lista as empresas externas para que você selecione o destinatário. Somente os materiais em estoque vinculados à empresa selecionada aparecerão disponíveis para baixa.

> [!IMPORTANT] Se uma Empresa Externa for **desativada**, ela deixará de aparecer nos formulários de entrada e baixa. No entanto, os registros históricos já existentes vinculados a ela são preservados e continuam acessíveis nos relatórios. Desativar é sempre preferível a excluir, pois a exclusão pode comprometer o histórico de rastreabilidade dos materiais.

> [!CAUTION] Evite cadastrar a mesma empresa mais de uma vez com nomes ligeiramente diferentes (ex: "Clínica Sul" e "Clinica Sul Ltda"). Duplicidades dificultam a consulta no estoque e nos relatórios, pois o histórico ficará fragmentado entre dois cadastros distintos.
