import React from 'react';

interface ArrowIconProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  color?: string;
  size?: number;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction = 'up', color = 'currentColor', size = 24 }) => {
  const rotation = {
    up: 'rotate(0deg)',
    down: 'rotate(180deg)',
    left: 'rotate(-90deg)',
    right: 'rotate(90deg)',
  }[direction];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: rotation }}
    >
      <path d="M9 18v-6H5l7-7 7 7h-4v6H9z" />
    </svg>
  );
};

export default ArrowIcon;
