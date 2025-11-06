import '../styles/Page_Users.css'
import PopupView from '../components/PopupView'
import PopupEdit from '../components/PopupEdit'
import CriarUsuario from '../components/CriarUsuario'
import { useEffect, useState } from "react";
import { callable_users } from '../api/users/users'
import type { Users } from '~/types/users'

export default function Page_Users () {
  
  // ====== VARIABLES =======
  const [open_Edit, setOpen_Edit] = useState(false);
  const [open_View, setOpen_View] = useState(false);
  const [open_Criar, setOpen_Criar] = useState(false);
  const [selectUser, setSelectUser] = useState<Users>() 
  const [data, setData] = useState([])

  useEffect(() => { searchDatas() }, [])

  // ====== METHODS =======
  const searchDatas = async () => {
    const response = await callable_users.GET_all() as any
    setData(response)
  }

  const handlePopup_Edit = (user: Users) => {
    setSelectUser(user)
    setOpen_Edit(!open_Edit)
    if(open_Edit == false) searchDatas()
  }

  const handlePopup_View = async (user: Users) => {
    setSelectUser(user)
    setOpen_View(!open_View)
    if(open_View == false) searchDatas()
  }

  const handlePopup_Criar = () => setOpen_Criar(!open_Criar)

  const deleteUser = async (user: Users) => {
    const response = await callable_users.DELETE_user(user)
    if (response) searchDatas()
  }

  // ====== HTML =======
  return <div className='users'>

    <div className='user__header'>
      <h1><span>/</span>Gerenciar usuários</h1>
      <button className='btn btn-primary' onClick={handlePopup_Criar}>Criar usuário</button>
    </div>
    
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Nome Completo</th>
          <th scope="col">CPF</th>
          <th scope="col">Data de nascimento</th>
          <th scope="col">RG</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((obj: Users) => (
          <tr key={obj.id}>
            <td>{obj.nome} {obj.sobrenome}</td>
            <td>{obj.cpf}</td>
            <td>{obj.nascimento}</td>
            <td>{obj.cpf}</td>
            <td className='table__buttons'>
              <button className='btn btn-link' onClick={() => handlePopup_View(obj)}>Analisar</button>
              <button className='btn btn-link' onClick={() => handlePopup_Edit(obj)}>Editar</button>
              <button className='btn btn-link' onClick={() => deleteUser(obj)}>Excluir</button>
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>

    {open_Edit && <PopupEdit user={selectUser} searchDatas={searchDatas} closePopup={ handlePopup_Edit } />}
    {open_View && <PopupView user={selectUser} closePopup={ handlePopup_View } />}
    {open_Criar && <CriarUsuario searchDatas={searchDatas} closePopup={ handlePopup_Criar } />}

  </div>

}