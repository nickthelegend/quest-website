"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import styles from "./MobileMockupsSection.module.css"

const mockupImages = [
  "/mockups/mock1.jpg",
  "/mockups/mock5.jpg",
  "/mockups/mock6.jpg",
  "/mockups/mock7.jpg",
  "/mockups/mock8.jspg",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const mockupItemVariants = {
  hidden: (i) => {
    const baseInitial = { opacity: 0, scale: 0.95 }

    if (i === 0) return { ...baseInitial, x: -60, y: 30, rotateZ: -5 }
    if (i === 1) return { ...baseInitial, x: -30, y: -60, rotateZ: 5 }
    if (i === 2) return { ...baseInitial, y: 40, rotateZ: 0 }
    if (i === 3) return { ...baseInitial, x: 30, y: -60, rotateZ: -5 }
    if (i === 4) return { ...baseInitial, x: 60, y: 30, rotateZ: 5 }

    return baseInitial
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    rotateZ: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
}

const MobileMockupsSections = () => {
  const ref = useRef(null)
  const [screenSize, setScreenSize] = useState("desktop")

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setScreenSize("mobile")
      } else if (width <= 768) {
        setScreenSize("tablet")
      } else if (width <= 1024) {
        setScreenSize("small-desktop")
      } else {
        setScreenSize("desktop")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const getVisibleMockups = () => {
    switch (screenSize) {
      case "mobile":
        return mockupImages.slice(0, 1) // Show only 1 mockup
      case "tablet":
        return mockupImages.slice(0, 2) // Show 2 mockups
      case "small-desktop":
        return mockupImages.slice(0, 3) // Show 3 mockups
      default:
        return mockupImages // Show all 5 mockups
    }
  }

  const visibleMockups = getVisibleMockups()

  return (
    <section ref={ref} className={styles["mobile-mockups-section"]}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Experience the Game on Mobile
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Immersive gameplay in your pocket
        </motion.p>
        <motion.div
          className={styles["mockups-grid"]}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {visibleMockups.map((src, index) => (
            <motion.div key={index} className={styles["mockup-item"]} variants={mockupItemVariants} custom={index}>
              <Image
                src={src || "/placeholder.svg"}
                alt={`Mobile Mockup ${index + 1}`}
                width={250}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                priority={index < 2}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default MobileMockupsSections
