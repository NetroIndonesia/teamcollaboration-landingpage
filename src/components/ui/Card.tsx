import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
    "rounded-lg bg-white transition-all duration-300",
    {
      variants: {
        variant: {
          default: "border border-gray-200 hover:border-gray-300",
          elevated: "shadow-lg hover:shadow-xl transform hover:-translate-y-1",
          flat: "bg-gray-50 hover:bg-gray-100",
        },
        padding: {
          none: "",
          sm: "p-4",
          md: "p-6",
          lg: "p-8",
        },
      },
      defaultVariants: {
        variant: "default",
        padding: "md",
      },
    }
  );

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, variant, padding, className }: CardProps) => {
  return (
    <div className={cardVariants({ variant, padding, className })}>
      {children}
    </div>
  );
};

export default Card;

const CardHeader = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};
CardHeader.displayName = 'Card.Header';
Card.Header = CardHeader;

const CardTitle = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>{children}</h3>;
};
CardTitle.displayName = 'Card.Title';
Card.Title = CardTitle;

const CardDescription = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};
CardDescription.displayName = 'Card.Description';
Card.Description = CardDescription;

const CardContent = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return <div className={`${className}`}>{children}</div>;
};
CardContent.displayName = 'Card.Content';
Card.Content = CardContent;

const CardFooter = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return <div className={`mt-4 ${className}`}>{children}</div>;
};
CardFooter.displayName = 'Card.Footer';
Card.Footer = CardFooter;