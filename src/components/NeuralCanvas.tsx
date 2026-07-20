import { useEffect, useRef } from 'react';

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Aurora cloud particles
    const particleCount = Math.min(70, Math.floor((width * height) / 19000));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      pulseSpeed: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(168, 85, 247, ', // Purple
      'rgba(99, 102, 241, ',  // Indigo
      'rgba(56, 189, 248, ',  // Electric Blue
      'rgba(192, 132, 252, ', // Pinkish Purple
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.2,
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.025,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const mouse = { x: -1000, y: -1000, radius: 190 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Faint Grid lines
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.035)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 1.8;
          p.y += (dy / dist) * force * 1.8;
        }

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.7;
        const alpha = 0.45 + Math.sin(p.pulse) * 0.25;

        // Particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}0.12)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.fill();

        // Connect particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distx = p.x - p2.x;
          const disty = p.y - p2.y;
          const d = Math.sqrt(distx * distx + disty * disty);

          if (d < 135) {
            const lineAlpha = (1 - d / 135) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
