import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
	"Software Engineer",
	"Game Developer",
	"Artist",
	"Bassist",
	"Polyglot",
];
export default function CycleText() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % words.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);
	// ideally i'd like the characters to randomize 1 by one and then fill out the next word 1 by 1 but this will do for now
	return (
		<span className="inline-flex overflow-hidden h-10">
			<AnimatePresence mode="wait">
				<motion.span
					key={words[index]}
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -20, opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="inline-block font-bold"
				>
					{words[index]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
}
