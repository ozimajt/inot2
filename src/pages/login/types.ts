export interface LoginLayoutProps {
  children: React.ReactNode;
  title: string;
}

export interface LoginCardProps {
  title: string;
  backgroundColor: string;
  textColor: string;
  minHeight: string;
  zIndex: number;
  onClick?: () => void;
}