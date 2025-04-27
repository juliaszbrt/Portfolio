import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import '../app/globals.css'

const getRotationTransition = (duration, from) => ({
    from: from,
    to: from + 360,
    ease: "linear",
    duration: duration,
    type: "tween",
    repeat: Infinity,
});

const getTransition = (duration, from) => ({
    rotate: getRotationTransition(duration, from),
    scale: {
        type: "spring",
        damping: 20,
        stiffness: 300,
    },
});

const CircularText = ({
    text,
    spinDuration = 20,
    baseFontSize = "",
    lgFontSize = "",
    xlFontSize = "",
    baseHeight = "",
    lgHeight = "",
    xlHeight = "",
    className = "",
}) => {
    const letters = Array.from(text);
    const controls = useAnimation();
    const [currentRotation, setCurrentRotation] = useState(0);
    const [fontSize, setFontSize] = useState(baseFontSize);
    const [height, setHeight] = useState(baseHeight);

    useEffect(() => {
        const updateSizes = () => {
          const width = window.innerWidth;
          if (width >= 1280) {
              setFontSize(xlFontSize);  // xl screens (Tailwind: 1280px+)
              setHeight(xlHeight);
          } else if (width >= 1024) {
              setFontSize(lgFontSize);  // lg screens (Tailwind: 1024px+)
              setHeight(lgHeight);
          } else {
              setFontSize(baseFontSize); // base screens
              setHeight(baseHeight);
          }
        };
    
        updateSizes(); // run on mount
        window.addEventListener("resize", updateSizes); // run when resizing
        return () => window.removeEventListener("resize", updateSizes);
      }, [baseFontSize, lgFontSize, xlFontSize, baseHeight, lgHeight, xlHeight]);

    useEffect(() => {
        controls.start({
            rotate: currentRotation + 360,
            scale: 1,
            transition: getTransition(spinDuration, currentRotation),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spinDuration, controls, text]);

    return (
        <motion.div
            initial={{ rotate: 0 }}
            className={`circular-text ${className}`}
            animate={controls}
            onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
        >
            {letters.map((letter, i) => {
                const rotation = (360 / letters.length) * i;
                const factor = Number((Math.PI / letters.length).toFixed(0));
                const x = factor * i;
                const y = factor * i;
                const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

                return (
                    <span key={i} style={{ transform, WebkitTransform: transform, fontSize: fontSize, height: height }}>
                        {letter}
                    </span>
                );
            })}
        </motion.div>
    );
};

export default CircularText;
