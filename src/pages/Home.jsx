import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Ticker from '../components/Ticker'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Home() {
    const navigate = useNavigate()

    return (
        <div style={{ paddingTop: 64 }}>
            {/* ── HERO ── */}
            <section style={{
                minHeight: 'calc(100vh - 64px)',
                display: 'grid',
                gridTemplateRows: '1fr auto',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Background geometry */}
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', pointerEvents: 'none', zIndex: 1 }}>
                    <svg viewBox="0 0 600 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
                        <defs>
                            <radialGradient id="rg" cx="40%" cy="50%" r="60%">
                                <stop offset="0%" stopColor="#E8253A" stopOpacity="0.12" />
                                <stop offset="100%" stopColor="#E8253A" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <rect width="600" height="900" fill="url(#rg)" />
                        <line x1="100" y1="0" x2="500" y2="900" stroke="rgba(232,37,58,0.06)" strokeWidth="1" />
                        <line x1="200" y1="0" x2="600" y2="900" stroke="rgba(232,37,58,0.04)" strokeWidth="1" />
                        <circle cx="300" cy="450" r="200" stroke="rgba(232,37,58,0.06)" strokeWidth="1" />
                        <circle cx="300" cy="450" r="300" stroke="rgba(232,37,58,0.04)" strokeWidth="1" />
                        {[[200, 200], [260, 200], [320, 200], [200, 260], [260, 260], [320, 260], [380, 380], [440, 380], [380, 440], [440, 440]].map(([cx, cy], i) => (
                            <circle key={i} cx={cx} cy={cy} r="1.5" fill="rgba(232,37,58,0.2)" />
                        ))}
                    </svg>
                </div>

                {/* Year label */}
                <div style={{
                    position: 'absolute', left: 14, top: '50%',
                    transform: 'translateY(-50%) rotate(-90deg)',
                    transformOrigin: 'left center',
                    fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted2)',
                    letterSpacing: '.4em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                    zIndex: 2,
                }}>
                    2026 — New Delhi, India — Available
                </div>

                {/* Main content */}
                <div style={{ position: 'relative', zIndex: 2, padding: '80px 48px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <motion.div {...fadeUp(0)} style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)',
                        letterSpacing: '.3em', textTransform: 'uppercase', marginBottom: 28,
                    }}>
                        <div style={{ width: 40, height: 1, background: 'var(--red)' }} />
                        Systems Engineer & AI Architect
                    </motion.div>

                    <div style={{ marginBottom: 36 }}>
                        <motion.span {...fadeUp(0.1)} style={{
                            display: 'block', fontFamily: 'var(--bebas)',
                            fontSize: 'clamp(80px, 11vw, 148px)', lineHeight: 0.9,
                            letterSpacing: '.02em', color: 'var(--text)',
                        }}>
                            Khushraj
                        </motion.span>
                        <motion.span {...fadeUp(0.2)} style={{
                            display: 'block', fontFamily: 'var(--bebas)',
                            fontSize: 'clamp(80px, 11vw, 148px)', lineHeight: 0.9,
                            letterSpacing: '.02em', position: 'relative',
                        }}>
                            <span style={{ WebkitTextStroke: '2px var(--red)', color: 'transparent' }}>Rai</span>
                            <motion.span
                                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                                transition={{ duration: 1.4, delay: 0.6, ease: [0.77, 0, 0.18, 1] }}
                                style={{ position: 'absolute', left: 0, top: 0, color: 'var(--red)', fontFamily: 'var(--bebas)' }}
                            >
                                Rai
                            </motion.span>
                        </motion.span>
                    </div>

                    <motion.p {...fadeUp(0.35)} style={{
                        fontFamily: 'var(--grot)', fontSize: 15, color: 'var(--muted)',
                        lineHeight: 1.75, maxWidth: 440, marginBottom: 44, fontWeight: 300,
                    }}>
                        Not just writing code —{' '}
                        <strong style={{ color: 'var(--text)', fontWeight: 600 }}>engineering the substrate</strong>
                        {' '}that holds systems together when everything else breaks.
                    </motion.p>

                    <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <motion.button
                            whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(232,37,58,0.4)' }}
                            onClick={() => window.open('#', '_blank')}
                            style={{
                                padding: '14px 32px', background: 'var(--red)', color: '#fff',
                                border: 'none', borderRadius: 2, fontFamily: 'var(--mono)',
                                fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase',
                                transition: 'background .25s',
                            }}
                        >
                            View Resume
                        </motion.button>
                        <motion.button
                            whileHover={{ borderColor: 'rgba(232,37,58,0.4)', color: 'var(--red)' }}
                            onClick={() => window.open('https://github.com', '_blank')}
                            style={{
                                padding: '14px 32px', background: 'transparent', color: 'var(--muted)',
                                border: '1px solid var(--border2)', borderRadius: 2,
                                fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em',
                                textTransform: 'uppercase', transition: 'all .25s',
                            }}
                        >
                            GitHub →
                        </motion.button>
                    </motion.div>
                </div>

                {/* Stats Strip */}
                <div style={{
                    borderTop: '1px solid var(--border2)',
                    display: 'grid', gridTemplateColumns: 'auto 1fr auto',
                    alignItems: 'center', padding: '0 48px', height: 100,
                    position: 'relative', zIndex: 2,
                }}>
                    {/* Profile */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                        <motion.div
                            animate={{ boxShadow: ['0 0 0 1px rgba(232,37,58,0.2)', '0 0 20px rgba(232,37,58,0.25)', '0 0 0 1px rgba(232,37,58,0.2)'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            style={{
                                width: 64, height: 64, borderRadius: 4,
                                border: '2px solid rgba(232,37,58,0.3)',
                                background: 'var(--s2)', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', flexShrink: 0, overflow: 'hidden',
                            }}
                        >
                            {/* Replace this span with <img src="your-photo.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
                            <span style={{ fontFamily: 'var(--bebas)', fontSize: 26, color: 'var(--red)' }}>KR</span>
                        </motion.div>
                        <div>
                            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-.01em' }}>Khushraj Rai</div>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red3)', letterSpacing: '.06em', marginTop: 3 }}>AI + Systems Engineer</div>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '.08em', marginTop: 4, display: 'flex', alignItems: 'center', gap: 5 }}>
                                <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
                                    style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--red)' }}
                                />
                                New Delhi, India
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 0, justifyContent: 'center' }}>
                        {[['6+', 'Languages'], ['12+', 'Projects'], ['4', 'Domains']].map(([num, label]) => (
                            <div key={label} style={{ padding: '0 36px', borderRight: '1px solid var(--border2)', textAlign: 'center' }}>
                                <div style={{ fontFamily: 'var(--bebas)', fontSize: 36, lineHeight: 1, letterSpacing: '.02em' }}>
                                    <span style={{ color: 'var(--text)' }}>{num.replace('+', '')}</span>
                                    <span style={{ color: 'var(--red)' }}>{num.includes('+') ? '+' : ''}</span>
                                </div>
                                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '.2em', textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Location */}
                    <div style={{ textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.18em', textTransform: 'uppercase', lineHeight: 1.8 }}>
                        B.Tech CSE<br />VIT Bhopal University
                    </div>
                </div>
            </section>

            <Ticker />

            {/* ── Context Triptych ── */}
            <section style={{ padding: '90px 48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
                    <span style={{ fontFamily: 'var(--bebas)', fontSize: 64, lineHeight: 1, color: 'rgba(232,37,58,0.1)', letterSpacing: '.02em' }}>01</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.25em', textTransform: 'uppercase' }}>Right Now</span>
                    <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 1, background: 'var(--border2)', border: '1px solid var(--border2)', borderRadius: 6, overflow: 'hidden' }}>
                    {[
                        { num: 'I', label: 'Current Status', q: 'Where am I standing?', a: 'Pursuing B.Tech in Computer Science at VIT Bhopal — using university as a launchpad, not a ceiling. Every semester is a sprint toward real systems.' },
                        { num: 'II', label: 'Trajectory', q: 'Where am I aimed?', a: 'Deep into AI Engineering at scale — not surface-level, but the infrastructure and reasoning that powers intelligent systems.' },
                        { num: 'III', label: 'Active Build', q: "What's in the forge?", a: 'Agentic AI systems and production-ready MCP servers — the next primitive for autonomous software.' },
                    ].map((card) => (
                        <motion.div
                            key={card.num}
                            whileHover={{ background: 'var(--s2)' }}
                            style={{ background: 'var(--s1)', padding: 36, position: 'relative', overflow: 'hidden', cursor: 'none' }}
                        >
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--red), var(--red2))', transformOrigin: 'left' }}
                            />
                            <div style={{ fontFamily: 'var(--bebas)', fontSize: 72, lineHeight: 1, color: 'rgba(232,37,58,0.07)', position: 'absolute', right: 24, top: 20, letterSpacing: '.02em' }}>{card.num}</div>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--red)', letterSpacing: '.25em', textTransform: 'uppercase', marginBottom: 14 }}>{card.label}</div>
                            <div style={{ fontSize: card.num === 'I' ? 26 : 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: 20 }}>{card.q}</div>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', lineHeight: 1.85 }}>{card.a}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}