import './UsersPage.css'
import PopupEdit from '../components/PopupEdit'
import PopupView from '../components/PopupView'

function UsersPage () {
  return <div className='users'>
    

    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Sobrenome</th>
          <th scope="col">Email</th>
          <th scope="col">CPF</th>
          <th scope="col">Data de cadastro</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>

      <tbody>
          {
            data.map((obj: any) => (
            <tr>
              <td>{obj.name}</td>
              <td>{obj.surname}</td>
              <td>{obj.email}</td>
              <td>{obj.cpf}</td>
              <td>{obj.dataCreation}</td>
              <td className='table__buttons'>
                <button className='btn btn-link'>Analisar</button>
                <button className='btn btn-link'>Editar</button>
                <button className='btn btn-link'>Excluir</button>
              </td>
            </tr>
            ))
          }
        
          
        
      </tbody>
    </table>


    {/* <PopupEdit /> */}
    {/* <PopupView /> */}

  </div>
}

interface tableUsers {
  name: string,
  surname: string,
  email: string,
  cpf: string,
  dataCreation: string,
}

const data: tableUsers[] = [
  {
    name: 'Mateus', 
    surname: 'Durães dos Santos', 
    email: 'mateus@gmail.com', 
    cpf: '000.000.000-00', 
    dataCreation: '01/11/2025', 
  },
  {
    name: 'Pedro', 
    surname: 'Santos', 
    email: 'pedro@gmail.com', 
    cpf: '111.111.111-00', 
    dataCreation: '01/11/2025', 
  },
  {
    name: 'Mateus', 
    surname: 'Durães dos Santos', 
    email: 'mateus@gmail.com', 
    cpf: '000.000.000-00', 
    dataCreation: '01/11/2025', 
  },
  {
    name: 'Pedro', 
    surname: 'Santos', 
    email: 'pedro@gmail.com', 
    cpf: '111.111.111-00', 
    dataCreation: '01/11/2025', 
  },
]


export default UsersPage