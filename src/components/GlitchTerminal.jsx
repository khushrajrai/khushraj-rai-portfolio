import { useEffect, useRef } from 'react'

const LINES = [
    { text: '> initializing khushrajrai.dev...', color: 'red' },
    { text: '> loading model weights', color: 'red' },
    { text: '  [████████████████] 100%', color: 'green' },
    { text: '> accuracy: 97.3%', color: 'green' },
    { text: '> loss: 0.0412  ↓ converging', color: 'green' },
    { text: '> arch: transformer • layers: 12', color: 'white' },
    { text: '> params: 1.2B  •  ctx: 8192', color: 'white' },
    { text: '> ai_stack: Python PyTorch TensorFlow FastAPI OpenCV', color: 'white' },
    { text: '> deploying to production...', color: 'red' },
    { text: '> status: ONLINE ✓', color: 'green' },
    { text: '> open_to_work: true', color: 'red' },
    { text: '> based_in: New Delhi, India', color: 'red' },
]

const LINE_INTERVAL = 400  // ms per line -  12 × 290 = 3.5 s reveal
const PAUSE_AFTER = 800  // ms pause at full display before restart

export default function GlitchTerminal() {
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
        window.addEventListener('resize', resize)

        const RED = '#E8253A'
        const WHITE = 'rgba(247,243,248,0.92)'
        const GREEN = '#3ddc84'

        function colorFor(c) {
            if (c === 'red') return RED
            if (c === 'green') return GREEN
            return WHITE
        }

        let displayed = []
        let lineIndex = 0
        let phase = 'typing'   // 'typing' | 'waiting'
        let phaseStart = null

        function draw(timestamp) {
            raf = requestAnimationFrame(draw)

            const W = canvas.width
            const H = canvas.height
            if (!W || !H) return

            // initialise phase clock 
            if (phaseStart === null) phaseStart = timestamp
            const elapsed = timestamp - phaseStart

            //  state machine 
            if (phase === 'typing') {
                const target = Math.min(LINES.length, Math.floor(elapsed / LINE_INTERVAL) + 1)
                while (lineIndex < target) {
                    displayed.push(LINES[lineIndex])
                    lineIndex++
                }
                if (lineIndex >= LINES.length) {
                    phase = 'waiting'
                    phaseStart = timestamp
                }
            } else if (phase === 'waiting') {
                if (elapsed > PAUSE_AFTER) {
                    phase = 'typing'
                    phaseStart = timestamp
                    displayed = []
                    lineIndex = 0
                }
            }

            //  render 
            ctx.fillStyle = '#08050A'
            ctx.fillRect(0, 0, W, H)

            const PAD = 24
            const TOP = 44
            const LINE_H = 20
            const FONT_SIZE = 12

            ctx.font = `${FONT_SIZE}px monospace`

            displayed.forEach((line, i) => {
                ctx.fillStyle = colorFor(line.color)
                ctx.fillText(line.text, PAD + 10, TOP + i * LINE_H)
            })

            // cursor blinking on last line
            if (Math.floor(timestamp / 200) % 2 === 0 && displayed.length > 0) {
                const last = displayed[displayed.length - 1]
                const tw = ctx.measureText(last.text).width
                const cy = TOP + (displayed.length - 1) * LINE_H
                ctx.fillStyle = RED
                ctx.fillRect(PAD + 10 + tw + 2, cy - FONT_SIZE + 1, 6, FONT_SIZE)
            }
        }

        raf = requestAnimationFrame(draw)

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <>
            <canvas
                ref={canvasRef}
                className="glitch-terminal"
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '3%',
                    transform: 'translateY(-50%)',
                    width: '42%',
                    height: '70%',
                    zIndex: 1,
                }}
            />
            <style>{`
                @media (max-width: 768px) {
                    .glitch-terminal { display: none !important; }
                }
            `}</style>
        </>
    )
}