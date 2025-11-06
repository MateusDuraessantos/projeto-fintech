import { Link } from 'react-router-dom'
import "../styles/Header.css"

export default function Header() {
  return <header className="header">
    <div className="header__logo">FINTECH</div>
    <Link to={'/'}>Sair</Link>
  </header>
}