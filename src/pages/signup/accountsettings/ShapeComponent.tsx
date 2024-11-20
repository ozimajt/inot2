import { motion, useAnimation, AnimatePresence, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShapeComponentProps } from './types';

export const ShapeComponent: React.FC<ShapeComponentProps> = ({
  shape,
  isSelected,
  onClick
}) => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const shapeSize = '64vh';

  const getBaseAnimation = (): Variants => {
    const baseTransition = {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse" as const
    };

    switch (shape.type) {
      case 'circle':
        return {
          animate: {
            y: ['0%', '-5%', '0%'],
            x: ['-3%', '3%', '-3%'],
            rotateY: [0, 180, 360],
            transition: {
              y: { ...baseTransition },
              x: { ...baseTransition, delay: 0.6 },
              rotateY: { ...baseTransition, duration: 12 }
            }
          }
        };
      case 'triangle':
        return {
          animate: {
            rotate: [-5, 5, -5],
            x: ['3%', '-3%', '3%'],
            y: ['-4%', '4%', '-4%'],
            scale: [0.98, 1.02, 0.98],
            transition: {
              rotate: { ...baseTransition },
              x: { ...baseTransition, delay: 0.4 },
              y: { ...baseTransition, delay: 0.8 },
              scale: { ...baseTransition, delay: 1.2 }
            }
          }
        };
      case 'square':
        return {
          animate: {
            rotate: [-4, 4, -4],
            scale: [0.97, 1.03, 0.97],
            y: ['4%', '-4%', '4%'],
            x: ['-3%', '3%', '-3%'],
            rotateX: [0, 180, 360],
            transition: {
              rotate: { ...baseTransition },
              scale: { ...baseTransition, delay: 0.6 },
              y: { ...baseTransition, delay: 0.2 },
              x: { ...baseTransition, delay: 1 },
              rotateX: { ...baseTransition, duration: 12 }
            }
          }
        };
      default:
        return {};
    }
  };

  const handleClick = async () => {
    onClick();
    
    // Initial impact animation with strong scale down and shadow
    await controls.start({
      scale: 0.8,
      y: "15%",
      filter: "brightness(0.9)",
      transition: {
        duration: 0.15,
        ease: [0.32, 0, 0.67, 0]
      }
    });

    // Dramatic bounce back with slight overshoot
    await controls.start({
      scale: 1.15,
      y: "-8%",
      filter: "brightness(1.1)",
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    });

    // Quick settle
    await controls.start({
      scale: 1.1,
      y: "-5%",
      filter: "brightness(1)",
      transition: {
        duration: 0.15,
        ease: "easeInOut"
      }
    });

    // Calculate viewport diagonal for full coverage
    const viewportDiagonal = Math.sqrt(
      Math.pow(window.innerWidth, 2) + 
      Math.pow(window.innerHeight, 2)
    );
    
    const shapeElement = document.querySelector('.shape-element') as HTMLElement;
    const shapeRect = shapeElement?.getBoundingClientRect();
    const scaleFactor = viewportDiagonal / (shapeRect?.width || 1) * 2;

    // Dramatic zoom animation
    await controls.start({
      scale: [1.1, 1.3, scaleFactor],
      y: ["-5%", "0%", "0%"],
      transition: {
        duration: 1,
        times: [0, 0.2, 1],
        ease: [0.16, 1, 0.3, 1]
      }
    });

    // Navigate after zoom effect
    setTimeout(() => {
      navigate(`/signup/student-${shape.type}`);
    }, 200);
  };

  const getShapeStyle = () => {
    const baseStyle = {
      width: shapeSize,
      height: shapeSize,
      backgroundColor: shape.color,
      cursor: 'pointer',
      zIndex: 50,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.125)',
      transition: 'all 0.3s ease',
      willChange: 'transform, filter, box-shadow'
    };

    switch (shape.type) {
      case 'circle':
        return {
          ...baseStyle,
          borderRadius: '50%'
        };
      case 'triangle':
        return {
          ...baseStyle,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        };
      case 'square':
        return {
          ...baseStyle,
          transform: 'rotate(15deg)'
        };
      default:
        return baseStyle;
    }
  };

  const variants = getBaseAnimation();

  return (
    <AnimatePresence>
      <motion.div
        className={`
          shape-element transform duration-300
          ${isSelected ? 'ring-4 ring-offset-4 ring-gray-400' : ''}
          max-lg:w-[56vh] max-lg:h-[56vh]
          max-md:w-[48vh] max-md:h-[48vh]
          max-sm:w-[40vh] max-sm:h-[40vh]
          hover:shadow-2xl
        `}
        style={getShapeStyle()}
        variants={variants}
        animate="animate"
        whileHover={{
          scale: [1, 1.03, 1.01],
          transition: {
            duration: 0.3,
            times: [0, 0.5, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileTap={{
          scale: 0.85,
          y: "10%",
          boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.2)',
          transition: { 
            duration: 0.15,
            ease: [0.32, 0, 0.67, 0]
          }
        }}
        onClick={handleClick}
      />
    </AnimatePresence>
  );
};