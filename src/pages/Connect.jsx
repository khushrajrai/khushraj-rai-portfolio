import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiFileText } from 'react-icons/fi'

const socials = [
    { icon: FiLinkedin, name: 'LinkedIn', handle: '@khushrajrai', link: 'https://www.linkedin.com/in/khushrajrai/' },
    { icon: FiGithub, name: 'GitHub', handle: '@khushrajrai', link: 'https://github.com/khushrajrai/' },
    { icon: FiMail, name: 'Email', handle: 'khushrajrai@gmail.com', link: 'mailto:khushrajrai@gmail.com' },
    { icon: FiFileText, name: 'Resume', handle: 'Download PDF', link: 'https://docs.google.com/document/d/1Gpdy8IO-JFnxQGQ8tuZ0TVVnl08lFP1IkMhYKfZr2kI/edit?usp=sharing' },
]

export default function Connect() {
    return (
        <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', borderTop: '1px solid var(--border2)', position: 'relative', overflow: 'hidden' }}>
            <div className="connect-grid" style={{ width: '100%', padding: '40px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', boxSizing: 'border-box' }}>

                {/* LEFT */}
                <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--red)', letterSpacing: '.3em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 28, height: 1, background: 'var(--red)' }} />
                        Let's Build Something Real
                        <div style={{ width: 28, height: 1, background: 'var(--red)' }} />
                    </div>
                    <div>
                        {[
                            { text: 'Reach', style: { color: 'var(--text)' } },
                            { text: 'Out.', style: { color: 'var(--text)' } },
                            { text: 'Now.', style: { color: 'var(--red)' } },
                        ].map((line, i) => (
                            <motion.span key={line.text}
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                                style={{ display: 'block', fontFamily: 'var(--bebas)', fontSize: 'clamp(60px, 10vw, 130px)', lineHeight: 0.85, letterSpacing: '.01em', ...line.style }}>
                                {line.text}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: 'var(--border2)', border: '1px solid var(--border2)', borderRadius: 6, overflow: 'hidden', width: '100%' }}>
                        {socials.map((s, i) => (
                            <motion.a key={s.name} href={s.link} target="_blank" rel="noreferrer"
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                whileHover={{ background: 'var(--s2)' }}
                                style={{ background: 'var(--s1)', padding: '24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, flex: 1 }}>
                                    <div style={{ width: 40, height: 40, flexShrink: 0, border: '1px solid var(--border2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <s.icon size={18} color="rgba(247,243,248,0.5)" />
                                    </div>
                                    <div style={{ minWidth: 0 }}>
                                        <div style={{ fontSize: 13, fontWeight: 700 }}>{s.name}</div>
                                        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.handle}</div>
                                    </div>
                                </div>
                                <span style={{ color: 'var(--muted2)', flexShrink: 0, marginLeft: 6 }}>↗</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .connect-grid {
                        grid-template-columns: 1fr !important;
                        gap: 28px !important;
                        padding: 32px 16px 16px !important;
                    }
                    .connect-grid > div:last-child > div {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    )
}