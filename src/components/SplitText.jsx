import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

const SplitText = ({ children, className = "" }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      containerRef.current.style.visibility = "visible"

      const h1Element = containerRef.current.querySelector("h1")
      if (!h1Element) return

      const { words } = splitText(h1Element)

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      )
    })
  }, [])

  return (
    <div ref={containerRef} className={`split-text-container ${className}`}>
      {children}
      <style jsx>{`
        .split-text-container {
          visibility: hidden;
        }
        
        .split-word {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  )
}

export default SplitText