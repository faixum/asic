import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1280px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 ${className}`}>
      {children}
    </div>
  );
}
