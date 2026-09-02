"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAmbient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dynamic particle nodes for vibrant data/process visualization
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 3.5 + 3, // Larger, bold nodes
      alpha: Math.random() * 0.4 + 0.35,
      hue: Math.random() > 0.5 ? "14, 165, 233" : "99, 102, 241", // Electric Cyan & Indigo
      pulse: Math.random() * Math.PI * 2,
    }));

    // Floating process node rings
    const ringNodes = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 40 + 30,
      dr: 0.15 + Math.random() * 0.1,
      alpha: Math.random() * 0.3 + 0.2,
      maxR: 90 + Math.random() * 50,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    let mouseX = -999;
    let mouseY = -999;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;

    const draw = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing expanding process rings
      for (const ring of ringNodes) {
        ring.x += ring.vx;
        ring.y += ring.vy;
        ring.r += ring.dr;

        if (ring.x < 0 || ring.x > width) ring.vx *= -1;
        if (ring.y < 0 || ring.y > height) ring.vy *= -1;
        if (ring.r > ring.maxR) {
          ring.r = 10;
        }

        const ringAlpha = (1 - ring.r / ring.maxR) * ring.alpha;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${ringAlpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 2. Draw particle nodes and connecting graph lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const currentRadius = p.radius + Math.sin(p.pulse) * 1.5;

        // Draw node glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius * 3);
        grad.addColorStop(0, `rgba(${p.hue}, ${p.alpha * 0.9})`);
        grad.addColorStop(0.5, `rgba(${p.hue}, ${p.alpha * 0.3})`);
        grad.addColorStop(1, `rgba(${p.hue}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Draw solid node center
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with distinct graph lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 220) {
            const lineAlpha = (1 - dist / 220) * 0.42;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${lineAlpha})`;
            ctx.lineWidth = 1.8;
            ctx.stroke();
          }
        }

        // Mouse interaction web
        if (mouseX > 0 && mouseY > 0) {
          const mdx = p.x - mouseX;
          const mdy = p.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 260) {
            const mAlpha = (1 - mdist / 260) * 0.65;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(14, 165, 233, ${mAlpha})`;
            ctx.lineWidth = 2.4;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="ambient-bg-wrapper" aria-hidden="true">
      {/* Vibrant Floating Gradient Orbs */}
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />
      <div className="ambient-orb orb-4" />

      {/* Interactive Process Node Canvas */}
      <canvas ref={canvasRef} className="ambient-canvas" />
    </div>
  );
}
