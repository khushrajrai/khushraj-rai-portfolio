import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const projects = [
    {
        num: '001',
        name: 'InvigilAI',
        desc: "Unblinking AI proctoring powered by deep learning—real-time behavioral analysis flags anomalies with precision. Built for integrity, engineered to minimize false positives.",
        chips: [
            { label: 'YOLO', color: 'red' },
            { label: 'PANNs', color: 'red' },
            { label: 'MediaPipe', color: 'violet' },
            { label: 'FaceNet', color: 'violet' },
            { label: 'Docker', color: 'amber' },
        ],
        link: 'https://invigil-ai.vercel.app/',
        images: [
            'projects/invigilai/1.png',
            'projects/invigilai/2.png',
            'projects/invigilai/3.png',
            'projects/invigilai/4.png',
            'projects/invigilai/5.png',
        ],
    },
    {
        num: '002',
        name: 'MovieMatch',
        desc: "Intelligent movie recommendation engine that decodes user taste using similarity learning—delivering personalized picks with high relevance and minimal noise.",
        chips: [
            { label: 'Python', color: 'red' },
            { label: 'Pandas', color: 'red' },
            { label: 'Scikit-learn', color: 'violet' },
            { label: 'NLP', color: 'violet' },
            { label: 'Streamlit', color: 'amber' },
        ],
        link: 'https://moviematch-recommender-system.onrender.com/',
        images: [
            'projects/moviematch/1.png',
            'projects/moviematch/2.png',
            'projects/moviematch/3.png',
            'projects/moviematch/4.png',
        ],
    },
    {
        num: '003',
        name: 'Diagnex',
        desc: "AI-powered diagnostic assistant that analyzes symptoms and medical signals to generate intelligent health insights—fast, reliable, and designed for real-world triage.",
        chips: [
            { label: 'Python', color: 'red' },
            { label: 'TensorFlow', color: 'red' },
            { label: 'Flask', color: 'violet' },
            { label: 'ML', color: 'violet' },
            { label: 'Docker', color: 'amber' },
        ],
        link: 'https://diagnex.vercel.app/',
        images: [
            'projects/diagnex/1.png',
            'projects/diagnex/2.png',
            'projects/diagnex/3.png',
            'projects/diagnex/4.png',
            'projects/diagnex/5.png',
            'projects/diagnex/6.png',
        ],
    },
    {
        num: '004',
        name: 'Weatherly',
        desc: "Real-time weather intelligence with clean UI—delivers accurate forecasts, dynamic conditions, and location-aware insights with a fast, responsive experience.",
        chips: [
            { label: 'JavaScript', color: 'red' },
            { label: 'React', color: 'red' },
            { label: 'API', color: 'violet' },
            { label: 'CSS', color: 'violet' },
            { label: 'Vercel', color: 'amber' },
        ],
        link: 'https://weatherly-app-puce.vercel.app/',
        images: [
            'projects/weatherly/1.png',
            'projects/weatherly/2.png',
            'projects/weatherly/3.png',
            'projects/weatherly/4.png',
        ],
    },
    {
        num: '005',
        name: 'Heart Stroke Predictor',
        desc: "Predictive healthcare model leveraging machine learning to assess stroke risk from patient data—focused on early detection, accuracy, and data-driven decision support.",
        chips: [
            { label: 'Python', color: 'red' },
            { label: 'Pandas', color: 'red' },
            { label: 'Scikit-learn', color: 'violet' },
            { label: 'ML', color: 'violet' },
            { label: 'Streamlit', color: 'amber' },
        ],
        link: 'https://heart-stroke-risk-prediction.streamlit.app/',
        images: [
            'projects/heartstroke/1.png',
            'projects/heartstroke/2.png',
            'projects/heartstroke/3.png',
            'projects/heartstroke/4.png',
        ],
    },
]

const chipColors = {
    red: { background: 'rgba(232,37,58,0.1)', border: '1px solid rgba(232,37,58,0.22)', color: '#FF8A94' },
    violet: { background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: '#C4B5FD' },
    teal: { background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', color: '#5EEAD4' },
    amber: { background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#FCD34D' },
}

// Image Slider
function ImageSlider({ images, name }) {
    const [active, setActive] = useState(0)

    const prev = (e) => { e.preventDefault(); setActive(i => (i - 1 + images.length) % images.length) }
    const next = (e) => { e.preventDefault(); setActive(i => (i + 1) % images.length) }

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* Main image */}
            <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: 6,
                overflow: 'hidden',
                border: '1px solid var(--border2)',
                background: 'var(--s1)',
            }}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={active}
                        src={images[active]}
                        alt={`${name} screenshot ${active + 1}`}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        onError={e => {
                            e.target.style.display = 'none'
                            e.target.parentElement.style.background = 'var(--s2)'
                        }}
                    />
                </AnimatePresence>

                {/* Prev / Next arrows */}
                {images.length > 1 && (
                    <>
                        <button onClick={prev} style={arrowBtn('left')}>‹</button>
                        <button onClick={next} style={arrowBtn('right')}>›</button>
                    </>
                )}

                {/* Counter badge */}
                <div style={{
                    position: 'absolute', bottom: 10, right: 12,
                    fontFamily: 'var(--mono)', fontSize: 9,
                    color: 'rgba(247,243,248,0.7)',
                    background: 'rgba(8,5,10,0.65)',
                    padding: '3px 8px', borderRadius: 2,
                    backdropFilter: 'blur(8px)',
                    letterSpacing: '.1em',
                }}>
                    {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </div>
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
                <div style={{ display: 'flex', gap: 8 }}>
                    {images.map((src, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            style={{
                                flex: 1,
                                aspectRatio: '16/10',
                                borderRadius: 4,
                                overflow: 'hidden',
                                border: i === active
                                    ? '1.5px solid var(--red)'
                                    : '1px solid var(--border2)',
                                background: 'var(--s1)',
                                padding: 0,
                                cursor: 'pointer',
                                transition: 'border-color .2s',
                                opacity: i === active ? 1 : 0.45,
                            }}
                        >
                            <img
                                src={src}
                                alt={`thumb ${i + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                onError={e => { e.target.style.display = 'none' }}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

function arrowBtn(side) {
    return {
        position: 'absolute',
        top: '50%',
        [side]: 10,
        transform: 'translateY(-50%)',
        background: 'rgba(8,5,10,0.6)',
        border: '1px solid rgba(232,37,58,0.25)',
        color: 'rgba(247,243,248,0.8)',
        width: 30,
        height: 30,
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        cursor: 'pointer',
        backdropFilter: 'blur(8px)',
        lineHeight: 1,
        padding: 0,
        zIndex: 2,
        transition: 'background .2s, color .2s',
    }
}

// Project Content (left side)
function ProjectContent({ p, reversed }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: reversed ? '0 0 0 8px' : '0 8px 0 0',
            height: '100%',
        }}>
            {/* Number */}
            <div style={{
                fontFamily: 'var(--bebas)',
                fontSize: 13,
                color: 'var(--red)',
                letterSpacing: '.3em',
                marginBottom: 14,
                opacity: 0.7,
            }}>
                {p.num}
            </div>

            {/* Name */}
            <h2 style={{
                fontFamily: 'var(--bebas)',
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 0.95,
                letterSpacing: '.02em',
                color: 'var(--text)',
                marginBottom: 18,
            }}>
                {p.name}
            </h2>

            {/* Desc */}
            <p style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                color: 'var(--muted)',
                lineHeight: 1.8,
                marginBottom: 22,
                maxWidth: 420,
            }}>
                {p.desc}
            </p>

            {/* Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
                {p.chips.map(c => (
                    <span key={c.label} style={{
                        ...chipColors[c.color],
                        padding: '4px 12px',
                        borderRadius: 2,
                        fontFamily: 'var(--mono)',
                        fontSize: 9,
                        letterSpacing: '.08em',
                    }}>
                        {c.label}
                    </span>
                ))}
            </div>

            {/* CTA */}
            {p.link !== '#' && (
                <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        fontFamily: 'var(--mono)',
                        fontSize: 10,
                        letterSpacing: '.18em',
                        textTransform: 'uppercase',
                        color: 'var(--red)',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(232,37,58,0.3)',
                        paddingBottom: 4,
                        width: 'fit-content',
                        transition: 'color .2s',
                    }}
                >
                    View Project ↗
                </motion.a>
            )}
        </div>
    )
}

// Main Export
export default function Projects() {
    return (
        <div style={{ paddingTop: 11 }}>
            <section style={{ padding: '20px 0 60px' }}>

                {/* Header */}
                <div style={{ padding: '0 48px 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }} className="projects-header">
                    <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--red)', letterSpacing: '.25em', textTransform: 'uppercase', marginBottom: 12 }}>
                            Selected Works
                        </div>
                        <h1 style={{ fontFamily: 'var(--bebas)', fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 0.9, letterSpacing: '.02em' }}>
                            Things I've<br /><span style={{ color: 'var(--red)' }}>Shipped</span>
                        </h1>
                    </div>
                    <div style={{ fontFamily: 'var(--bebas)', fontSize: 100, lineHeight: 1, color: 'rgba(255, 59, 77, 0.18)', letterSpacing: '.02em', marginBottom: -16 }}>
                        {/* {String(projects.length).padStart(2, '0')} */}03
                    </div>
                </div>

                {/* Project rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {projects.map((p, i) => {
                        const reversed = i % 2 !== 0  // even = content left, odd = content right

                        return (
                            <motion.div
                                key={p.num}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                style={{
                                    borderTop: '1px solid var(--border2)',
                                    padding: '52px 48px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                className="project-row"
                            >
                                {/* Hover sweep */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    style={{
                                        position: 'absolute', inset: 0,
                                        background: reversed
                                            ? 'linear-gradient(270deg, rgba(232,37,58,0.045), transparent 60%)'
                                            : 'linear-gradient(90deg, rgba(232,37,58,0.045), transparent 60%)',
                                        pointerEvents: 'none',
                                        zIndex: 0,
                                    }}
                                />

                                {/* Two-col grid */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: 48,
                                    alignItems: 'center',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                                    className="project-inner"
                                >
                                    {reversed ? (
                                        <>
                                            <ImageSlider images={p.images} name={p.name} />
                                            <ProjectContent p={p} reversed={true} />
                                        </>
                                    ) : (
                                        <>
                                            <ProjectContent p={p} reversed={false} />
                                            <ImageSlider images={p.images} name={p.name} />
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                    <div style={{ borderBottom: '1px solid var(--border2)' }} />
                </div>
            </section>

            {/* Responsive  */}
            <style>{`
                @media (max-width: 768px) {
                    .projects-header {
                        padding: 0 20px 40px !important;
                    }
                    .project-row {
                        padding: 36px 20px !important;
                    }
                    .project-inner {
                        grid-template-columns: 1fr !important;
                        gap: 28px !important;
                    }
                    /* On mobile always show content first, images second */
                    .project-inner > *:first-child {
                        order: 1;
                    }
                    .project-inner > *:last-child {
                        order: 2;
                    }
                }
            `}</style>
        </div>
    )
}
