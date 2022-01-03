import intro from '../images/intro.jpeg';

import './Chatintro.css';

export const ChatIntro = () => {
  return (
    <div className="chatIntro">
      <img src={intro} alt="Intro"/>
      <h1>Mantenha o seu celular conectado</h1>
      <h2>O Whatsapp conecta ao seu telefone para sicronizar suas mensagens. 
        <br/>Para reduzir os dados Móveis, conecte pelo Wi-Fi</h2>
    </div>
  )
}