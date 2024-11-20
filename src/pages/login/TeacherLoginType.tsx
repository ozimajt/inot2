import { LoginLayout } from './components/LoginLayout';
import { LoginCard } from './components/LoginCard';

export const TeacherLoginType: React.FC = () => {
  const handleLogin = (type: string) => {
    console.log(`Logging in with ${type}`);
    // Add login logic here
  };

  const buttons = [
    {
      title: "Demo Teacher Login",
      backgroundColor: "#4558C8",
      textColor: "#FFFFFF",
      minHeight: "60vh",
      zIndex: 1,
      onClick: () => handleLogin('demo')
    },
    {
      title: "Continue with Google",
      backgroundColor: "#EE5E37",
      textColor: "#FFFFFF",
      minHeight: "45vh",
      zIndex: 2,
      onClick: () => handleLogin('google')
    },
    {
      title: "Continue with Apple",
      backgroundColor: "#DFF37D",
      textColor: "#000000",
      minHeight: "30vh",
      zIndex: 3,
      onClick: () => handleLogin('apple')
    }
  ];

  return (
    <LoginLayout title="Teacher">
      <nav className="relative w-full">
        <div className="absolute bottom-0 left-0 right-0 w-full">
          {buttons.map((button, index) => (
            <LoginCard key={index} {...button} />
          ))}
        </div>
      </nav>
    </LoginLayout>
  );
};