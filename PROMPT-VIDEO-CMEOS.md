# PROMPT DE VÍDEO — CME.OS SaaS

> Prompt estruturado para geração de vídeo por IA (Sora, Runway, Kling, Luma, Veo).
> Cada cena foi construída com dados reais extraídos da documentação do sistema.

---

## COMANDO PRINCIPAL (Master Prompt)

```
Cinematic product showcase video for "CME.OS" — a hospital sterilization management SaaS platform used by nurses and technicians in Brazilian hospital Central de Material e Esterilização (CME) departments. The video conveys trust, precision, and clinical excellence.

VISUAL IDENTITY:
- Primary color: Deep hospital blue (#1D4ED8, hue 220, saturation 85%)
- Accent: Clinical teal and white
- Background: Dark mode UI (#0F172A slate-900) with soft blue glow halos
- Typography: Inter (body) and Manrope (headings), bold uppercase tracking-tight
- Logo: Shield-check icon + "CME.OS" in black uppercase + "SaaS" badge in blue/10 background
- Overall aesthetic: Medical-modern, glassmorphism panels, studio lighting, 4K resolution

CAMERA STYLE:
- Slow cinematic pans, macro zooms on UI elements, depth-of-field blur on background
- Smooth easing transitions between scenes (1.5s crossfade)
- Floating 3D perspective on dashboard cards with parallax
- High shutter speed, global illumination, professional art direction
```

---

## CENAS DETALHADAS

### CENA 1 — ABERTURA (0:00–0:06)
**"O Coração do Hospital"**

```
Fade in from black. Slow aerial establishing shot of a modern hospital corridor, warm clinical lighting. Camera pushes through double doors into a pristine CME department — stainless steel workbenches, wrapped instrument trays on shelves, an autoclave with its door ajar showing steam.

Text overlay fades in with subtle parallax:
"CME.OS" (large, uppercase, Inter 900 weight)
"Rastreabilidade de ponta a ponta." (small, Manrope 600, tracking-widest)

Shield-check icon materializes with a soft blue glow pulse.

Mood: Trust, precision, clinical gravity.
Duration: 6 seconds.
Audio: Low ambient hum transitioning to a clean, minimal synth pad.
```

---

### CENA 2 — RECEBIMENTO DE MATERIAIS (0:06–0:14)
**"A Porta de Entrada"**

```
Camera zooms into a dark-mode interface panel. A nurse's hand holds a QR code scanner near a surgical instrument tray. The scanner emits a blue light beam.

UI MOCK (hero version, glassmorphism, not a raw screenshot):
- Left panel: "Recebimento de Materiais" header
- Toggle switch labeled "É Troca Direta?" glowing blue when active
- Campo de Bipagem field with pulsing cursor (auto-focus indicator)
- A QR code icon scans — BEEP sound — item appears in the right panel

Right panel: "Bandeja" card showing:
- Counter animating from "0 itens" to "12 itens" as items are scanned
- List items appearing one by one with micro slide-up animation:
  "Pinça Kelly Curva — SN-4821"
  "Caixa Cirúrgica Básica — SN-7733"
  "Tesoura Mayo — SN-1156"

Bottom: Green "Confirmar Recebimento" button with subtle glow.

Camera: Macro zoom on the scanning moment, then pulls back to reveal the full dashboard.
Duration: 8 seconds.
```

---

### CENA 3 — EXPURGO / LAVAGEM (0:14–0:24)
**"Limpeza Sob Controle"**

```
Smooth transition: UI elements dissolve and reconstruct into the Expurgo panel.

UI MOCK:
- Header: "Painel de Expurgo"
- Left table: "Fila de Higienização" with items showing status badges:
  - Blue badge "AGUARDANDO LIMPEZA" (3 items with checkboxes, all selected)
- Right side: Equipment cards in a 3-column grid:
  - Card 1: "Lavadora Termodesinfectora 01" — dropdown showing "134°C / 18min"
  - Card 2: "Ultrassônica 01" — badge "Ativo" (blue, pulsing)
  - Card 3: "Limpeza Manual" — icon of hands with water droplets

ANIMATION SEQUENCE:
1. User clicks "Carregar" on Lavadora card
2. Items slide from the left table into the equipment card
3. A circular countdown timer appears: "18:00" counting down
4. Progress bar fills smoothly from left to right in blue
5. Timer reaches 00:00 — badge transitions from "Ativo" (blue) to "Validar" (red, pulsing animation)

Camera: Top-down 3D perspective showing the card grid, then tilt to eye-level.
Duration: 10 seconds.
Audio: Subtle mechanical hum during timer, clean chime when timer reaches zero.
```

---

### CENA 4 — VALIDAÇÃO DE CICLO (0:24–0:30)
**"Evidência e Conformidade"**

```
Zoom into the "Validar" badge on the equipment card. It expands into a full validation form.

UI MOCK — Modal/form overlay with glassmorphism backdrop blur:
- Title: "Validação de Ciclo de Lavagem"
- Field 1: Dropdown "Resultado do Teste Químico" — selection animates to "APROVADO" with green checkmark
- Field 2: File upload area — a PDF icon slides in labeled "Laudo_Termodesinfectora.pdf"
- Field 3: Image upload — a photo thumbnail appears showing a chemical indicator strip
- Field 4: Text area "Observações Adicionais"
- Auto-generated lote badge appears: "LAV-003/2026-0047" in a monospace blue pill

Bottom: "Confirmar Validação" button — user clicks — confetti-like micro particles emanate from the button.

Camera: Centered frontal view, shallow depth of field on the form.
Duration: 6 seconds.
```

---

### CENA 5 — PREPARO (0:30–0:40)
**"Inspeção, Embalagem, Rastreio"**

```
Transition: Form dissolves into particles that reform as the Preparo screen.

UI MOCK:
- Header: "Preparo — Fila de Trabalho"
- Counter badge: "23 itens na fila"
- Search field with QR icon and pulsing cursor

ANIMATION: Camera focuses on one item row. User clicks "Iniciar Preparo". The row expands into a full checklist:

CHECKLIST (4 steps, each with a checkbox that animates a check mark):
1. ☐ → ☑ "Inspeção Visual de Limpeza" (check animates with blue ripple)
2. ☐ → ☑ "Teste de Funcionalidade"
3. ☐ → ☑ "Conferência de Conteúdo" — expands to show a progress bar: "5 de 7 instrumentos conferidos" with individual QR scans
4. ☐ → ☑ "Barreira Estéril e Evidência" — shows dropdown "Papel Grau Cirúrgico" with auto-calculated "Validade: 180 dias" appearing beside it

Below checklist: A photo upload area with label "Foto da Montagem" and a camera icon.

FINAL MOMENT: "Finalizar Preparo" button pressed.
A thermal label ETIQUETA materializes floating in 3D space:
- QR code
- "Caixa Cirúrgica Básica"
- "Lote: STERIL-001/2026-0089"
- "Validade: 16/09/2026"
- "Operador: Enf. Maria Silva"
- Printer icon pulses, suggesting QZ-Tray direct printing

Camera: Starts over-the-shoulder, pushes into the checklist, ends on the floating label.
Duration: 10 seconds.
```

---

### CENA 6 — ESTERILIZAÇÃO (0:40–0:52)
**"Segurança em Duas Etapas"**

```
Transition: The etiqueta spins and dissolves into the Esterilização panel.

UI MOCK:
- Header: "Esterilização — Nova Carga"
- Left table: "Fila de Preparos (Prontos p/ Esterilizar)" — items with status "AGUARDANDO ESTERILIZAÇÃO"
- Right: Autoclave cards with equipment names, marca/modelo
- Dropdown on autoclave card: "Ciclo: 134°C / 18min — Pré-Vácuo"

ANIMATION — TWO-STEP SAFETY SEQUENCE (the unique feature):
1. User clicks "Carregar" on autoclave
2. MODAL 1 appears (glassmorphism):
   "⚠️ Segurança de Carga"
   "Os indicadores químicos físicos foram inseridos na autoclave?"
   Two buttons: "Cancelar" (gray) / "Confirmar" (blue)
   User clicks "Confirmar" — modal dissolves with checkmark animation

3. MODAL 2 appears immediately:
   "Confirmar Início"
   "Volumes na carga: 8 itens"
   Buttons: "Voltar" / "Iniciar Ciclo" (green)
   User clicks "Iniciar Ciclo"

4. Autoclave card transforms: countdown timer appears "18:00" with smooth circular progress ring
5. Badge changes to "Ativo" (blue glow)

Camera: Dramatic slow push-in during the two modals, creating tension and release.
Duration: 12 seconds.
Audio: Tension build during modals, release sound (steam hiss) when cycle starts.
```

---

### CENA 7 — DISTRIBUIÇÃO (0:52–1:00)
**"Do Arsenal ao Paciente"**

```
Transition: Timer fast-forwards (time-lapse effect), reaches zero, badge flashes "Validar".

Quick cut to: Distribution screen.

UI MOCK:
- Header: "Distribuição — Requisições Pendentes"
- Card grid (3 columns) showing requisition cards:
  - Each card: Red "Pendente" badge, material name, setor destino, solicitante
  - Example: "Caixa Cirúrgica Básica — Centro Cirúrgico — Enf. João Santos"

ANIMATION:
1. Staff clicks "Validar e Atender" on a card
2. Modal appears: "Código de Validação" field
3. Six digits typed one by one: "4 — 7 — 2 — 9 — 1 — 5" (each digit appears with a subtle pop)
4. Green checkmark — "Código Válido" — material dispensed
5. Card badge transitions: "Pendente" (red) → "Entregue" (green) with satisfying color morph

Camera: Frontal view with slight tilt, focus rack between the card grid and the modal.
Duration: 8 seconds.
Audio: Keyboard clicks for each digit, success chime on validation.
```

---

### CENA 8 — PAINEL DE INDICADORES (1:00–1:10)
**"Dados que Decidem"**

```
Transition: All previous UI elements implode toward center and explode outward as the KPI dashboard.

UI MOCK:
- Header: "Painel de Indicadores"
- Date filter: "01/02/2026 — 20/03/2026" with blue "Filtrar" button

6 KPI CARDS (top row, animated count-up):
- "Lavagem" → counter: 0 → 1.247 (blue icon)
- "Esterilização" → 0 → 983 (teal icon)
- "Ciclos" → 0 → 412 (indigo icon)
- "Distribuição" → 0 → 2.156 (green icon)
- "Empréstimos" → 0 → 387 (amber icon)
- "Estoque" → 0 → 1.891 (purple icon)

Below: RANKINGS section with horizontal bar charts animating from left to right:
- "Materiais Mais Produzidos": bars growing with proportional widths
- "Produção por Equipamento": "Autoclave 01" longest bar, "Lavadora 02" second
- "Demanda por Setor": "Centro Cirúrgico" dominating
- "Operadores": avatar initials with bar lengths

Green "Exportar CSV" button glows in corner.

Camera: Starts wide to show full dashboard, then slow dolly-in on the animated counters.
Duration: 10 seconds.
Audio: Data-processing sounds (subtle clicks and whooshes) synced with counter animations.
```

---

### CENA 9 — RASTREABILIDADE / AUDITORIA (1:10–1:18)
**"Cada Passo Registrado"**

```
Transition: One KPI card "zooms through" to reveal the Auditoria screen.

UI MOCK:
- Header: "Central de Auditoria"
- Four tabs: "Expurgo" | "Preparo" | "Esterilização" | "Distribuição" (Esterilização tab active, underlined blue)
- Table showing cycle records with columns: Data/Hora, Item/Material, Operador (avatar), Equipamento, Lote badge

ANIMATION:
1. User hovers over a row — "Ver Prontuário" action appears
2. Click — AuditTimelineModal opens:
   A vertical timeline unfolds chronologically from top to bottom:

   📥 "Recebimento" — 08:12 — Enf. Ana Costa
   🧼 "Lavagem — Termodesinfectora 01" — 08:45 — Lote LAV-003/2026-0047
   ✅ "Validação Aprovada" — 09:20 — Teste Químico: APROVADO
   📋 "Preparo Concluído" — 10:15 — Embalagem: Papel Grau Cirúrgico
   🔥 "Esterilização — Autoclave 01" — 11:00 — Lote STERIL-001/2026-0089
   ✅ "Carga Liberada" — 11:35 — Integrador + Biológico OK
   📦 "Distribuído" — 14:20 — Centro Cirúrgico — Cód. 472915

   Each event slides in from the left with a timestamp, connected by a glowing blue vertical line.

Camera: Starts on the table, pushes into the modal, timeline fills the frame.
Duration: 8 seconds.
Audio: Gentle timeline progression sounds, each event a soft "tick".
```

---

### CENA 10 — ENCERRAMENTO (1:18–1:25)
**"Confiança em Cada Instrumento"**

```
The timeline compresses into a single glowing blue line that transforms into the CME.OS logo.

Final composition (centered, dark background with subtle particle field):
- Shield-check icon (large, glowing blue)
- "CME.OS" (Inter 900, white, uppercase)
- "SaaS" badge (blue pill)
- Tagline fades in below: "Rastreabilidade. Segurança. Controle."

Below: "cmeos.com.br" in small blue text

The blue progress bar from Scene 1 completes its journey across the bottom of the screen — 100%.

Fade to black.

Camera: Static center frame, particles drift slowly in background.
Duration: 7 seconds.
Audio: Musical resolution — clean, confident chord. Silence.
```

---

## ESPECIFICAÇÕES TÉCNICAS

| Parâmetro | Valor |
|---|---|
| Resolução | 4K (3840×2160) |
| FPS | 30 ou 60 |
| Duração total | ~85 segundos (1:25) |
| Aspect ratio | 16:9 |
| Estilo | Cinematic product showcase |
| Paleta | #0F172A (bg), #1D4ED8 (primary blue), #0D9488 (teal), #FFFFFF (text) |
| Tipografia | Inter 400-900, Manrope 600-900 |
| Renderização UI | Hero/glassmorphism (não screenshot real) |
| Áudio | Minimal synth + SFX sincronizados |

---

## NOTAS PARA O OPERADOR DE VÍDEO

1. **Cada nome de tela, campo, botão e status vem da documentação real do sistema** — não altere terminologia.
2. Os lotes seguem formato real: `LAV-{id}/{ano}-{contador}` e `STERIL-{id}/{ano}-{contador}`.
3. A sequência de duas confirmações na Esterilização (Cena 6) é o diferencial de segurança do produto — dê destaque dramático.
4. O código de 6 dígitos da Distribuição (Cena 7) é um mecanismo real de validação — mostre cada dígito sendo digitado.
5. A timeline da Auditoria (Cena 9) reflete o fluxo real completo: Recebimento → Lavagem → Validação → Preparo → Esterilização → Liberação → Distribuição.
6. Validade semafórica: verde (>30d), amarelo (≤30d), vermelho (≤7d), vermelho escuro (vencido).
7. Se precisar adaptar para formato curto (30s), priorize: Cena 1 + 6 + 8 + 10.
