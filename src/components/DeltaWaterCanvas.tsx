'use client';

import { useEffect, useRef } from 'react';

type Point = {
  x: number;
  y: number;
};

const mix = (a: number, b: number, t: number) => a + (b - a) * t;

const colorForProgress = (progress: number, alpha: number) => {
  if (progress < 0.34) {
    return `rgba(109, 184, 210, ${alpha})`;
  }

  if (progress < 0.58) {
    return `rgba(24, 110, 174, ${alpha})`;
  }

  if (progress < 0.78) {
    return `rgba(9, 42, 71, ${alpha})`;
  }

  return `rgba(118, 190, 208, ${alpha * 0.82})`;
};

const drawRiver = (
  context: CanvasRenderingContext2D,
  points: Point[],
  width: number,
  progress: number,
  phase: number,
) => {
  if (points.length < 4) {
    return;
  }

  context.save();
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.globalCompositeOperation = 'source-over';

  for (let layer = 0; layer < 3; layer += 1) {
    const layerProgress = layer / 2;
    const drift = Math.sin(phase * 0.7 + layer * 1.72) * width * 0.09;

    context.beginPath();
    context.moveTo(points[0].x + drift, points[0].y);
    context.bezierCurveTo(
      points[1].x - drift * 0.7,
      points[1].y,
      points[2].x + drift,
      points[2].y,
      points[3].x - drift * 0.4,
      points[3].y,
    );

    if (points[4] && points[5] && points[6]) {
      context.bezierCurveTo(
        points[4].x + drift * 0.6,
        points[4].y,
        points[5].x - drift,
        points[5].y,
        points[6].x + drift * 0.4,
        points[6].y,
      );
    }

    context.strokeStyle = colorForProgress(progress, mix(0.06, 0.16, 1 - layerProgress));
    context.lineWidth = width * mix(1, 0.22, layerProgress);
    context.stroke();
  }

  context.globalCompositeOperation = 'screen';
  context.shadowBlur = 0;

  for (let highlight = 0; highlight < 2; highlight += 1) {
    const offset = Math.sin(phase * 1.55 + highlight * 2.3) * width * 0.18;
    context.beginPath();
    context.moveTo(points[0].x + offset, points[0].y);
    context.bezierCurveTo(
      points[1].x + offset * 0.2,
      points[1].y,
      points[2].x - offset,
      points[2].y,
      points[3].x + offset * 0.3,
      points[3].y,
    );
    context.strokeStyle = `rgba(255, 255, 255, ${0.14 + Math.sin(phase + highlight) * 0.04})`;
    context.lineWidth = Math.max(1, width * 0.025);
    context.setLineDash([width * 0.28, width * 0.5]);
    context.lineDashOffset = -phase * width * (0.38 + highlight * 0.08);
    context.stroke();
  }

  context.restore();
};

export default function DeltaWaterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;
    let phase = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isRunning = true;
    let lastFrame = 0;

    const getScrollProgress = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      return Math.min(1, Math.max(0, window.scrollY / max));
    };

    const resize = () => {
      dpr = 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = (time = 0) => {
      if (!isRunning) {
        return;
      }

      if (!reducedMotion.matches && time - lastFrame < 48) {
        animationFrame = window.requestAnimationFrame(render);
        return;
      }

      lastFrame = time;

      const progress = getScrollProgress();
      const reduced = reducedMotion.matches;
      phase = reduced ? 0.2 : phase + 0.036;

      context.clearRect(0, 0, width, height);

      const heroFade = Math.min(1, Math.max(0, progress * 8));
      const baseWidth = mix(width * 0.08, width * 0.15, Math.sin(progress * Math.PI) ** 2);
      const curveShift = Math.sin(progress * Math.PI * 2) * width * 0.18;
      const depth = mix(-height * 0.2, height * 0.28, progress);

      const mainPath: Point[] = [
        { x: mix(width * 0.68, width * 0.25, progress) + curveShift * 0.45, y: -height * 0.18 },
        { x: width * 0.08 + curveShift, y: height * 0.18 + depth * 0.2 },
        { x: width * 0.9 - curveShift * 0.8, y: height * 0.48 },
        { x: mix(width * 0.18, width * 0.78, progress) - curveShift, y: height * 0.78 },
        { x: width * 0.34 + curveShift * 0.35, y: height * 0.98 },
        { x: width * 0.8 - curveShift * 0.7, y: height * 1.18 },
        { x: width * 0.48, y: height * 1.34 },
      ];

      const splitPath: Point[] = [
        { x: width * 0.2 + curveShift * 0.15, y: height * 0.05 },
        { x: width * 0.52 - curveShift * 0.4, y: height * 0.3 },
        { x: width * 0.18 + curveShift * 0.7, y: height * 0.56 },
        { x: width * 0.88 - curveShift * 0.2, y: height * 0.98 },
      ];

      context.globalAlpha = 0.5 + heroFade * 0.5;
      drawRiver(context, mainPath, baseWidth, progress, phase);

      if (progress > 0.16 && progress < 0.9) {
        context.globalAlpha = mix(0.18, 0.54, Math.sin(progress * Math.PI));
        drawRiver(context, splitPath, baseWidth * 0.34, progress, phase + 2.2);
      }

      context.globalAlpha = 1;

      if (!reduced) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    resize();
    render();

    const onResize = () => {
      resize();
      if (reducedMotion.matches) {
        render();
      }
    };

    const onScroll = () => {
      if (reducedMotion.matches) {
        render();
      }
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    const onMotionChange = () => {
      render();
    };

    reducedMotion.addEventListener('change', onMotionChange);

    return () => {
      isRunning = false;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      reducedMotion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="delta-water-canvas" aria-hidden="true" />;
}
