import './LoginPage.css'
import { Link } from 'react-router-dom'

function Login() {
  return <div className='forms__container'>
    <div className="forms">

    <h1>login</h1>
      <input className='g-input' placeholder='Email' type="text" name="" id="" />
      <input className='g-input' placeholder='Senha' type="text" name="" id="" />
      <Link to='/users' className='button button--blue'>Entrar</Link>
    </div>
  </div>
}

export default Login
