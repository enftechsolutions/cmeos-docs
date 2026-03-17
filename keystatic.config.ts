import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'enftechsolutions/cmeos-docs',
  },
  ui: {
    brand: {
      name: 'CME.OS Docs',
    },
  },
  collections: {
    // Páginas raiz (primeiros-passos, estoque, auditoria, etc.)
    paginas: collection({
      label: 'Páginas',
      slugField: 'title',
      path: 'pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição', multiline: false }),
        content: fields.markdoc({
          label: 'Conteúdo',
          extension: 'md',
        }),
      },
    }),

    // Expurgo
    expurgo: collection({
      label: 'Expurgo',
      slugField: 'title',
      path: 'pages/expurgo/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição', multiline: false }),
        content: fields.markdoc({
          label: 'Conteúdo',
          extension: 'md',
        }),
      },
    }),

    // Preparo
    preparo: collection({
      label: 'Preparo',
      slugField: 'title',
      path: 'pages/preparo/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição', multiline: false }),
        content: fields.markdoc({
          label: 'Conteúdo',
          extension: 'md',
        }),
      },
    }),

    // Esterilização
    esterilizacao: collection({
      label: 'Esterilização',
      slugField: 'title',
      path: 'pages/esterilizacao/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição', multiline: false }),
        content: fields.markdoc({
          label: 'Conteúdo',
          extension: 'md',
        }),
      },
    }),

    // Distribuição
    distribuicao: collection({
      label: 'Distribuição',
      slugField: 'title',
      path: 'pages/distribuicao/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição', multiline: false }),
        content: fields.markdoc({
          label: 'Conteúdo',
          extension: 'md',
        }),
      },
    }),

    // Configurações
    configuracoes: collection({
      label: 'Configurações',
      slugField: 'title',
      path: 'pages/configuracoes/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição', multiline: false }),
        content: fields.markdoc({
          label: 'Conteúdo',
          extension: 'md',
        }),
      },
    }),
  },
})
