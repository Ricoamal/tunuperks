import React, { useEffect, useRef } from 'react';

const SnowEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes: { x: number; y: number; r: number; d: number; }[] = [];
    const numberOfSnowflakes = 100;

    for (let i = 0; i < numberOfSnowflakes; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() * numberOfSnowflakes,
      });
    }

    function drawSnowflakes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      
      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = snowflakes[i];
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, true);
      }
      
      ctx.fill();
      moveSnowflakes();
    }

    function moveSnowflakes() {
      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = snowflakes[i];
        snowflake.y += Math.cos(snowflake.d) + 1 + snowflake.r / 2;
        snowflake.x += Math.sin(snowflake.d) * 2;

        if (snowflake.y > canvas.height) {
          snowflakes[i] = {
            x: Math.random() * canvas.width,
            y: 0,
            r: snowflake.r,
            d: snowflake.d,
          };
        }
      }
    }

    const animationFrame = setInterval(() => {
      drawSnowflakes();
    }, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 0.5 }}
    />
  );
};

export default SnowEffect;