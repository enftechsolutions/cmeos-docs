import React, { useEffect, useState } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ShieldCheck } from 'lucide-react'

const ProgressIndicator = () => {
  const [completion, setCompletion] = useState(0)
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        )
      }
    }
    window.addEventListener('scroll', updateScrollCompletion)
    return () => window.removeEventListener('scroll', updateScrollCompletion)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-blue-700 transition-all duration-150"
        style={{ width: `${completion}%` }}
      />
    </div>
  )
}

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center gap-2">
      <ShieldCheck className="text-blue-700" size={24} />
      <span className="font-black text-xl uppercase tracking-tighter font-headings">
        CME.OS
      </span>
      <span className="bg-blue-700/10 text-blue-700 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-700/20">
        SaaS
      </span>
    </div>
  ),
  footer: {
    text: (
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          © {new Date().getFullYear()} CME.OS · Documentação Oficial
        </span>
        <span className="text-[10px] text-slate-400 font-medium">
          Sistema de Gestão de Central de Material e Esterilização Hospitalar
        </span>
      </div>
    ),
  },
  editLink: { component: () => null },
  feedback: { content: () => null },
  sidebar: {
    titleComponent({ title }) {
      return <span className="font-bold text-sm tracking-tight">{title}</span>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    title: (
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
        Nesta página
      </span>
    ),
  },
  search: {
    placeholder: 'Buscar documentação...',
  },
  main: ({ children }) => (
    <>
      <ProgressIndicator />
      {children}
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CME.OS SaaS',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Documentação técnica oficial do sistema CME.OS SaaS" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </>
  ),
  primaryHue: 220,
  primarySaturation: 85,
  banner: {
    key: 'documentation-update-v2',
    text: (
      <div className="text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
        <span className="bg-blue-700 text-white px-2 py-0.5 rounded-md">Novo</span>
        Design System CME.OS_SaaS aplicado à documentação
      </div>
    ),
  }
}

export default config
