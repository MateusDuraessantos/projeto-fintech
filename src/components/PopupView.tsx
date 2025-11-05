import './PopupView.css'

function popupView () {
  return <div className="g-popup__overlay view">
    <div className="g-popup__ctn">
      
      <button className="g-popup__fechar">Fechar</button>

      <h1>/Editar usuário: Mateus Durães Santos</h1>

      <div>
        <hr />
        <div className='view__grid'>
        
          <div className='view__user'>
            {
              inputsUsers.map((obj: any) => (
                <div className='g-input__ctn'>
                  <b>{obj}</b>
                  <input className='g-input' type='text' placeholder={obj} />
                </div>
              ))
            }
          </div>
        
          <div className="vr mx-3"></div>
          <div className='view__user'>
            {
              inputsAccouts.map((obj: any) => (
                <div className='g-input__ctn'>
                  <b>{obj}</b>
                  <input className='g-input' type='text' placeholder={obj} />
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
      
      <hr />
      
      <div className='g-popup__actions'>
        <button className='btn btn-outline-primary'>Cancelar</button>
        <button className='btn btn-primary'>Salvar</button>
      </div>

    </div>
  </div>
}

const inputsUsers = [
  'nome',
  'sobrenome',
  'cpf',
  'dtNascimento',
]

const inputsAccouts = [
  'email',
  'senha',
  'bandeira',
  'numeroAgencia',
]

export default popupView