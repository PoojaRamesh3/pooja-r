import { ReactNode } from "react";
import { useInView } from "../hooks/useportfolio";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  from?: "up" | "left" | "right";
  className?: string;
}

const Reveal = ({
  children,
  delay = 0,
  from = "up",
  className = "",
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const dir =
    from === "left" ? "reveal-left" : from === "right" ? "reveal-right" : "";
  return (
    <div
      ref={ref}
      className={`reveal ${dir} ${inView ? "in" : ""} ${className}`}
      style={{ ["--d" as any]: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
