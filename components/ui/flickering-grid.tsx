"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  className,
  maxOpacity = 0.3,
  ...props
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
        
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }
        
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setCanvasSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const memoizedColor = useMemo(() => {
    const toRGBA = (color: string) => {
      if (typeof window === "undefined") {
        return `rgba(0, 0, 0,`;
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "rgba(255, 0, 0,";
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    return toRGBA(color);
  }, [color]);

  useEffect(() => {
    if (!canvasRef.current || !canvasSize.width || !canvasSize.height || !isInView) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const cols = Math.floor(canvasSize.width / (squareSize + gridGap));
    const rows = Math.floor(canvasSize.height / (squareSize + gridGap));

    const squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
    }

    let animationFrameId: number;
    let lastTime = 0;

    const drawGrid = (time: number) => {
        const deltaTime = time - lastTime;
        if (deltaTime > 1000 / 60) {
            lastTime = time;
            ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const idx = i * rows + j;
                    const opacity = squares[idx];

                    if (Math.random() < flickerChance) {
                        squares[idx] = Math.random() * maxOpacity;
                    } else {
                        squares[idx] = opacity - 0.01;
                        if (squares[idx] < 0) squares[idx] = 0;
                    }

                    ctx.fillStyle = `${memoizedColor} ${squares[idx]})`;
                    ctx.fillRect(
                        i * (squareSize + gridGap),
                        j * (squareSize + gridGap),
                        squareSize,
                        squareSize
                    );
                }
            }
        }
        animationFrameId = requestAnimationFrame(drawGrid);
    };

    animationFrameId = requestAnimationFrame(drawGrid);

    return () => {
        cancelAnimationFrame(animationFrameId);
    };
  }, [canvasSize, squareSize, gridGap, maxOpacity, flickerChance, memoizedColor, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full absolute inset-0 pointer-events-none", className)}
      style={{
        width: width || "100%",
        height: height || "100%",
      }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        width={canvasSize.width}
        height={canvasSize.height}
      />
    </div>
  );
}
