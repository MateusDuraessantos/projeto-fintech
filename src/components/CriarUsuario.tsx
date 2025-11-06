import '../styles/CriarUsuario.css'
import { callable_users } from '~/api/users/users'
import type { Users } from '~/types/users'
import { valores } from '~/constants/users'

export default function CriarUsuario ({ closePopup }: any) {

  // ===== METHODS =====
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (Object.entries(data).some((obj: any) => obj[1] == '')) {
      alert('Preencha todos os campos.')
      return
    }

    callable_users.POST_user({
      'nome': String(data.nome),
      'sobrenome': String(data.sobrenome),
      'cpf': String(data.cpf),
      'nascimento': String(data.nascimento),
      'rg': Number(data.rg),
    })

  };

  
  // ===== HTML =====
  return <div className="g-popup__overlay criar">
    <div className="g-popup__ctn">
      <h1>Criar usuário</h1>
      <button className="g-popup__fechar" onClick={closePopup}>Fechar</button>
      
      <hr />
      <form onSubmit={handleSubmit}>
        {
          valores.map((obj: any) => (
            <div className="g-input__ctn" key={obj.name}>
              <b>{obj.name}</b>
              <input
                className='g-input'
                type={obj.type}
                placeholder={obj.name}
                name={obj.name}
              />
            </div>
          ))
        }

        <br />

        <div className='g-popup__actions'>
          <button className='btn btn-outline-primary'>Cancelar</button>
          <button className='btn btn-primary' type="submit">Salvar</button>
        </div>
      </form>

    </div>

  </div>
}