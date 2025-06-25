import { motion } from 'framer-motion'

const HeroParallax = ({ children }) => {
  const images = [
    "/images/interior-01.jpg",
    "/images/interior-02.jpg", 
    "/images/interior-03.jpg",
    "/images/interior-04.jpg"
  ]

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Layer - Slow automatic movement */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          scale: 1.2
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Mid-ground Layer - Medium speed movement */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${images[1]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          scale: 1.15
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Foreground Layer - Faster movement */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${images[2]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          scale: 1.1
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 25, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20"
        style={{
          backgroundImage: `url(${images[3]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-lg opacity-15"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          rotate: [0, -8, 8, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full opacity-25"
        style={{
          backgroundImage: `url(${images[1]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        animate={{
          y: [0, -15, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Gradient overlay for depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Content overlay with gentle movement */}
      <motion.div 
        className="relative z-10 h-full"
        animate={{
          y: [0, -5, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>

      {/* Movement indicators */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="flex flex-col space-y-2">
          <div className="text-white text-xs opacity-60">Auto-parallax active</div>
          <div className="flex space-x-1">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className="w-1 h-6 bg-white rounded-full"
                style={{ opacity: 0.3 + (index * 0.2) }}
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.3 + (index * 0.2), 0.7, 0.3 + (index * 0.2)]
                }}
                transition={{
                  duration: 2 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroParallax