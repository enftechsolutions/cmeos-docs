import { config, collection, fields } from '@keystatic/core'

const imageConfig = {
  directory: 'public/images',
  publicPath: '/images/',
}

const collectionSchema = {
  title: fields.slug({ name: { label: 'Título' } }),
  description: fields.text({ label: 'Descrição', multiline: false }),
  content: fields.markdoc({
    label: 'Conteúdo',
    extension: 'md',
    options: { image: imageConfig },
  }),
}

export default config({
  storage: process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE === 'local'
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: 'enftechsolutions/cmeos-docs',
      },
  ui: {
    brand: {
      name: 'CME.OS Docs',
    },
  },
  collections: {
    paginas: collection({
      label: 'Páginas',
      slugField: 'title',
      path: 'pages/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    expurgo: collection({
      label: 'Expurgo',
      slugField: 'title',
      path: 'pages/expurgo/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    preparo: collection({
      label: 'Preparo',
      slugField: 'title',
      path: 'pages/preparo/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    esterilizacao: collection({
      label: 'Esterilização',
      slugField: 'title',
      path: 'pages/esterilizacao/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    distribuicao: collection({
      label: 'Distribuição',
      slugField: 'title',
      path: 'pages/distribuicao/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    configuracoes: collection({
      label: 'Configurações',
      slugField: 'title',
      path: 'pages/configuracoes/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),
  },
})
