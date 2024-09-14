import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/FirstPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;
