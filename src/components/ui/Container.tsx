import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const containerVariants = cva(
  "mx-auto px-4 sm:px-6 lg:px-8",
  {
    variants: {
      size: {
        sm: "max-w-4xl",
        md: "max-w-6xl",
        lg: "max-w-7xl",
        full: "max-w-full",
      },
      padding: {
        none: "py-0",
        sm: "py-4",
        md: "py-8",
        lg: "py-12",
        xl: "py-16",
      },
    },
    defaultVariants: {
      size: "lg",
      padding: "md",
    },
  }
);

interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, size, padding, className }: ContainerProps) => {
  return (
    <div className={containerVariants({ size, padding, className })}>
      {children}
    </div>
  );
};

export default Container;