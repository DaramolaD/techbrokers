import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

const tagVariants = {
  default: "bg-[#1E40AF] text-white border-[#1E40AF]/20",
  outline: "bg-[#DEE6FF] text-[#1E40AF] border-[#1E40AF]",
  ghost: "bg-[#ffffff] text-black border-[#1E40AF]/20"
};

export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <div className={cn(
      "inline-flex items-center w-fit gap-2 px-4 py-2 rounded-full border text-sm sm:text-base font-semibold",
      tagVariants[variant],
      className
    )}>
      {children}
    </div>
  );
} 