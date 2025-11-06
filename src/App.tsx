import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Page_Login from './pages/Login.tsx'
import Page_Users from './pages/Users.tsx'
import Header from './components/Header.tsx'


function App() {
  const location = useLocation();
  const hideHeader = location.pathname == '/';

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Page_Login />} />
        <Route path="/users" element={<Page_Users />} />
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