import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
      CME<span style={{ color: '#2563eb' }}>.OS</span>{' '}
      <span style={{ fontWeight: 400, fontSize: '0.85rem', color: '#6b7280' }}>Manual do Usuário</span>
    </span>
  ),
  project: {
    link: 'https://github.com/seu-usuario/cmeos',
  },
  docsRepositoryBase: 'https://github.com/seu-usuario/cmeos-docs/blob/main',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} CME.OS · Desenvolvido por{' '}
        <a href="https://enftech.com.br" target="_blank" rel="noopener noreferrer">
          Enftech
        </a>
      </span>
    ),
  },
  editLink: {
    text: 'Editar esta página →',
  },
  feedback: {
    content: 'Algo está errado? Clique aqui para reportar →',
    labels: 'feedback',
  },
  sidebar: {
    titleComponent({ title }) {
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    title: 'Nesta página',
  },
  search: {
    placeholder: 'Buscar no manual...',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CME.OS Manual',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Manual do usuário do sistema CME.OS — Central de Material e Esterilização" />
    </>
  ),
  primaryHue: 215,
}

export default config
