import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HeroMosaic = ({ children }) => {
  const [focusedImage, setFocusedImage] = useState(0)

  const images = [
    "/images/interior-01.jpg",
    "/images/interior-02.jpg", 
    "/images/interior-03.jpg",
    "/images/interior-04.jpg"
  ]

  // Auto-cycle focused image
  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedImage((prev) => (prev + 1) % images.length)
    }, 4000) // Change focus every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Mosaic Grid */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            animate={{
              scale: focusedImage === index ? 1.1 : 1,
              zIndex: focusedImage === index ? 10 : 1,
              filter: focusedImage === index ? 'brightness(1.1)' : 'brightness(0.8)'
            }}
            whileHover={{
              scale: 1.05,
              filter: 'brightness(1)',
              zIndex: 5
            }}
            transition={{
              duration: 1,
              ease: "easeInOut"
            }}
            onHoverStart={() => setFocusedImage(index)}
          >
            {/* Individual image overlay */}
            <motion.div
              className="absolute inset-0 bg-black"
              animate={{
                opacity: focusedImage === index ? 0.3 : 0.6
              }}
              transition={{ duration: 1 }}
            />

            {/* Image number indicator */}
            <motion.div
              className="absolute top-4 left-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              animate={{
                scale: focusedImage === index ? 1.2 : 1,
                backgroundColor: focusedImage === index ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white text-sm font-bold">{index + 1}</span>
            </motion.div>

            {/* Focus indicator */}
            {focusedImage === index && (
              <motion.div
                className="absolute inset-0 border-4 border-white"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}

            {/* Animated corner accents */}
            <motion.div
              className="absolute top-0 left-0 w-16 h-16"
              animate={{
                opacity: focusedImage === index ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-2 left-2 w-8 h-1 bg-brand-cyan"></div>
              <div className="absolute top-2 left-2 w-1 h-8 bg-brand-cyan"></div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-0 w-16 h-16"
              animate={{
                opacity: focusedImage === index ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute bottom-2 right-2 w-8 h-1 bg-brand-orange"></div>
              <div className="absolute bottom-2 right-2 w-1 h-8 bg-brand-orange"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-white transform -translate-x-1/2"></div>
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2"></div>
      </motion.div>

      {/* Central content overlay */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-20"
        animate={{
          scale: [1, 1.02, 1],
          y: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="bg-black bg-opacity-60 rounded-2xl p-8 mx-6 backdrop-blur-sm border border-white border-opacity-20">
          {children}
        </div>
      </motion.div>

      {/* Mosaic navigation */}
      <div className="absolute bottom-6 left-6 z-30">
        <div className="grid grid-cols-2 gap-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-4 h-4 rounded-sm transition-all duration-300 ${
                focusedImage === index 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-40'
              }`}
              onClick={() => setFocusedImage(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: focusedImage === index 
                  ? '0 0 20px rgba(255,255,255,0.8)' 
                  : '0 0 0px rgba(255,255,255,0)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Activity indicator */}
      <motion.div 
        className="absolute top-6 left-6 z-30 flex items-center space-x-2 bg-black bg-opacity-40 rounded-full px-4 py-2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="grid grid-cols-2 gap-1"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-white rounded-full"
              animate={{
                opacity: focusedImage === i ? 1 : 0.3,
                scale: focusedImage === i ? 1.5 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
        <span className="text-white text-xs font-medium">Mosaic</span>
      </motion.div>

      {/* Progress ring around focused image */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-25"
        key={focusedImage}
      >
        <motion.div
          className="absolute border-4 border-brand-cyan rounded-full"
          style={{
            width: '120px',
            height: '120px',
            top: focusedImage < 2 ? '20%' : '60%',
            left: focusedImage % 2 === 0 ? '20%' : '60%',
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  )
}

export default HeroMosaic