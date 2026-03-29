import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
    { to: '/projects', label: 'Projects' },
    { to: '/stack', label: 'Stack' },
    { to: '/about', label: 'About' },
    { to: '/connect', label: 'Contact' },
]

export default function Navbar() {
    const { pathname } = useLocation()

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 48px', height: 64,
            borderBottom: '1px solid var(--border2)',
            backdropFilter: 'blur(20px)',
            background: 'rgba(8,5,10,0.65)',
        }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                    width: 34, height: 34, border: '1px solid rgba(232,37,58,0.4)',
                    borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <svg viewBox="0 0 34 34" width="34" height="34" fill="none">
                        <path d="M8 26L17 8L26 26" stroke="#E8253A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 20H23" stroke="#E8253A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
                    <strong style={{ color: 'var(--text)' }}>KR</strong> / Portfolio
                </span>
            </Link>

            {/* Links */}
            <div style={{ display: 'flex', gap: 0 }}>
                {links.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        style={{
                            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em',
                            textTransform: 'uppercase', padding: '8px 20px',
                            color: pathname === link.to ? 'var(--red)' : 'var(--muted)',
                            borderBottom: pathname === link.to ? '1px solid var(--red)' : '1px solid transparent',
                            transition: 'color .2s',
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Badge */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 16px', border: '1px solid rgba(232,37,58,0.3)',
                borderRadius: 2, fontFamily: 'var(--mono)', fontSize: 9,
                color: 'var(--red)', letterSpacing: '.15em', textTransform: 'uppercase',
            }}>
                <motion.div
                    animate={{ scale: [1, 1.5, 0.9, 1], opacity: [1, 0.8, 0.6, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--red)' }}
                />
                Open to Work
            </div>
        </nav>
    )
}