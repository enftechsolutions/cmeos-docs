---
title: Usuários
description: Como criar e gerenciar os acessos dos colaboradores ao CME.OS.
---
## 👥 Equipe e Usuários

Nesta seção são cadastrados todos os colaboradores que terão acesso ao sistema. É aqui que o administrador cria os logins, define as senhas iniciais, registra o cargo e o número de conselho profissional de cada funcionário, e — o mais importante — determina **qual nível de acesso** cada pessoa terá no sistema.

### Como cadastrar um novo usuário

1. Acesse **Usuários**
1. Clique em **+ Novo Usuário**
1. Preencha os dados e clique em **Salvar Funcionário**

### Campos do cadastro

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| Nome Completo | ✅ Sim | Nome do funcionário como aparecerá em todo o sistema |
| Cargo / Função | Não | Cargo institucional (ex: "Enf. CME", "Técnico de Enfermagem", "Aux. Expurgo") |
| Registro Profissional | Não | Número do conselho profissional (COREN para enfermeiros e técnicos, CRM para médicos) |
| Acesso (Login) | ✅ Sim | Identificador único que o funcionário usará para entrar no sistema. Não pode ser repetido |
| Senha | ✅ Sim | Senha inicial de acesso. O funcionário pode alterá-la posteriormente pelo seu perfil |
| Perfil de Acesso | ✅ Sim | Define o nível de permissão do usuário no sistema (ver tabela abaixo) |
| Setor (Lotação) | Não | Setor ao qual o funcionário está vinculado. Quando informado, o sistema pode filtrar e organizar registros por setor |

### Perfis de acesso disponíveis

O **Perfil de Acesso** é o campo mais crítico do cadastro. Ele determina o que o usuário pode ou não fazer dentro do sistema:

| Perfil | Descrição |
| --- | --- |
| **System Admin** | Perfil reservado para a administração da plataforma CME.OS. Não deve ser atribuído a funcionários da instituição |
| **Administrador** | Acesso completo ao sistema — configurações, relatórios, usuários, equipamentos e todos os módulos operacionais. Indicado para a chefia do CME e coordenação de enfermagem |
| **Enfermeiro** | Acesso aos módulos operacionais e de supervisão. Pode registrar e validar processos, mas com restrições nas configurações do sistema |
| **Operador** | Acesso restrito às telas operacionais do dia a dia (expurgo, esterilização, distribuição). Não acessa configurações nem relatórios gerenciais |

> [!IMPORTANT] O perfil **System Admin** é exclusivo da equipe técnica responsável pela plataforma e não deve ser atribuído a nenhum funcionário da instituição de saúde, por mais que seja um administrador.

> [!CAUTION] O **login** é o identificador único de cada usuário e não pode ser reutilizado. Escolha um padrão consistente para a instituição (ex: primeiro nome + sobrenome, ou matrícula funcional) para evitar confusões.

### Consultando e gerenciando usuários

Os usuários cadastrados são exibidos em uma tabela com as colunas **Funcionário**, **Função / Registro**, **Acesso (login)** e **Perfil**. A busca funciona por nome, login ou cargo simultaneamente. A lista é paginada em grupos de 10 por página.

A única ação disponível diretamente na lista é **Editar**, que abre o formulário preenchido permitindo alterar qualquer campo — inclusive trocar o perfil de acesso ou redefinir a senha do funcionário.

> [!NOTE] Ao editar um usuário, o campo **Senha** pode ser deixado em branco — nesse caso, a senha atual é mantida. Preencha apenas quando quiser redefinir o acesso do funcionário.

---

## 🔗 Como essa tela impacta o restante do sistema

O cadastro de usuários tem impacto direto em praticamente todo o sistema, pois cada ação registrada no CME.OS é **rastreada ao usuário que a executou**.

**Rastreabilidade e assinatura de processos** — toda movimentação operacional (entrada no expurgo, conclusão de ciclo, liberação de material, distribuição) registra o nome do usuário responsável. Isso garante a rastreabilidade exigida pelas normas sanitárias e permite identificar quem executou cada etapa do processamento.

**Controle de acesso por perfil** — o perfil atribuído ao usuário determina quais menus e funcionalidades ele consegue visualizar e utilizar. Um **Operador** que tenta acessar a área de configurações ou relatórios será bloqueado automaticamente. Isso evita alterações acidentais em parâmetros críticos por usuários sem autorização.

**Lotação por setor** — quando o usuário tem um setor vinculado, o sistema pode pré-selecionar e filtrar informações baseadas nessa lotação, agilizando o trabalho diário e reduzindo erros de seleção.

**Autenticação e sessão** — o login e senha cadastrados aqui são as únicas credenciais de acesso ao sistema. Não existe login social ou integração com outros sistemas — o acesso é exclusivamente pelo CME.OS com as credenciais definidas nesta tela.

> [!IMPORTANT] Quando um funcionário sai da instituição ou é transferido, seu acesso deve ser revogado imediatamente pela edição do usuário. Como o sistema não possui uma opção de "desativar usuário" visível na tela, entre em contato com o administrador do sistema para bloquear o acesso quando necessário.
