import React, { useEffect, useRef } from 'react';

export default function InteractiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      // Ease mouse coordinates for smooth tilt
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Fill canvas background
      ctx.fillStyle = '#E4E2E3';
      ctx.fillRect(0, 0, width, height);

      // Vanishing point shift based on mouse position
      const vpX = width / 2 + (mouse.x - width / 2) * 0.06;
      const vpY = height / 2 - 40 + (mouse.y - height / 2) * 0.06;

      ctx.save();
      ctx.lineWidth = 1;

      // 1. Draw Radial Perspective Lines (radiating out from vanishing point)
      const rayCount = 36;
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2;
        const endX = vpX + Math.cos(angle) * Math.max(width, height) * 2;
        const endY = vpY + Math.sin(angle) * Math.max(width, height) * 2;

        ctx.strokeStyle = 'rgba(22, 22, 22, 0.06)';
        ctx.beginPath();
        ctx.moveTo(vpX, vpY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Overlay bright white grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.beginPath();
        ctx.moveTo(vpX, vpY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // 2. Draw Concentric Perspective Rectangles (expanding outward)
      const rectSteps = 18;
      for (let i = 1; i <= rectSteps; i++) {
        const factor = Math.pow(i / rectSteps, 1.8);
        const rectW = width * factor * 1.4;
        const rectH = height * factor * 1.4;
        const rectX = vpX - rectW / 2;
        const rectY = vpY - rectH / 2;

        // Dark wireframe
        ctx.strokeStyle = `rgba(22, 22, 22, ${0.03 + factor * 0.07})`;
        ctx.strokeRect(rectX, rectY, rectW, rectH);

        // White wireframe highlight
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + factor * 0.3})`;
        ctx.strokeRect(rectX + 1, rectY + 1, rectW, rectH);
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
}
