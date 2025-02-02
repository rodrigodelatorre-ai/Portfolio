import { motion } from "framer-motion";

interface NeonTitleProps {
  text: string;
  className?: string;
}

export function NeonTitle({ text, className = "" }: NeonTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <div className="absolute inset-0 blur-lg opacity-50 bg-accent/50" />
      <h1 className="relative text-4xl md:text-6xl font-bold neon-text bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF] to-[#FF00E5]">
        {text}
      </h1>
    </motion.div>
  );
} 