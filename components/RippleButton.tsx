"use client";
import { useCallback, useRef, useState } from "react";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}

export default function RippleButton({ 
  children, 
  title, 
  icon, 
  position = "right", 
  handleClick, 
  otherClasses,
  ...props 
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isHovered || !buttonRef.current || !rippleRef.current) return;
      setIsHovered(true);

      const button = buttonRef.current;
      const ripple = rippleRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      ripple.classList.remove("ripple-leave");
      ripple.classList.add("ripple-enter");
    },
    [isHovered],
  );

  const removeRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target !== event.currentTarget) return;
    if (!buttonRef.current || !rippleRef.current) return;
    setIsHovered(false);

    const button = buttonRef.current;
    const ripple = rippleRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.remove("ripple-enter");
    ripple.classList.add("ripple-leave");

    const handleAnimationEnd = () => {
      if (ripple) {
        ripple.classList.remove("ripple-leave");
        ripple.removeEventListener("animationend", handleAnimationEnd);
      }
    };

    ripple.addEventListener("animationend", handleAnimationEnd);
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || !rippleRef.current || !isHovered) return;

      const button = buttonRef.current;
      const ripple = rippleRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    },
    [isHovered],
  );

  const buttonContent = title ? (
    <div className="flex items-center justify-center gap-2">
      {position === "left" && <span className="text-current">{icon}</span>}
      <span className="text-current">{title}</span>
      {position === "right" && <span className="text-current">{icon}</span>}
    </div>
  ) : children;

  return (
    <button
      ref={buttonRef}
      className={`font-sans duration-500 relative inline-flex h-12 w-full md:w-60 md:mt-10 items-center justify-center overflow-hidden rounded-full bg-white border border-gray-300 px-6 text-base font-medium text-black transition-all hover:bg-black hover:text-white hover:border-black focus:outline-none ${otherClasses || ''}`}
      onMouseEnter={(e) => {
        if (e.target === e.currentTarget) {
          createRipple(e);
        }
      }}
      onMouseLeave={(e) => {
        if (e.target === e.currentTarget) {
          removeRipple(e);
        }
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 pointer-events-none">{buttonContent}</span>
      <span ref={rippleRef} className="ripple" />
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background-color: rgba(255, 255, 255, 0.3);
          z-index: 1;
          opacity: 0;
          transition: transform 50ms linear;
        }
        .ripple-enter {
          animation: ripple-enter 600ms ease-out forwards;
        }
        .ripple-leave {
          animation: ripple-leave 600ms ease-out forwards;
        }
        @keyframes ripple-enter {
          from { transform: scale(0); opacity: 1; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes ripple-leave {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0); opacity: 1; }
        }
      `}</style>
    </button>
  );
}
