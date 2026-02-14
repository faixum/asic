import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center cursor-pointer';

  const variants = {
    primary: 'bg-[#1A3A6B] text-white hover:bg-[#2B5EA7] shadow-lg hover:shadow-xl hover:shadow-[#1A3A6B]/25 hover:-translate-y-1',
    secondary: 'bg-[#F5C518] text-[#0D1B2A] hover:bg-[#FFD84D] shadow-lg hover:shadow-xl hover:shadow-[#F5C518]/35 hover:-translate-y-1',
    accent: 'bg-[#F5C518] text-[#0D1B2A] hover:bg-[#FFD84D] shadow-lg hover:shadow-xl hover:shadow-[#F5C518]/35 hover:-translate-y-1 font-bold',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#1A3A6B] hover:-translate-y-1',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
