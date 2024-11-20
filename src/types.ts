export interface ButtonProps {
  text: string;
  variant: 'orange' | 'blue' | 'green';
  className?: string;
  onClick?: () => void;
  hoverEffect?: 'up' | 'down';
}