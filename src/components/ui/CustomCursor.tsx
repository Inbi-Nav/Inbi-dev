import { useEffect, useState } from "react";

import "./CustomCursor.css";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [sparkles, setSparkles] = useState<
    Sparkle[]
  >([]);

  useEffect(() => {
    let lastSparkleTime = 0;

    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const now = Date.now();

      if (now - lastSparkleTime < 35) return;

      lastSparkleTime = now;

      const sparkle: Sparkle = {
        id: Math.random(),

        x:
          e.clientX +
          (Math.random() - 0.5) * 20,

        y:
          e.clientY +
          (Math.random() - 0.5) * 20,

        size: Math.random() * 6 + 2,
      };

      setSparkles((prev) => [
        ...prev,
        sparkle,
      ]);

      setTimeout(() => {
        setSparkles((prev) =>
          prev.filter(
            (s) => s.id !== sparkle.id
          )
        );
      }, 600);
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <>
           {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,

            width: sparkle.size,
            height: sparkle.size,
          }}
        />
      ))}
    </>
  );
};