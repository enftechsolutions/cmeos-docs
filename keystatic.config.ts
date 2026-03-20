import { config, collection, singleton, fields } from '@keystatic/core'

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
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'CME.OS Docs',
    },
  },
  collections: {
    paginas: collection({
      label: 'Requisição',
      slugField: 'title',
      path: 'pages/requisicao/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    entrada_de_material: collection({
      label: 'Entrada de Material',
      slugField: 'title',
      path: 'pages/entrada-de-material/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    limpeza_expurgo: collection({
      label: 'Limpeza (Expurgo)',
      slugField: 'title',
      path: 'pages/limpeza-expurgo/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    desinfeccao_manual: collection({
      label: 'Desinfecção Manual',
      slugField: 'title',
      path: 'pages/desinfeccao-manual/*',
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

    estoque: collection({
      label: 'Estoque',
      slugField: 'title',
      path: 'pages/estoque/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    materiais_externos: collection({
      label: 'Materiais Externos',
      slugField: 'title',
      path: 'pages/materiais-externos/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    processamento_externo: collection({
      label: 'Processamento Externo',
      slugField: 'title',
      path: 'pages/processamento-externo/*',
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

    indicadores: collection({
      label: 'Indicadores',
      slugField: 'title',
      path: 'pages/indicadores/*',
      format: { contentField: 'content' },
      schema: collectionSchema,
    }),

    auditoria: collection({
      label: 'Auditoria',
      slugField: 'title',
      path: 'pages/auditoria/*',
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
  singletons: {
    inicio: singleton({
      label: 'Início',
      path: 'pages/index',
      format: { contentField: 'content' },
      schema: {
        content: fields.markdoc({
          label: 'Conteúdo',
          extension: 'md',
          options: { image: imageConfig },
        }),
      },
    }),
  },
})
