export default function Ticker() {
    const items = ['AIML Developer', 'Full Stack Developer', 'Python', 'Java', 'C++', 'Agentic AI']

    return (
        <div style={{
            padding: '20px 0', background: 'var(--red)',
            overflow: 'hidden', position: 'relative',
        }}>
            <div style={{
                display: 'flex', gap: 0,
                animation: 'ticker 14s linear infinite',
                whiteSpace: 'nowrap',
            }}>
                {[...items, ...items].map((item, i) => (
                    <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
                        <span style={{
                            fontFamily: 'var(--bebas)', fontSize: 22, letterSpacing: '.08em',
                            color: 'rgba(255,255,255,0.9)', padding: '0 32px',
                        }}>
                            {item}
                        </span>
                        <span style={{
                            fontFamily: 'var(--mono)', fontSize: 12,
                            color: 'rgba(255,255,255,0.4)', flexShrink: 0,
                        }}>✦</span>
                    </span>
                ))}
            </div>

            <style>{`
        @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        `}</style>
        </div>
    )
}