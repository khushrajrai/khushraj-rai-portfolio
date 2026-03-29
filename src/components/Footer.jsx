import { useNavigate } from 'react-router-dom'

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border2)',
            padding: '24px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
        }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted2)', letterSpacing: '.2em', textTransform: 'uppercase' }}>
                Khushraj Rai © 2026
            </span>
            <span style={{ fontFamily: 'var(--bebas)', fontSize: 22, letterSpacing: '.06em', color: 'rgba(232,37,58,0.3)' }}>
                KR
            </span>
            <div style={{ textAlign: 'right' }}>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)',
                        letterSpacing: '.2em', textTransform: 'uppercase',
                        background: 'none', border: '1px solid var(--border2)',
                        padding: '8px 18px', borderRadius: 2, transition: 'all .25s',
                    }}
                >
                    ↑ Back to Top
                </button>
            </div>
        </footer>
    )
}