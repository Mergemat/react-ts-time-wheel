import React from 'react';

type WheelItemProps = {
  value: string | number;
  rotate: number;
  active: boolean;
};

export const WheelItem = ({ value, rotate, active }: WheelItemProps) => {
  return (
    <div
      style={{
        transform: `rotateX(${rotate}deg) translateZ(180px)`,
      }}
      className="absolute flex backface-visibility w-44"
    >
      <div
        className={`flex justify-center items-center h-10 w-full rounded-xl duration-100 bg-opacity-80 ${
          active
            ? 'bg-slate-500 scale-105 shadow-slate-800 shadow-lg'
            : 'bg-slate-600 scale-100'
        }`}
      >
        <h1 className="font-bold text-slate-100 subpixel-antialiased">
          {value}
        </h1>
      </div>
    </div>
  );
};
