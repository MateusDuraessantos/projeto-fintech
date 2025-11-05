export default function popupEdit({closePopup}: any) {
  return <div className="g-popup__overlay edit">
    <div className="g-popup__ctn">

      <button className="g-popup__fechar" onClick={closePopup}>Fechar</button>

      <h1>/Usuário</h1>
      <p><b>Nome:</b>Mateus Durães dos Santos</p>
      <p><b>CPF:</b> 000.000.000-00</p>
      <p><b>CEP:</b> 00000-000</p>
      <p><b>Endereço:</b>Rua Maite, Número 03, Palmas, Suz...</p>
      
      <br />
      <h1>/Contas</h1>
      <div className="popup__account">
        <h3>Visa</h3>
        <p><b>Email:</b>mateusduraes@gmail.com</p>
        <p><b>Senha:</b>123</p>
        <p><b>Bandeira:</b>Visa</p>
        <p><b>Numero: </b>agencia: 0100001</p>
      </div>

    </div>
  </div>
}