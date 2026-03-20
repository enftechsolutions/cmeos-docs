# Prompt para Reestruturar as Abas da Documentação CME.OS

Cole o prompt abaixo no Gemini (ou outra IA). Preencha os `[DESCREVER AQUI]` com a explicação de cada aba antes de enviar.

---

## PROMPT

```
Você é um desenvolvedor especializado em Nextra (framework de documentação Next.js). Preciso que você reestruture a sidebar da minha documentação CME.OS, substituindo as abas atuais pelas novas abas listadas abaixo. A aba "Configurações" (configuracoes) NÃO deve ser alterada — mantenha ela exatamente como está.

### CONTEXTO TÉCNICO DO PROJETO

- Framework: Nextra (nextra-theme-docs)
- A navegação da sidebar é controlada por arquivos `_meta.json` dentro de `pages/`
- Cada aba pode ser uma página simples (arquivo `.md`) ou uma seção com subpáginas (pasta com `_meta.json` + arquivos `.md`)
- O projeto também usa Keystatic CMS — o arquivo `keystatic.config.ts` na raiz precisa ter as collections atualizadas para refletir as novas abas
- Todas as páginas usam Markdown (.md)

### ESTRUTURA ATUAL (para você entender o que remover)

**pages/_meta.json atual:**
{
  "index": "Início",
  "primeiros-passos": "Primeiros Passos",
  "expurgo": "Expurgo",
  "preparo": "Preparo",
  "esterilizacao": "Esterilização",
  "desinfeccao": "Desinfecção Manual",
  "distribuicao": "Distribuição",
  "estoque": "Estoque",
  "auditoria": "Auditoria e Rastreabilidade",
  "indicadores": "Indicadores",
  "impressao": "Impressão de Etiquetas",
  "configuracoes": "Configurações",
  "faq": "Perguntas Frequentes"
}

**keystatic.config.ts atual** possui collections para: paginas, expurgo, preparo, esterilizacao, distribuicao, configuracoes.

### NOVAS ABAS (substituir TODAS as abas acima, EXCETO "configuracoes")

A nova sidebar deve ter exatamente estas abas, nesta ordem:

1. **Requisição**
   - slug: `requisicao`
   - Descrição: [DESCREVER AQUI]

2. **Entrada de Material**
   - slug: `entrada-de-material`
   - Descrição: [DESCREVER AQUI]

3. **Limpeza (Expurgo)**
   - slug: `limpeza-expurgo`
   - Descrição: [DESCREVER AQUI]

4. **Desinfecção Manual**
   - slug: `desinfeccao-manual`
   - Descrição: [DESCREVER AQUI]

5. **Preparo**
   - slug: `preparo`
   - Descrição: [DESCREVER AQUI]

6. **Esterilização**
   - slug: `esterilizacao`
   - Descrição: [DESCREVER AQUI]

7. **Armazenamento**
   - slug: `armazenamento`
   - Descrição: [DESCREVER AQUI]

8. **Materiais Externos**
   - slug: `materiais-externos`
   - Descrição: [DESCREVER AQUI]

9. **Processamento Externo**
   - slug: `processamento-externo`
   - Descrição: [DESCREVER AQUI]

10. **Distribuição**
    - slug: `distribuicao`
    - Descrição: [DESCREVER AQUI]

11. **Indicadores**
    - slug: `indicadores`
    - Descrição: [DESCREVER AQUI]

12. **Configurações** ← NÃO ALTERAR, manter como está

### O QUE VOCÊ DEVE GERAR

1. **Novo `pages/_meta.json`** — com todas as novas abas na ordem correta + configuracoes no final

2. **Para cada aba que tenha subpáginas**: gerar a pasta correspondente com:
   - `index.md` (página de visão geral da seção)
   - `_meta.json` (definindo as subpáginas)
   - Arquivos `.md` das subpáginas com conteúdo inicial baseado na descrição fornecida

3. **Para cada aba simples (sem subpáginas)**: gerar o arquivo `.md` correspondente com conteúdo inicial

4. **Novo `keystatic.config.ts`** — atualizado com collections para cada nova aba que tenha subpáginas. Manter a collection `configuracoes` intacta. Seguir o mesmo padrão já usado:
   ```ts
   nomeAba: collection({
     label: 'Nome da Aba',
     slugField: 'title',
     path: 'pages/nome-aba/*',
     format: { contentField: 'content' },
     schema: collectionSchema,
   }),
   ```

5. **Lista de arquivos/pastas antigos para deletar** — tudo que existia antes e não faz mais parte da nova estrutura (exceto configuracoes/)

### REGRAS IMPORTANTES

- NÃO alterar: `pages/configuracoes/` (pasta inteira), `theme.config.tsx`, `pages/_app.tsx`, `pages/api/`, `pages/keystatic/`
- Manter `pages/index.md` como página inicial (pode atualizar o conteúdo para refletir as novas seções)
- Todo conteúdo em português brasileiro
- Cada página `.md` deve ter frontmatter com `title` e `description`
- Gerar conteúdo útil e descritivo (não apenas "em construção"), usando as descrições que forneci para cada aba
- Se uma aba tiver funcionalidades complexas com múltiplos fluxos, crie subpáginas. Se for algo simples/direto, uma única página basta.
```

---

**Depois de preencher os `[DESCREVER AQUI]`, cole tudo no Gemini e ele vai gerar a nova estrutura completa.**
