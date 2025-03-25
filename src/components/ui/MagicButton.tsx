import React from 'react';
import { cn } from '@/lib/utils';

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
}

const MagicButton = ({ title, icon, position = 'right', className }: MagicButtonProps) => {
  return (
    <button
      className={cn(
        'group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-black/80 transition-all duration-200',
        className
      )}
    >
      {position === 'left' && icon}
      <span>{title}</span>
      {position === 'right' && icon}
      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </button>
  );
};

export default MagicButton; 