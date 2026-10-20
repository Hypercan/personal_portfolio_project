"use client";

import { useEffect, useState } from "react";

interface Burst {
  id: number;
  x: number;
  y: number;
  word: string;
  color: string;
  rotation: number;
}

const PUNK_WORDS = ["BAM!", "POW!", "RADICAL!", "ZAP!", "YEAH!", "PUNK!", "NOISE!"];
const PUNK_COLORS = ["#FF007F", "#E6FF00", "#00F0FF", "#FFFDF5"];

export default function PunkCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsEnabled(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest(".punk-btn") ||
          target.closest(".sticker") ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newBurst: Burst = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        word: PUNK_WORDS[Math.floor(Math.random() * PUNK_WORDS.length)],
        color: PUNK_COLORS[Math.floor(Math.random() * PUNK_COLORS.length)],
        rotation: Math.floor(Math.random() * 30) - 15,
      };

      setBursts((prev) => [...prev.slice(-6), newBurst]);

      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== newBurst.id));
      }, 700);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Custom Punk Pointer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.8 : isPointer ? 1.3 : 1
          })`,
          width: isPointer ? 32 : 24,
          height: isPointer ? 32 : 24,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "transform 0.08s ease-out, width 0.15s ease, height 0.15s ease, background 0.15s ease",
          background: isPointer ? "var(--neon-yellow)" : "var(--neon-pink)",
          border: "2px solid #000000",
          boxShadow: isPointer
            ? "0 0 14px var(--neon-yellow)"
            : "0 0 10px var(--neon-pink)",
          mixBlendMode: "difference",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 4,
            height: 4,
            background: "#000",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Comic Bursts & Graffiti Splatters */}
      {bursts.map((b) => (
        <div
          key={b.id}
          style={{
            position: "fixed",
            left: b.x,
            top: b.y,
            transform: `translate(-50%, -50%) rotate(${b.rotation}deg)`,
            pointerEvents: "none",
            zIndex: 99998,
            animation: "burstAnimation 0.7s forwards ease-out",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-comic)",
              fontSize: "1.4rem",
              color: b.color,
              textShadow: "2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000",
              letterSpacing: "1px",
              whiteSpace: "nowrap",
            }}
          >
            {b.word}
          </div>
        </div>
      ))}

      <style jsx global>{`
        @keyframes burstAnimation {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.6) rotate(0deg);
          }
          40% {
            opacity: 1;
            transform: translate(-50%, -60px) scale(1.3) rotate(-10deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -85px) scale(0.9) rotate(15deg);
          }
        }
      `}</style>
    </>
  );
}
