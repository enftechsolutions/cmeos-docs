---
title: Insumos
description: Cadastro de insumos padronizados
---
## 🧴 Padronização de Insumos

Nesta seção são cadastrados os nomes oficiais dos insumos utilizados no processo da CME (ex: detergente enzimático, álcool 70%, peróxido de hidrogênio). O objetivo é garantir que todos os usuários do sistema utilizem a mesma nomenclatura ao registrar o uso de insumos.

### Como cadastrar um insumo padronizado

1. Acesse **Configurações → Insumos**
1. No campo **Nome do Insumo**, digite o nome oficial do insumo (ex: "Detergente Enzimático", "Peróxido de Hidrogênio")
1. Clique em **Adicionar Insumo**

O insumo cadastrado aparecerá na lista abaixo com um **código gerado automaticamente** pelo sistema e ficará disponível para seleção nas demais telas que utilizam insumos.

### Consultando insumos cadastrados

Utilize o campo **Buscar Insumo na Lista** para localizar rapidamente um insumo já cadastrado pelo nome. A tabela exibe:

| Coluna | Descrição |
| --- | --- |
| Código | Identificador único gerado automaticamente pelo sistema |
| Nome do Insumo Padronizado | Nome oficial cadastrado |
| Ações | Opções para editar ou remover o insumo |

> [!IMPORTANT] Padronizar os nomes dos insumos evita duplicidades e inconsistências nos registros. Antes de cadastrar, verifique se o insumo já não existe na lista com um nome semelhante.

---

## 🔗 Como essa tela impacta o restante do sistema

Os insumos padronizados aqui são a fonte única de dados para qualquer campo do sistema que envolva produtos químicos e saneantes. Sem ao menos um insumo cadastrado, não é possível configurar ciclos de lavadoras nem definir a composição química dos postos de desinfecção.

**Ciclos de Lavadoras Termodesinfectoras e Ultrassônicas**, ao configurar um ciclo de lavadora em **Configurações → Equipamentos**, o campo "Insumos Utilizados" puxa diretamente desta lista. O técnico seleciona o insumo e informa a quantidade consumida por ciclo. São esses dados que alimentam os **indicadores de consumo de insumos** do sistema, quantidade usada por ciclo, por equipamento e por período.

**Recipientes de Desinfecção Química**, ao cadastrar um recipiente (cuba) em **Configurações → Recipientes**, o campo "Insumo Principal" também puxa desta lista. O insumo selecionado identifica qual saneante é utilizado naquele posto de desinfecção e é registrado em cada ciclo e validação química realizados.

**Testes Químicos e Validação de Mistura**, ao registrar a validação de um produto em um recipiente (teste de fita reagente), o sistema vincula o registro ao insumo utilizado, criando um histórico rastreável de qual produto foi testado, quando e por quem.

**Indicadores de custo e eficiência**, o consumo de insumos registrado nos ciclos de lavadoras é consolidado nos relatórios gerenciais, permitindo calcular o custo real de cada ciclo de limpeza e acompanhar o gasto com produtos químicos ao longo do tempo.

> [!IMPORTANT] Um insumo excluído desta lista deixa de aparecer nos campos de seleção, mas os registros históricos que já o utilizaram permanecem intactos. Antes de remover um insumo, verifique se ele está vinculado a ciclos de equipamentos ou recipientes ativos — nesse caso, a remoção pode gerar inconsistências na configuração desses itens.
