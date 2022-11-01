import { WheelItem } from './components/WheelItem';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useTimeWheel } from './hooks/useTimeWheel';
import { getActiveElementIndex } from './utils';

type TimeWheelProps = {
  items: number[] | string[];
};

export const TimeWheel = ({ items }: TimeWheelProps) => {
  const [rotate, container] = useTimeWheel(items.length);

  const renderItem = (value: number | string, index: number): ReactElement => {
    const active = getActiveElementIndex(rotate, items.length) == index;
    return (
      <WheelItem
        key={value}
        value={value}
        rotate={15 - 15 * (index + 1)}
        active={active}
      />
    );
  };

  return (
    <>
      <div
        ref={container}
        className="flex items-center justify-center w-1/2 h-1/2 preserve"
      >
        {items.map((value, index) => renderItem(value, index))}
      </div>
    </>
  );
};
