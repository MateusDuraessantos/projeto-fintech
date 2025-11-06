import '../styles/PopupEdit.css'
import React, { useEffect, useState } from "react";
import { callable_users } from '../api/users/users'
import { valores } from '~/constants/users'
import type { Users } from '~/types/users'

const buscarPorCpf = async (user: Users) => await callable_users.GET_byCpf(user)

export default function PopupEdit ({ user, closePopup, searchDatas }: any) {

  // ====== VARIABLES =======
  const [inputs, setInputs] = useState<any>({
    nome: '',
    sobrenome: '',
    user: '',
    nascimento: '',
    rg: 0,
  })

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      try {
        const response = await buscarPorCpf(user)
        console.log(response);
        
        setInputs(response)
      } catch (error) {
        
      }
    }

    load()

  }, [user])
  
  // ====== METHODS =======
  const atualizarUser = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(formData.entries());
    
    if (Object.entries(data).every((obj: any) => obj[1] == '')) {
      alert('Altere pelo menos um campo.')
      return
    }

    const datasToUpdate = {
      nome: data.nome || inputs.nome, 
      sobrenome: data.sobrenome || inputs.sobrenome, 
      cpf: data.cpf || inputs.cpf, 
      nascimento: data.nascimento || inputs.nascimento, 
      rg: data.rg || inputs.rg
    }

    console.log(datasToUpdate);

    const response = await callable_users.PUT_user(datasToUpdate)
    
    if (response) {
      searchDatas()
      closePopup()
    }

  }


  // ====== HTML =======
  return <div className="g-popup__overlay">
    <div className="g-popup__ctn">
      
      <button className="g-popup__fechar" onClick={closePopup}>Fechar</button>

      <h1>/Editar usuário: Mateus Durães Santos</h1>
    
      <div>
        <hr />
        <div className='view__grid'>
          <form onSubmit={atualizarUser} className='view__user'>

            {
              valores.map((obj: any) => (
                <div className='g-input__ctn' key={obj.name}>
                  <p><b>{obj.name}</b> - ({(inputs|| {})[obj.name]})</p>
                  <input
                    className='g-input'
                    type={obj.type}
                    name={obj.name}
                    placeholder={obj.name}
                  />
                </div>
              ))
            }
  
            <hr />
            
            <div className='g-popup__actions'>
              <button className='btn btn-outline-primary'>Cancelar</button>
              <button className='btn btn-primary' type='submit'>Atualizar</button>
            </div>

          </form>
        </div>
      </div>
    

    </div>
  </div>
}
