import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Techstacksymbols from "./techstacksymbols";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    symbols: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 w-full h-full",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          target="_blank"
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full cursor-none"
          onMouseEnter={() => setHoveredIndex(idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-500 block rounded-3xl"
                layoutId="hoverBackground"
              />
            )}
          </AnimatePresence>
          <Card symbols={item.symbols}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  symbols,
}: {
  className?: string;
  children: React.ReactNode;
  symbols?: string[];
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl h-full w-full overflow-hidden bg-white border border-transparent relative z-20 cursor-none",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
      <div className="absolute bottom-2 right-2"> {/* Positioning container */}
          <Techstacksymbols symbols={symbols ?? []} />
        </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide text-2xl font-integral sm:text-5xl", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-black tracking-wide leading-relaxed text-sm font-integral z-0 sm:text-2xl",
        className
      )}
    >
      {children}
    </p>
  );
};
