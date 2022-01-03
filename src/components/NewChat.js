import { useState } from 'react';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import './NewChat.css';

import avatar from '../images/avatar2.jpeg';

export const NewChat = ({ user, chatList, show, setShow }) => {
  const [list, setList] = useState([
    { id: 1, avatar: avatar, name: 'Kapivara' },
    { id: 1, avatar: avatar, name: 'Kapivara' },
    { id: 1, avatar: avatar, name: 'Kapivara' },
    { id: 1, avatar: avatar, name: 'Kapivara' },
  ]);

  return (
    <div className="newChat" style={{ left: show ? 0 : '-415px' }} >
      <div className="newChat-head">
        <div onClick={() => setShow(false)} className="newChat-backbutton">
          <KeyboardBackspaceIcon style={{ color: '#FFF' }} />
        </div>
        <div className="newChat-headtitle">Nova Conversa</div>
      </div>
      <div className="newChat-list">
        {list.map((item, key) => (
          <div className="newChat-item" key={key}>
            <img className="newChat-itemavatar" src={item.avatar} alt="Avatar" />
            <div className="newChat-itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
};