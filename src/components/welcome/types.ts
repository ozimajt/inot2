export interface NavigationCardProps {
  title: string;
  backgroundColor: string;
  textColor: string;
  minHeight: string;
  zIndex: number;
  onClick?: () => void;
}

export interface WelcomeLayoutProps {
  children: React.ReactNode;
}