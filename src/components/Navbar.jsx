import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const links = [
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'connect', label: 'Contact' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        setMenuOpen(false)
        setTimeout(() => {
            const el = document.getElementById(id)
            if (!el) return
            const yOffset = -64
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }, 300)
    }

    return (
        <>
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 48px', height: 64,
                borderBottom: '1px solid var(--border2)',
                backdropFilter: 'blur(20px)',
                background: 'rgba(8,5,10,0.65)',
            }}>

                {/* LOGO */}
                <button onClick={() => scrollToSection('home')}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    <div style={{
                        width: 34, height: 34, border: '1px solid rgba(232,37,58,0.4)',
                        borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M3 10.5L12 3L21 10.5V21H3V10.5Z" stroke="#E8253A" strokeWidth="1.5" />
                            <path d="M9 21V12H15V21" stroke="#E8253A" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <span className="nav-logo-desktop" style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text)' }}>
                        Based in <strong>New Delhi</strong>
                    </span>
                    <span className="nav-logo-mobile" style={{
                        display: 'none',
                        alignItems: 'center', gap: 6,
                        fontFamily: 'var(--mono)', fontSize: 9,
                        color: 'var(--red)',
                    }}>
                        <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }}
                        />
                        Open to Work
                    </span>
                </button>

                {/* DESKTOP LINKS */}
                <div className="nav-desktop-links" style={{ display: 'flex' }}>
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            style={{
                                padding: '8px 20px',
                                background: 'none',
                                border: 'none',
                                color: 'var(--muted)',
                                fontFamily: 'var(--mono)',
                                fontSize: 10,
                                letterSpacing: '.18em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* DESKTOP BADGE */}
                <div className="nav-desktop-badge" style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 16px', border: '1px solid rgba(232,37,58,0.3)',
                    fontFamily: 'var(--mono)', fontSize: 9,
                    color: 'var(--red)',
                }}>
                    <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)' }}
                    />
                    Open to Work
                </div>

                {/* HAMBURGER (mobile only) */}
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: '1px solid var(--border2)',
                        borderRadius: 4,
                        width: 36,
                        height: 36,
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexDirection: 'column',
                        gap: 5,
                        padding: 0,
                    }}
                >
                    <motion.span
                        animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: 'block', width: 16, height: 1.5, background: 'var(--text)', borderRadius: 2 }}
                    />
                    <motion.span
                        animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.15 }}
                        style={{ display: 'block', width: 16, height: 1.5, background: 'var(--text)', borderRadius: 2 }}
                    />
                    <motion.span
                        animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: 'block', width: 16, height: 1.5, background: 'var(--text)', borderRadius: 2 }}
                    />
                </button>

            </nav>

            {/* MOBILE DROPDOWN MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        style={{
                            position: 'fixed',
                            top: 64,
                            left: 0,
                            right: 0,
                            zIndex: 199,
                            background: 'rgba(8,5,10,0.97)',
                            backdropFilter: 'blur(24px)',
                            borderBottom: '1px solid var(--border2)',
                            padding: '16px 24px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                        className="nav-mobile-menu"
                    >
                        {links.map((link, i) => (
                            <motion.button
                                key={link.id}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: '1px solid var(--border2)',
                                    color: 'var(--text)',
                                    fontFamily: 'var(--mono)',
                                    fontSize: 11,
                                    letterSpacing: '.2em',
                                    textTransform: 'uppercase',
                                    padding: '16px 4px',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {link.label}
                                <span style={{ color: 'var(--red)', fontSize: 14 }}>→</span>
                            </motion.button>
                        ))}

                        {/* Badge in mobile menu */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 6,
                            padding: '14px 4px 0',
                            fontFamily: 'var(--mono)', fontSize: 9,
                            color: 'var(--red)',
                        }}>
                            <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                                style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)' }}
                            />
                            Based in New Delhi
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    nav {
                        padding: 0 20px !important;
                    }
                    .nav-desktop-links {
                        display: none !important;
                    }
                    .nav-desktop-badge {
                        display: none !important;
                    }
                    .nav-hamburger {
                        display: flex !important;
                    }
                    .nav-mobile-menu {
                        display: flex !important;
                    }
                    .nav-logo-desktop {
                        display: none !important;
                    }
                    .nav-logo-mobile {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    )
}