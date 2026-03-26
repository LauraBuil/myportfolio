import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import background from '/img/ball.webp'

interface BackgroundParallaxProps {
    children: React.ReactNode;
}

export default function BackgroundParallax({ children }: BackgroundParallaxProps) {
    const textRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: textRef });
    const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

    return (

            <div className="app">
                <motion.div className="text" ref={textRef} style={{ y: y, x: "-50%" }}>
                    {children}
                </motion.div>
                <img
                    src={background}
                    className="background-image"
                    alt="Image créée sur blender par Laura BUIL"
                />
            </div>
    )
}