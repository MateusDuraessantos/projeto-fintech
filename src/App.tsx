import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage.tsx'
import UsersPage from './pages/UsersPage.tsx'
import Header from './components/Header.tsx'


function App() {
  const location = useLocation();
  const hideHeader = location.pathname == '/';

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
}


export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}