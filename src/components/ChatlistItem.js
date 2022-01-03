import React from 'react';

import avatar2 from '../images/avatar2.jpeg';

import './ChatListItem.css';

export const ChatListItem = ({ onClick, active, data }) => {
  return (
    <div 
      className={`chatListItem ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <img className="chatListItem-avatar" src={data.image} alt="Contato" />
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">{data.title}</div>
          <div className="chatListItem-date">19:00</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>Dae Kapiva, blz ?</p>
          </div>
        </div>
      </div>
    </div>
  )
}