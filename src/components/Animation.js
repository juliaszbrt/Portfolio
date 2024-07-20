'use client'
import { motion } from "framer-motion";

const Animation = ({ text1, text2, text1Styles, text2Styles }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        amount: "all",
        once: true,
      }}
      transition={{ duration: 1 }}
    >
      <h1 className={text1Styles}>{text1}</h1>
      <h2 className={text2Styles}>{text2}</h2>
    </motion.div>
  );
}

export default Animation;
