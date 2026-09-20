import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
const words = ['Software engineer', 'Game developer', 'Artist', 'Bassist', 'Polyglot'];
export default function CycleText() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setIndex(value => (value + 1) % words.length), 3400);
    return () => clearInterval(timer);
  }, [reduced]);
  return <span className="cycle-text"><span className="sr-only">Software engineer, game developer, artist, bassist, and polyglot.</span><span aria-hidden="true"><AnimatePresence mode="wait"><motion.span key={index} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -16, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.25 }}>{words[index]}<span className="text-cursor">_</span></motion.span></AnimatePresence></span></span>;
}
