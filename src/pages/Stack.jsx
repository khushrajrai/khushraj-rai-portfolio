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
        <div style={{ paddingTop: 42 }}>
            <section style={{ padding: '15px 48px 15px' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
                    <span style={{ fontFamily: 'var(--bebas)', fontSize: 64, lineHeight: 1, color: 'rgba(255, 59, 77, 0.18)', letterSpacing: '.02em' }}>02</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.25em', textTransform: 'uppercase' }}>Tech Stack</span>
                    <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'start' }}>
                    {/* Sidebar */}
                    <div>
                        <h1 style={{ fontFamily: 'var(--bebas)', fontSize: 'clamp(52px, 6vw, 80px)', lineHeight: 0.9, letterSpacing: '.02em', marginBottom: 24 }}>
                            What<br />I<br />
                            <span style={{ WebkitTextStroke: '2px var(--red)', color: 'transparent' }}>Wield</span>
                        </h1>
                        <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 32 }}>
                            A carefully assembled arsenal, every tool chosen for a reason, not for the resume.
                        </p>
                        {/* <div style={{ padding: 20, border: '1px solid var(--border)', borderRadius: 4, background: 'var(--s1)' }}>
                            <div style={{ fontFamily: 'var(--bebas)', fontSize: 52, color: 'var(--red)', lineHeight: 1, letterSpacing: '.02em' }}>
                                28+<span style={{ color: 'var(--text)', fontSize: 28 }}>+</span>
                            </div>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '.2em', textTransform: 'uppercase', marginTop: 4 }}>Tools mastered</div>
                        </div> */}
                        <div style={{
                            padding: 24,
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            background: 'var(--s1)'
                        }}>
                            <div style={{
                                fontSize: 18,
                                lineHeight: 1.6,
                                fontWeight: 600,
                                letterSpacing: '-.01em'
                            }}>
                                "Tools help you build.
                                <span style={{ color: 'var(--red)' }}>Decisions make it work.</span>”
                            </div>

                            {/* <div style={{
                                marginTop: 12,
                                fontFamily: 'var(--mono)',
                                fontSize: 9,
                                color: 'var(--muted)',
                                letterSpacing: '.2em',
                                textTransform: 'uppercase'
                            }}>

                            </div> */}
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
                                style={{ background: 'var(--s1)', display: 'grid', gridTemplateColumns: '200px 1fr', alignItems: 'center' }}
                            >
                                <div style={{ padding: '18px 24px', borderRight: '1px solid var(--border2)' }}>
                                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--red)', letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 4 }}>{row.cat}</div>
                                    <div style={{ fontFamily: 'var(--bebas)', fontSize: 28, color: 'rgba(232,37,58,0.25)', lineHeight: 1, letterSpacing: '.02em' }}>{row.count}</div>
                                </div>
                                <div style={{ padding: '14px 20px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {row.chips.map(chip => (
                                        <motion.span
                                            key={chip}
                                            whileHover={{ y: -2 }}
                                            style={{ ...chipStyles[row.color], padding: '5px 13px', borderRadius: 2, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.04em', transition: 'all .2s' }}
                                        >
                                            {chip}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div style={{ padding: '38px 0px' }}>
                    <Ticker />
                </div>
                <style>{`
/* 📱 MOBILE ONLY FIX */
@media (max-width: 768px) {

  /* Stack main layout */
  section > div > div {
    grid-template-columns: 1fr !important;
  }

  /* Fix skills row layout */
  section div[style*="grid-template-columns: 200px 1fr"] {
    grid-template-columns: 1fr !important;
  }

  /* Remove side border and adjust spacing */
  section div[style*="borderRight"] {
    border-right: none !important;
    border-bottom: 1px solid var(--border2) !important;
  }

  /* Reduce padding for mobile */
  section {
    padding: 60px 20px !important;
  }

  /* Fix big heading overflow */
  h1 {
    font-size: clamp(36px, 10vw, 52px) !important;
  }

}
`}</style>
            </section>
        </div>
    )
}