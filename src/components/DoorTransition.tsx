import { useState, useEffect, ReactNode } from "react";

interface DoorTransitionProps {
  children: ReactNode;
}

export function DoorTransition({ children }: DoorTransitionProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-zinc-950"
      style={{ perspective: "1500px" }}
    >
      <div
        className={`absolute inset-0 bg-zinc-900 transition-all duration-1000 ${
          isOpen ? "blur-0 opacity-100" : "blur-sm opacity-50"
        }`}
        style={{ transitionDelay: isOpen ? "0.5s" : "0s" }}
      >
        {children}
      </div>

      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-zinc-900 border-r border-white/10 transition-transform duration-[1.2s] pointer-events-none ${
          isOpen ? "shadow-none" : "shadow-[inset_-20px_0_40px_rgba(0,0,0,0.3)]"
        }`}
        style={{
          transformOrigin: "left center",
          transform: isOpen ? "rotateY(-105deg)" : "rotateY(0deg)",
          transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
          backfaceVisibility: "hidden",
          zIndex: 50,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-end pr-4">
          <div className={`transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
            <div className="w-3 h-16 rounded-full bg-zinc-700 shadow-inner" />
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-zinc-900 border-l border-white/10 transition-transform duration-[1.2s] pointer-events-none ${
          isOpen ? "shadow-none" : "shadow-[inset_20px_0_40px_rgba(0,0,0,0.3)]"
        }`}
        style={{
          transformOrigin: "right center",
          transform: isOpen ? "rotateY(105deg)" : "rotateY(0deg)",
          transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
          backfaceVisibility: "hidden",
          zIndex: 50,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-start pl-4">
          <div className={`transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
            <div className="w-3 h-16 rounded-full bg-zinc-700 shadow-inner" />
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: 60 }}
      >
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5" />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none transition-opacity duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "0.3s", zIndex: 40 }}
      />
    </div>
  );
}
