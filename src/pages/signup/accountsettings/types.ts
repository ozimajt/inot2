export interface Shape {
  id: string;
  color: string;
  type: 'circle' | 'triangle' | 'square';
  rotation: number;
}

export interface ShapeComponentProps {
  shape: Shape;
  isSelected: boolean;
  onClick: () => void;
}