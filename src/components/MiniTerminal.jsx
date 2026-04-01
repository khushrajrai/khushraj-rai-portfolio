import { useEffect, useRef } from 'react'

const LINES = [
    { text: '> initializing khushrajrai.dev...', color: 'red' },
    { text: '> loading model weights', color: 'red' },
    { text: '  [████████████████] 100%', color: 'green' },
    { text: '> accuracy: 97.3%', color: 'green' },
    { text: '> loss: 0.0412  ↓ converging', color: 'green' },
    { text: '> arch: transformer • layers: 12', color: 'white' },
    { text: '> status: ONLINE ✓', color: 'green' },
    { text: '> open_to_work: true', color: 'red' },
    { text: '> based_in: New Delhi, India', color: 'red' },
]

const LINE_INTERVAL = 260

export default function MiniTerminal() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let raf

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()

        const RED = '#E8253A'
        const RED_D = 'rgba(232,37,58,0.5)'
        const WHITE = 'rgba(247,243,248,0.85)'
        const WHITE_D = 'rgba(247,243,248,0.32)'
        const GREEN = '#3ddc84'
        const GREEN_D = 'rgba(61,220,132,0.45)'
        const BORDER = 'rgba(232,37,58,0.2)'

        function live(c) { return c === 'red' ? RED : c === 'green' ? GREEN : WHITE }
        function dimmed(c) { return c === 'red' ? RED_D : c === 'green' ? GREEN_D : WHITE_D }

        let displayed = []
        let lineIndex = 0
        let phase = 'typing'
        let phaseStart = null

        function draw(ts) {
            raf = requestAnimationFrame(draw)
            const W = canvas.width, H = canvas.height
            if (!W || !H) return

            if (phaseStart === null) phaseStart = ts
            const elapsed = ts - phaseStart

            if (phase === 'typing') {
                const target = Math.min(LINES.length, Math.floor(elapsed / LINE_INTERVAL) + 1)
                while (lineIndex < target) { displayed.push(LINES[lineIndex]); lineIndex++ }
                if (lineIndex >= LINES.length) { phase = 'waiting'; phaseStart = ts }
            } else if (phase === 'waiting' && elapsed > 1400) {
                phase = 'typing'; phaseStart = ts
                displayed = []; lineIndex = 0
            }

            // bg
            ctx.fillStyle = '#08050A'
            ctx.fillRect(0, 0, W, H)

            // subtle glow
            const glow = ctx.createRadialGradient(W * 0.8, 0, 0, W * 0.8, 0, W)
            glow.addColorStop(0, 'rgba(232,37,58,0.08)')
            glow.addColorStop(1, 'transparent')
            ctx.fillStyle = glow
            ctx.fillRect(0, 0, W, H)

            // scanlines
            for (let y = 0; y < H; y += 3) {
                ctx.fillStyle = 'rgba(0,0,0,0.1)'
                ctx.fillRect(0, y, W, 1)
            }

            // window chrome
            const PAD = 12, TH = 24
            ctx.strokeStyle = BORDER
            ctx.lineWidth = 0.7
            ctx.strokeRect(PAD, PAD, W - PAD * 2, H - PAD * 2)

            ctx.fillStyle = 'rgba(232,37,58,0.05)'
            ctx.fillRect(PAD, PAD, W - PAD * 2, TH)

            ctx.strokeStyle = BORDER; ctx.lineWidth = 0.4
            ctx.beginPath(); ctx.moveTo(PAD, PAD + TH); ctx.lineTo(W - PAD, PAD + TH); ctx.stroke()

                // traffic lights
                ;['#E8253A', '#f0c040', '#3ddc84'].forEach((c, i) => {
                    ctx.beginPath()
                    ctx.arc(PAD + 10 + i * 13, PAD + TH / 2, 3.5, 0, Math.PI * 2)
                    ctx.fillStyle = c; ctx.globalAlpha = 0.65; ctx.fill(); ctx.globalAlpha = 1
                })

            // title
            ctx.font = '500 8px monospace'; ctx.letterSpacing = '0.15em'
            ctx.fillStyle = 'rgba(232,37,58,0.45)'; ctx.textAlign = 'center'
            ctx.fillText('KHUSHRAJRAI.DEV · TERMINAL', W / 2, PAD + TH / 2 + 3)
            ctx.textAlign = 'left'; ctx.letterSpacing = '0'

            // lines
            const TX = PAD + 10, TY0 = PAD + TH + 14, LH = 17, FSZ = 10
            ctx.font = `${FSZ}px monospace`

            displayed.forEach((line, i) => {
                const isLast = i === displayed.length - 1
                ctx.fillStyle = isLast ? live(line.color) : dimmed(line.color)
                ctx.fillText(line.text, TX, TY0 + i * LH)
            })

            // cursor
            if (Math.floor(ts / 500) % 2 === 0 && displayed.length > 0) {
                const last = displayed[displayed.length - 1]
                const tw = ctx.measureText(last.text).width
                const cy = TY0 + (displayed.length - 1) * LH
                ctx.fillStyle = RED
                ctx.fillRect(TX + tw + 2, cy - FSZ + 1, 5, FSZ)
            }

            // glitch
            if (Math.random() < 0.006) {
                const gy = PAD + TH + Math.random() * (H - PAD * 2 - TH)
                ctx.fillStyle = 'rgba(232,37,58,0.1)'
                ctx.fillRect(PAD + 1, gy, W - PAD * 2 - 2, 1.5)
            }

            // vignette
            const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.75)
            vig.addColorStop(0, 'transparent')
            vig.addColorStop(1, 'rgba(0,0,0,0.4)')
            ctx.fillStyle = vig
            ctx.fillRect(0, 0, W, H)
        }

        raf = requestAnimationFrame(draw)
        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                display: 'block',
                width: '100%',
                height: 220,
                borderRadius: 4,
            }}
        />
    )
}