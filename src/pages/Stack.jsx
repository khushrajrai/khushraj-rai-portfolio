import { motion } from 'framer-motion'
import Ticker from '../components/Ticker'

const skills = [
    { cat: 'Frontend + Lang', count: '09', chips: ['Java', 'C++', 'Python', 'JavaScript', 'React', 'HTML5', 'CSS3', 'ReactFlow'], color: 'red' },
    { cat: 'AI / ML', count: '04', chips: ['TensorFlow', 'PyTorch', 'OpenCV', 'FastAPI'], color: 'violet' },
    { cat: 'Backend + DB', count: '04', chips: ['Node.js', 'Express', 'MySQL', 'MongoDB'], color: 'teal' },
    { cat: 'DevOps', count: '06', chips: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Vite', 'NPM'], color: 'amber' },
    { cat: 'Deploy + Design', count: '05', chips: ['Vercel', 'Render', 'Figma', 'Canva'], color: 'teal' },
]

const chipStyles = {
    red: { background: 'rgba(232,37,58,0.1)', border: '1px solid rgba(232,37,58,0.22)', color: '#FF8A94' },
    violet: { background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#C4B5FD' },
    teal: { background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', color: '#5EEAD4' },
    amber: { background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#FCD34D' },
    neutral: { background: 'rgba(247,243,248,0.04)', border: '1px solid rgba(247,243,248,0.08)', color: 'rgba(247,243,248,0.5)' },
}

export default function Stack() {
    return (
        <section className="stack-section" style={{ padding: '40px 48px 30px' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
                <span style={{ fontFamily: 'var(--bebas)', fontSize: 64, lineHeight: 1, color: 'rgba(255,59,77,0.18)', letterSpacing: '.02em' }}>02</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.25em', textTransform: 'uppercase' }}>Tech Stack</span>
                <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>

            <div className="stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'start' }}>
                {/* Sidebar */}
                <div>
                    <h1 style={{ fontFamily: 'var(--bebas)', fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 0.9, letterSpacing: '.02em', marginBottom: 20 }}>
                        What<br />I<br />
                        <span style={{ WebkitTextStroke: '2px var(--red)', color: 'transparent' }}>Wield</span>
                    </h1>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 24 }}>
                        A carefully assembled arsenal, every tool chosen for a reason, not for the resume.
                    </p>
                    <div style={{ padding: 20, border: '1px solid var(--border)', borderRadius: 4, background: 'var(--s1)' }}>
                        <div style={{ fontSize: 17, lineHeight: 1.6, fontWeight: 600, letterSpacing: '-.01em' }}>
                            "Tools help you build.
                            <span style={{ color: 'var(--red)' }}> Decisions make it work.</span>"
                        </div>
                    </div>
                </div>

                {/* Skills board */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border2)', border: '1px solid var(--border2)', borderRadius: 6, overflow: 'hidden' }}>
                    {skills.map((row, i) => (
                        <motion.div
                            key={row.cat}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ background: 'var(--s2)' }}
                            className="skill-row"
                            style={{ background: 'var(--s1)', display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'center' }}
                        >
                            <div className="skill-label" style={{ padding: '16px 20px', borderRight: '1px solid var(--border2)' }}>
                                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--red)', letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 4 }}>{row.cat}</div>
                                <div style={{ fontFamily: 'var(--bebas)', fontSize: 26, color: 'rgba(232,37,58,0.25)', lineHeight: 1, letterSpacing: '.02em' }}>{row.count}</div>
                            </div>
                            <div style={{ padding: '12px 16px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                {row.chips.map(chip => (
                                    <motion.span
                                        key={chip}
                                        whileHover={{ y: -2 }}
                                        style={{ ...chipStyles[row.color], padding: '4px 11px', borderRadius: 2, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.04em', transition: 'all .2s' }}
                                    >
                                        {chip}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div style={{ padding: '31px 0 26px 0' }}>
                <Ticker />
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .stack-section { padding: 24px 23px 16px !important; }
                    .stack-grid { gap: 24px !important; }
                    .skill-row { grid-template-columns: 1fr !important; }
                    .skill-label { border-right: none !important; border-bottom: 1px solid var(--border2) !important; }
                }
            `}</style>
        </section>
    )
}