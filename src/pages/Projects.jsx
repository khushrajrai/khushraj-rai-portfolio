import { motion } from 'framer-motion'

const projects = [
    {
        num: '001',
        name: 'InvigilAI',
        desc: "AI proctoring that doesn't blink — deep-learning behavioral analysis detects academic dishonesty in real time. Zero tolerance, zero false negatives.",
        chips: [
            { label: 'YOLO', color: 'red' }, { label: 'PANNs', color: 'red' },
            { label: 'MediaPipe', color: 'violet' }, { label: 'FaceNet', color: 'violet' },
            { label: 'Docker', color: 'amber' },
        ],
        link: '#',
    },
    {
        num: '002',
        name: 'AgentMesh',
        desc: 'Orchestration framework for autonomous AI agents at production scale — MCP server integration, real-time decision graphs, zero single points of failure.',
        chips: [
            { label: 'Python', color: 'violet' }, { label: 'FastAPI', color: 'teal' },
            { label: 'gRPC', color: 'teal' }, { label: 'Docker', color: 'amber' },
        ],
        link: '#',
    },
]

const chipColors = {
    red: { background: 'rgba(232,37,58,0.1)', border: '1px solid rgba(232,37,58,0.22)', color: '#FF8A94' },
    violet: { background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#C4B5FD' },
    teal: { background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', color: '#5EEAD4' },
    amber: { background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#FCD34D' },
}

export default function Projects() {
    return (
        <div style={{ paddingTop: 64 }}>
            <section style={{ padding: '80px 0 90px' }}>
                {/* Header */}
                <div style={{ padding: '0 48px 52px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.25em', textTransform: 'uppercase', marginBottom: 12 }}>Selected Works</div>
                        <h1 style={{ fontFamily: 'var(--bebas)', fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 0.9, letterSpacing: '.02em' }}>
                            Things I've<br /><span style={{ color: 'var(--red)' }}>Shipped</span>
                        </h1>
                    </div>
                    <div style={{ fontFamily: 'var(--bebas)', fontSize: 100, lineHeight: 1, color: 'rgba(232,37,58,0.08)', letterSpacing: '.02em', marginBottom: -16 }}>
                        {String(projects.length).padStart(2, '0')}
                    </div>
                </div>

                {/* Project list */}
                <div>
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{ borderTop: '1px solid var(--border2)', position: 'relative', overflow: 'hidden' }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: 'linear-gradient(90deg, rgba(232,37,58,0.07), transparent)', zIndex: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', padding: '28px 48px', position: 'relative', zIndex: 1, cursor: 'none' }}>
                                <div style={{ fontFamily: 'var(--bebas)', fontSize: 36, color: 'var(--muted2)', lineHeight: 1, letterSpacing: '.02em' }}>{p.num}</div>
                                <div>
                                    <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-.015em', marginBottom: 6 }}>{p.name}</div>
                                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.02em', lineHeight: 1.6, maxWidth: 520, marginBottom: 10 }}>{p.desc}</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                                        {p.chips.map(c => (
                                            <span key={c.label} style={{ ...chipColors[c.color], padding: '3px 10px', borderRadius: 2, fontFamily: 'var(--mono)', fontSize: 9 }}>{c.label}</span>
                                        ))}
                                    </div>
                                </div>
                                <motion.span
                                    whileHover={{ x: 5, y: -5, color: 'var(--red)' }}
                                    style={{ fontSize: 22, color: 'var(--muted2)', marginLeft: 24, transition: 'all .3s' }}
                                >
                                    ↗
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                    <div style={{ borderBottom: '1px solid var(--border2)' }} />
                </div>
            </section>
        </div>
    )
}