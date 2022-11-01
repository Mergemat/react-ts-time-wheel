import { RefObject, useEffect, useRef, useState } from 'react';

export const useTimeWheel = (
  length: number
): [number, RefObject<HTMLDivElement>] => {
  const [rotate, setRotate] = useState<number>(0);
  const [startTouches, setStartTouches] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current?.addEventListener('pointerdown', pointerDown);
    container.current?.addEventListener('pointermove', pointerMove);

    return () => {
      container.current?.removeEventListener('pointerdown', pointerDown);
      container.current?.removeEventListener('pointermove', pointerMove);
    };
  }, [rotate, startTouches]);

  useEffect(() => {
    if (container.current) {
      container.current.style.transform = `rotateX(${
        -rotate / (length / 6)
      }deg) `;
    }
  }, [rotate]);

  const pointerDown = (event: PointerEvent) => {
    setStartTouches(event.pageY);
    setProgress(rotate);
  };
  const pointerMove = (event: PointerEvent) => {
    if (event.pressure <= 0) return;
    const differenceMove = event.pageY - startTouches;
    if (Math.abs(differenceMove + progress) < 1440) {
      setRotate(differenceMove + progress);
    } else {
      setRotate(0);
    }
  };

  return [rotate, container];
};
