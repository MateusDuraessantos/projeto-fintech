import '../styles/PopupView.css'
import React, { useEffect, useState } from "react";
import { callable_users } from '../api/users/users'
import type { Users } from '~/types/users'

const buscarPorCpf = async (user: Users) => await callable_users.GET_byCpf(user)

export default function PopupView ({ user, closePopup }: any) {
  // ====== VARIABLES =======
  const [datas, setDatas] = useState<Users>()
  
  // ====== METHODS =======
  useEffect(() => {
    if (!user) return;

    const load = async () => {
      const response = await buscarPorCpf(user)
      setDatas(response)
    }

    load()
    
  }, [user])

  // ====== HTML =======

  return <div className="g-popup__overlay">
    <div className="g-popup__ctn">

      <button className="g-popup__fechar" onClick={() => closePopup()}>Fechar</button>

      <h1>/Dados do usuário</h1>
      <p><b>Nome Completo:</b>{datas?.nome} {datas?.sobrenome}</p>
      <p><b>CPF:</b> { datas?.cpf }</p>
      <p><b>RG:</b> { datas?.rg }</p>
      <p><b>Data de nascimento:</b> { datas?.nascimento }</p>
      
    </div>
  </div>
}
