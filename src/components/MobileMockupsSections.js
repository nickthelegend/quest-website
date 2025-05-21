"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './MobileMockupsSection.module.css'; // Corrected CSS import

const mockupImages = [
  '/images/mockups/mockup1.png',
  '/images/mockups/mockup2.png',
  '/images/mockups/mockup3.png',
  '/images/mockups/mockup4.png',
  '/images/mockups/mockup5.png',
];

const MOCKUP_WIDTH = 250;
const MOCKUP_HEIGHT = 500;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child's animation start
      delayChildren: 0.2,    // Initial delay before the first child starts
    },
  },
};

const mockupItemVariants = {
  hidden: (i) => {
    // Elegant entrance from different subtle directions
    const baseInitial = { opacity: 0, scale: 0.95 }; // Start slightly smaller and transparent

    if (i === 0) return { ...baseInitial, x: -60, y: 30, rotateZ: -5 }; // From slightly left-bottom
    if (i === 1) return { ...baseInitial, x: -30, y: -60, rotateZ: 5 }; // From slightly left-top
    if (i === 2) return { ...baseInitial, y: 40, rotateZ: 0 };         // From slightly below, no twist
    if (i === 3) return { ...baseInitial, x: 30, y: -60, rotateZ: -5 }; // From slightly right-top
    if (i === 4) return { ...baseInitial, x: 60, y: 30, rotateZ: 5 };  // From slightly right-bottom

    return baseInitial; // Fallback
  },
  visible: {
    x: 0, // Final position (pixels)
    y: 0, // Final position (pixels)
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    rotateZ: 0, // Ensure no rotation at the end
    transition: {
      type: "spring",
      stiffness: 100, // Good for elegant feel
      damping: 20,    // Good for elegant feel
      duration: 0.8,
    },
  },
};


const MobileMockupsSections = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className={styles['mobile-mockups-section']}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experience the Game on Mobile</h2>
        <p className={styles.subtitle}>immersive gameplay in your pocket</p>
        <motion.div
          className={styles['mockups-grid']}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {mockupImages.map((src, index) => (
            <motion.div
              key={index}
              className={styles['mockup-item']}
              variants={mockupItemVariants}
              custom={index}
            >
              <Image
                src={src}
                alt={`Mobile Mockup ${index + 1}`}
                width={MOCKUP_WIDTH}
                height={MOCKUP_HEIGHT}
                layout="responsive"
                objectFit="contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MobileMockupsSections;