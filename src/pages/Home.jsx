import { motion } from 'framer-motion'
import Ticker from '../components/Ticker'
import GlitchTerminal from '../components/GlitchTerminal'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Home() {
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

                {/* ── Glitch Terminal (right side, desktop only) ── */}
                <GlitchTerminal />

                {/* ── Divider line between left text and terminal ── */}
                <div className="hero-divider" style={{
                    position: 'absolute',
                    top: 0, bottom: 0,
                    left: '50%',
                    width: '1px',
                    background: 'linear-gradient(to bottom, transparent, rgba(232,37,58,0.18) 20%, rgba(232,37,58,0.18) 80%, transparent)',
                    zIndex: 2,
                    pointerEvents: 'none',
                }} />

                {/* Year label */}
                <div style={{
                    position: 'absolute', left: 14, top: '50%',
                    transform: 'translateY(-50%) rotate(-90deg)',
                    transformOrigin: 'left center',
                    fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted2)',
                    letterSpacing: '.4em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                    zIndex: 3,
                }}>
                    {new Date().getFullYear()} Portfolio - Scroll to Explore
                </div>

                {/* Main content */}
                <div
                    className="hero-content"
                    style={{
                        position: 'relative', zIndex: 2,
                        padding: 'clamp(60px, 8vw, 80px) clamp(20px, 6vw, 48px)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        maxWidth: '50%',
                    }}
                >
                    <motion.div {...fadeUp(0)} style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)',
                        letterSpacing: '.3em', textTransform: 'uppercase', marginBottom: 28,
                    }}>
                        <div style={{ width: 32, height: 1, background: 'var(--red)' }} />
                        AIML & Full Stack Developer
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
                        lineHeight: 1.75, maxWidth: 420, marginBottom: 44, fontWeight: 300,
                    }}>
                        Not just solving problems,{' '}
                        <strong style={{ color: 'var(--text)', fontWeight: 600 }}>engineering robust solutions</strong>
                        {' '}that endure under pressure and evolve with demand.
                    </motion.p>

                    <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <motion.button
                            whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(232,37,58,0.4)' }}
                            onClick={() => window.open('https://docs.google.com/document/d/1Gpdy8IO-JFnxQGQ8tuZ0TVVnl08lFP1IkMhYKfZr2kI/edit?usp=sharing', '_blank')}
                            style={{
                                padding: '14px 32px', background: 'var(--red)', color: '#fff',
                                border: 'none', borderRadius: 2, fontFamily: 'var(--mono)',
                                fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase',
                                cursor: 'pointer', transition: 'background .25s',
                            }}
                        >
                            View Resume
                        </motion.button>
                        <motion.button
                            whileHover={{ borderColor: 'rgba(232,37,58,0.4)', color: 'var(--red)' }}
                            onClick={() => window.open('https://github.com/khushrajrai/', '_blank')}
                            style={{
                                padding: '14px 32px', background: 'transparent', color: 'var(--muted)',
                                border: '1px solid var(--border2)', borderRadius: 2,
                                fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em',
                                textTransform: 'uppercase', cursor: 'pointer', transition: 'all .25s',
                            }}
                        >
                            GitHub →
                        </motion.button>
                    </motion.div>
                </div>


            </section>

            {/* <Ticker /> */}

            {/* ── Context Triptych ── */}
            <section style={{ padding: '30px 48px 15px 48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
                    <span style={{ fontFamily: 'var(--bebas)', fontSize: 64, lineHeight: 1, color: 'rgba(255, 59, 77, 0.18),0.1)', letterSpacing: '.02em' }}>01</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.25em', textTransform: 'uppercase' }}>Right Now</span>
                    <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: 'var(--border2)', border: '1px solid var(--border2)', borderRadius: 6, overflow: 'hidden' }}>
                    {[
                        { num: 'I', label: 'Current Status', q: 'Where am I standing?', a: 'Pursuing B.Tech in Computer Science (Spc. in Health Informatics) at VIT Bhopal, using each semester to build real-world systems.' },
                        { num: 'II', label: 'Trajectory', q: 'Where am I aimed?', a: 'Deep into AI Engineering at scale — not surface-level, but the infrastructure and reasoning that powers intelligent systems.' },
                        { num: 'III', label: 'Active Build', q: "What's in the forge?", a: 'Agentic AI systems and production-ready projects — the next primitive for autonomous software.' },
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

            <style>{`
                @media (max-width: 768px) {
                    .hero-content {
                        max-width: 100% !important;
                        padding-top: 48px !important;
                    }
                    .hero-divider {
                        display: none !important;
                    }
                    .stats-strip {
                        height: auto !important;
                        padding: 24px 20px !important;
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .stats-strip > div:last-child {
                        text-align: left !important;
                    }
                }
            `}</style>
        </div>
    )
}