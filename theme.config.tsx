import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.03em', fontFamily: 'Manrope, sans-serif' }}>
      CME<span style={{ color: '#2563eb' }}>.OS</span>{' '}
      <span style={{ fontWeight: 400, fontSize: '0.8rem', color: '#6b7280', letterSpacing: '-0.01em' }}>
        Manual do Usuário
      </span>
    </span>
  ),
  footer: {
    text: (
      <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
        © {new Date().getFullYear()} CME.OS · Desenvolvido por Enftech
      </span>
    ),
  },
  editLink: { component: () => null },
  feedback: { content: () => null },
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </>
  ),
  primaryHue: 220,
  primarySaturation: 85,
}

export default config
