import React from 'react'
import { Info, AlertTriangle, AlertOctagon, ChevronRight } from 'lucide-react'

export const Finalidade = ({ children }: { children: React.ReactNode }) => (
  <div className="doc-purpose border-l-4 border-blue-700 pl-4 py-1 text-sm text-slate-700 leading-relaxed mb-8">
    <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 block mb-2">Finalidade</span>
    {children}
  </div>
)

export const Callout = ({ type, title, children }: { type: 'note' | 'important' | 'caution', title?: string, children: React.ReactNode }) => {
  const styles = {
    note: { bg: 'bg-blue-500/5', border: 'border-blue-500/20', icon: <Info className="text-blue-500" size={16} />, label: 'Nota', labelColor: 'text-blue-600' },
    important: { bg: 'bg-orange-500/5', border: 'border-orange-500/20', icon: <AlertTriangle className="text-orange-500" size={16} />, label: 'Importante', labelColor: 'text-orange-600' },
    caution: { bg: 'bg-red-500/5', border: 'border-red-500/20', icon: <AlertOctagon className="text-red-500" size={16} />, label: 'Atenção', labelColor: 'text-red-600' },
  }
  const s = styles[type] || styles.note

  return (
    <div className={`flex gap-3 ${s.bg} ${s.border} rounded-2xl p-4 my-6`}>
      <div className="shrink-0 mt-0.5">{s.icon}</div>
      <div>
        <span className={`text-[10px] font-black uppercase tracking-widest ${s.labelColor} block mb-1`}>{title || s.label}</span>
        <div className="text-sm text-slate-700">{children}</div>
      </div>
    </div>
  )
}

export const Impacto = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 my-8">
    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Impacto no Sistema</span>
    <div className="space-y-2">
      {React.Children.map(children, child => (
        <div className="flex gap-2 items-start">
          <ChevronRight className="text-blue-700 shrink-0 mt-1" size={14} />
          <div className="text-sm text-slate-700">{child}</div>
        </div>
      ))}
    </div>
  </div>
)
