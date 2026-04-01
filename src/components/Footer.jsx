import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border2)',
            padding: '14px 36px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
        }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '.2em', textTransform: 'uppercase' }}>
                Khushraj Rai © {new Date().getFullYear()}
            </span>
            <div style={{ textAlign: 'center' }}>
                <img
                    src="/favicon.png"
                    alt="Logo"
                    style={{ width: 40, height: 40, padding: '3px 0px 0px 12px' }}
                />
            </div>
            <div style={{ textAlign: 'right' }}>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)',
                        letterSpacing: '.2em', textTransform: 'uppercase',
                        background: 'none', border: '1px solid var(--border2)',
                        padding: '4px 18px', borderRadius: 2, transition: 'all .25s',
                    }}
                >
                    ↑ Back to Top
                </button>
            </div>
        </footer>
    )
}