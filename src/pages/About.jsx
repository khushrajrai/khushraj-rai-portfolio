import { motion } from 'framer-motion'

const phases = [
    { num: '01', title: 'Build Fast', sub: 'Velocity with intent' },
    { num: '02', title: 'Ship Small', sub: 'Increment, always' },
    { num: '03', title: 'Automate', sub: 'Kill repetition' },
    { num: '04', title: 'Optimize', sub: 'No mercy for waste' },
]

const codeLines = [
    { n: 1, parts: [{ t: 'key', v: 'const' }, { t: 'white', v: ' engineer = {' }] },
    { n: 2, parts: [{ t: 'key', v: '  name' }, { t: 'brk', v: ':' }, { t: 'str', v: ' "Khushraj Rai"' }, { t: 'brk', v: ',' }] },
    { n: 3, parts: [{ t: 'key', v: '  base' }, { t: 'brk', v: ':' }, { t: 'str', v: ' "New Delhi, India"' }, { t: 'brk', v: ',' }] },
    { n: 4, parts: [{ t: 'key', v: '  university' }, { t: 'brk', v: ':' }, { t: 'str', v: ' "VIT Bhopal"' }, { t: 'brk', v: ',' }] },
    { n: 5, parts: [{ t: 'key', v: '  domains' }, { t: 'brk', v: ': [' }] },
    { n: 6, parts: [{ t: 'str', v: '    "AIML Developer"' }, { t: 'brk', v: ', ' }, { t: 'str', v: '"Full-Stack"' }, { t: 'brk', v: ',' }] },
    { n: 7, parts: [{ t: 'str', v: '    "Java"' }, { t: 'brk', v: ', ' }, { t: 'str', v: '"C++ Engineering"' }] },
    { n: 8, parts: [{ t: 'brk', v: '  ],' }] },
    { n: 9, parts: [{ t: 'key', v: '  status' }, { t: 'brk', v: ':' }, { t: 'val', v: ' "open_to_work"' }, { t: 'brk', v: ',' }] },
    { n: 10, parts: [{ t: 'cmt', v: '  // what\'s in the forge:' }] },
    { n: 11, parts: [{ t: 'key', v: '  building' }, { t: 'brk', v: ':' }, { t: 'str', v: ' "Agentic AI"' }, { t: 'brk', v: ',' }] },
    { n: 12, parts: [{ t: 'key', v: '  mission' }, { t: 'brk', v: ':' }, { t: 'str', v: ' "AI Engineer @ scale"' }] },
    { n: 13, parts: [{ t: 'brk', v: '}' }] },
    { n: 14, parts: [] },
    { n: 15, parts: [{ t: 'key', v: 'export default' }, { t: 'white', v: ' engineer' }, { t: 'cursor', v: '' }] },
]

const typeColors = {
    key: '#FF6B8A', str: '#69F0AE', val: '#FFC107',
    cmt: 'rgba(255,255,255,0.25)', brk: 'rgba(255,255,255,0.4)', white: 'rgba(248,215,218,0.9)',
}

export default function About() {
    return (
        <section className="about-section" style={{ padding: '40px 48px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
            {/* Left */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                    <span style={{ fontFamily: 'var(--bebas)', fontSize: 64, lineHeight: 1, color: 'rgba(255,59,77,0.18)', letterSpacing: '.02em' }}>04</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.25em', textTransform: 'uppercase' }}>About</span>
                </div>

                <h1 style={{ fontFamily: 'var(--bebas)', fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 0.95, letterSpacing: '.02em', marginBottom: 20 }}>
                    <span style={{ color: 'rgba(247,243,248,0.2)' }}>The</span><br />
                    <span style={{ color: 'var(--red)' }}>Reason</span><br />
                    <span style={{ color: 'rgba(247,243,248,0.2)' }}>I Build</span>
                </h1>

                <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', lineHeight: 2, marginBottom: 28 }}>
                    I go after the{' '}
                    <strong style={{ color: 'var(--text)', fontWeight: 400 }}>building blocks nobody touches</strong>
                    {' '}— the substrate, the primitives, the 3 AM stack traces that nobody else wants to read.<br /><br />
                    My execution model:{' '}
                    <strong style={{ color: 'var(--text)', fontWeight: 400 }}>build fast with intent</strong>,
                    ship in working increments, automate every repeatable decision, then refine until the system earns its trust.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {phases.map((p, i) => (
                        <motion.div key={p.num}
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            whileHover={{ borderColor: 'rgba(232,37,58,0.3)', background: 'var(--s2)' }}
                            style={{ padding: 14, background: 'var(--s1)', border: '1px solid var(--border2)', borderRadius: 4, transition: 'all .3s', cursor: 'none' }}>
                            <div style={{ fontFamily: 'var(--bebas)', fontSize: 28, color: 'rgba(232,37,58,0.25)', lineHeight: 1, letterSpacing: '.02em', marginBottom: 5 }}>{p.num}</div>
                            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-.01em' }}>{p.title}</div>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '.06em', marginTop: 3 }}>{p.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Code terminal */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                style={{ background: '#060409', borderRadius: 8, border: '1px solid rgba(232,37,58,0.15)', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: '#080408', borderBottom: '1px solid rgba(232,37,58,0.1)' }}>
                    {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                        <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                    ))}
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', flex: 1, textAlign: 'center' }}>khushraj.profile.ts</span>
                </div>
                <div style={{ padding: '18px 22px', fontFamily: 'var(--mono)', fontSize: 11, lineHeight: 2 }}>
                    {codeLines.map(line => (
                        <div key={line.n} style={{ display: 'flex', gap: 14 }}>
                            <span style={{ color: 'rgba(255,255,255,0.15)', userSelect: 'none', minWidth: 14 }}>{line.n}</span>
                            <span>
                                {line.parts.map((part, j) =>
                                    part.t === 'cursor'
                                        ? <motion.span key={j} animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity, ease: 'steps(1)' }}
                                            style={{ display: 'inline-block', width: 8, height: 14, background: 'var(--red)', verticalAlign: 'middle', marginLeft: 2 }} />
                                        : <span key={j} style={{ color: typeColors[part.t] || 'inherit' }}>{part.v}</span>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <style>{`
                @media (max-width: 768px) {
                    .about-section { padding: 24px 28px 16px 28px !important; gap: 28px !important; }
                }
            `}</style>
        </section>
    )
}