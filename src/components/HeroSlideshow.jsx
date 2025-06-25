import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSlideshow = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    "/images/interior-01.jpg",
    "/images/interior-02.jpg", 
    "/images/interior-03.jpg",
    "/images/interior-04.jpg"
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 8, ease: "linear" }
          }}
        />
      </AnimatePresence>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content overlay */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Slideshow indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white w-8' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSlideshow