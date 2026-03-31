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
            <span >
                <img src="public/favicon.png" style={{ padding: '3px 1px 0px 1px', width: "30px", height: "30px", alignItems: 'center', justifyContent: 'center' }}
                    alt="logo" />
            </span>
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