import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
    const dotX = useMotionValue(-100)
    const dotY = useMotionValue(-100)

    const springX = useSpring(dotX, { stiffness: 120, damping: 18 })
    const springY = useSpring(dotY, { stiffness: 120, damping: 18 })

    const isHovering = useRef(false)

    useEffect(() => {
        const move = (e) => {
            dotX.set(e.clientX)
            dotY.set(e.clientY)
        }

        const addHover = () => {
            document.querySelectorAll('button, a, .hoverable').forEach(el => {
                el.addEventListener('mouseenter', () => { isHovering.current = true })
                el.addEventListener('mouseleave', () => { isHovering.current = false })
            })
        }

        window.addEventListener('mousemove', move)
        addHover()

        return () => window.removeEventListener('mousemove', move)
    }, [])

    return (
        <>
            {/* Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'var(--red)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'screen',
                }}
            />
            {/* Ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(232,37,58,0.45)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                }}
            />
        </>
    )
}