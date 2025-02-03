import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface NeonTitleProps {
  text: string;
  className?: string;
}

export function NeonTitle({ text, className }: NeonTitleProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <h1 
      className={cn(
        "text-4xl lg:text-5xl font-bold relative",
        "animate-glow",
        className
      )}
    >
      <span className="absolute inset-0 text-[#00F2FF]" style={{
        textShadow: isDark 
          ? "0 0 10px rgba(0, 242, 255, 0.7), 0 0 20px rgba(0, 242, 255, 0.5)"
          : "0 0 10px rgba(0, 162, 255, 0.9), 0 0 20px rgba(0, 162, 255, 0.7)"
      }}>
        {text}
      </span>
      <span className="relative text-white" style={{
        opacity: isDark ? 0.7 : 0.9
      }}>
        {text}
      </span>
    </h1>
  );
} 