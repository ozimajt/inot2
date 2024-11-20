import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from './components/welcome/Welcome';
import { 
  AccountType,
  StudentLoginType,
  ParentLoginType,
  TeacherLoginType
} from './pages/login';
import { AccountSetup } from './pages/signup/accountsettings/AccountSetup';
import { StudentBlue } from './pages/signup/student/StudentBlue';
import { StudentGreen } from './pages/signup/student/StudentGreen';
import { StudentSquare } from './pages/signup/student/StudentSquare';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login/account-type" element={<AccountType />} />
        <Route path="/login/student" element={<StudentLoginType />} />
        <Route path="/login/parent" element={<ParentLoginType />} />
        <Route path="/login/teacher" element={<TeacherLoginType />} />
        <Route path="/signup/account-setup" element={<AccountSetup />} />
        <Route path="/signup/student-circle" element={<StudentBlue />} />
        <Route path="/signup/student-triangle" element={<StudentGreen />} />
        <Route path="/signup/student-square" element={<StudentSquare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;