import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroKenBurns = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [nextImage, setNextImage] = useState(1)

  // Generate random Ken Burns parameters for each image
  const generateRandomMovement = () => ({
    startScale: 1 + (Math.random() * 0.1), // 1.0 to 1.1
    endScale: 1.05 + (Math.random() * 0.1), // 1.05 to 1.15 (much subtler zoom)
    startX: (Math.random() - 0.5) * 40, // -20 to 20
    endX: (Math.random() - 0.5) * 40, // -20 to 20
    startY: (Math.random() - 0.5) * 30, // -15 to 15
    endY: (Math.random() - 0.5) * 30, // -15 to 15
  })

  const images = [
    "./images/interior-01.jpg",
    "./images/interior-02.jpg", 
    "./images/interior-03.jpg",
    "./images/interior-04.jpg"
  ]

  // Store movement parameters for each image
  const [imageMovements, setImageMovements] = useState(() => 
    images.map(() => generateRandomMovement())
  )

  // Auto-advance to next image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
      setNextImage((prev) => (prev + 1) % images.length)
      
      // Generate new random movement for the image that just finished
      setImageMovements(prev => {
        const newMovements = [...prev]
        newMovements[currentImage] = generateRandomMovement()
        return newMovements
      })
    }, 8000) // 8 seconds per image

    return () => clearInterval(interval)
  }, [images.length, currentImage])

  const currentMovement = imageMovements[currentImage]
  const nextMovement = imageMovements[nextImage]

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Current Ken Burns Image */}
      <motion.div
        key={`current-${currentImage}`}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{
          scale: currentMovement.startScale,
          x: currentMovement.startX,
          y: currentMovement.startY
        }}
        animate={{
          scale: currentMovement.endScale,
          x: currentMovement.endX,
          y: currentMovement.endY
        }}
        transition={{
          duration: 8,
          ease: "easeInOut"
        }}
      />

      {/* Next Image for Seamless Transition */}
      <AnimatePresence>
        <motion.div
          key={`next-${nextImage}`}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[nextImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          initial={{
            opacity: 0,
            scale: nextMovement.startScale,
            x: nextMovement.startX,
            y: nextMovement.startY
          }}
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 0, 1], // Fade in only in last second
            scale: nextMovement.startScale,
            x: nextMovement.startX,
            y: nextMovement.startY
          }}
          transition={{
            opacity: { duration: 8, ease: "linear" },
            scale: { duration: 0 },
            x: { duration: 0 },
            y: { duration: 0 }
          }}
        />
      </AnimatePresence>

      {/* Overlay for text readability */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content overlay with subtle movement */}
      <motion.div 
        className="relative z-10 h-full"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {images.map((_, index) => (
            <div key={index} className="relative">
              <button
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentImage 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                onClick={() => setCurrentImage(index)}
              />
              {index === currentImage && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 2, opacity: 1 }}
                  exit={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>


      {/* Image transition progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20 z-20">
        <motion.div
          className="h-full bg-white bg-opacity-80"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          key={currentImage}
        />
      </div>
    </div>
  )
}

export default HeroKenBurns
