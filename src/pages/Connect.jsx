import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiFileText } from 'react-icons/fi'

const socials = [
    { icon: FiLinkedin, name: 'LinkedIn', handle: '/in/khushrajrai', link: 'https://linkedin.com' },
    { icon: FiGithub, name: 'GitHub', handle: '@khushrajrai', link: 'https://github.com' },
    { icon: FiMail, name: 'Email', handle: 'hi@khushrajrai.dev', link: 'mailto:hi@khushrajrai.dev' },
    { icon: FiFileText, name: 'Resume', handle: 'Download PDF', link: '#' },
]

export default function Connect() {
    return (
        <div style={{ paddingTop: 64 }}>
            <section style={{
                minHeight: '90vh', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', position: 'relative', overflow: 'hidden',
                borderTop: '1px solid var(--border2)', padding: 0,
            }}>
                {/* Background orbs */}
                {[
                    { size: 600, top: '50%', left: '30%', color: 'rgba(232,37,58,0.12)', delay: 0 },
                    { size: 400, top: '20%', right: '5%', left: 'auto', color: 'rgba(124,58,237,0.08)', delay: -3 },
                ].map((orb, i) => (
                    <motion.div
                        key={i}
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 6, repeat: Infinity, delay: orb.delay }}
                        style={{
                            position: 'absolute', width: orb.size, height: orb.size,
                            borderRadius: '50%', top: orb.top, left: orb.left, right: orb.right,
                            transform: 'translate(-50%, -50%)',
                            background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
                            pointerEvents: 'none',
                        }}
                    />
                ))}

                <div style={{ position: 'relative', zIndex: 2, padding: '80px 48px' }}>
                    {/* Overline */}
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--red)', letterSpacing: '.3em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 32, height: 1, background: 'var(--red)' }} />
                        Let's Build Something Real
                        <div style={{ width: 32, height: 1, background: 'var(--red)' }} />
                    </div>

                    {/* Big title */}
                    <div style={{ marginBottom: 52 }}>
                        {[
                            { text: 'Reach', style: { color: 'rgba(247,243,248,0.08)', WebkitTextStroke: '1px rgba(247,243,248,0.1)' } },
                            { text: 'Out.', style: { color: 'var(--text)' } },
                            { text: 'Now.', style: { color: 'var(--red)' } },
                        ].map((line, i) => (
                            <motion.span
                                key={line.text}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                style={{
                                    display: 'block', fontFamily: 'var(--bebas)',
                                    fontSize: 'clamp(72px, 12vw, 160px)', lineHeight: 0.85,
                                    letterSpacing: '.01em', ...line.style,
                                }}
                            >
                                {line.text}
                            </motion.span>
                        ))}
                    </div>

                    {/* Socials grid */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
                        background: 'var(--border2)', border: '1px solid var(--border2)',
                        borderRadius: 6, overflow: 'hidden', maxWidth: 900, marginBottom: 48,
                    }}>
                        {socials.map((s, i) => (
                            <motion.a
                                key={s.name}
                                href={s.link}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                whileHover={{ background: 'var(--s2)' }}
                                style={{
                                    background: 'var(--s1)', padding: '28px 32px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    cursor: 'none', position: 'relative', overflow: 'hidden', textDecoration: 'none',
                                }}
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: 'rgba(232,37,58,0.07)', zIndex: 0 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: 40, height: 40, border: '1px solid var(--border2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <s.icon size={18} color="rgba(247,243,248,0.5)" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-.01em' }}>{s.name}</div>
                                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>{s.handle}</div>
                                    </div>
                                </div>
                                <motion.span
                                    whileHover={{ x: 4, y: -4, color: 'var(--red)' }}
                                    style={{ fontSize: 18, color: 'var(--muted2)', position: 'relative', zIndex: 1 }}
                                >↗</motion.span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Quote */}
                    <div style={{ borderTop: '1px solid var(--border2)', paddingTop: 60, display: 'flex', alignItems: 'center', gap: 60 }}>
                        <div style={{ fontFamily: 'var(--bebas)', fontSize: 120, lineHeight: 0.8, color: 'rgba(232,37,58,0.15)', flexShrink: 0 }}>"</div>
                        <div>
                            <p style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.55, letterSpacing: '-.02em', marginBottom: 16, maxWidth: 700 }}>
                                Code is the{' '}
                                <span style={{ color: 'var(--red2)' }}>architecture of logic</span>,
                                built to outlast the{' '}
                                <span style={{ color: 'var(--red2)' }}>entropy of scale</span>.
                            </p>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.2em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{ height: 1, width: 40, background: 'rgba(232,37,58,0.4)' }} />
                                Khushraj Rai / 2026
                                <div style={{ height: 1, width: 40, background: 'rgba(232,37,58,0.4)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}