import React, { useState, useEffect } from 'react';

import './App.css';
import avatar1 from './images/avatar1.png';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import { ChatListItem } from './components/ChatlistItem';
import { ChatIntro } from './components/Chatintro';
import { ChatWindow } from './components/ChatWindow';
import { NewChat } from './components/NewChat';

function App() {
  const [chatList, setChatlist] = useState([
    { chatId: 1, title: 'Kapivara',image: avatar1},
    { chatId: 2, title: 'Kapivara',image: avatar1},
    { chatId: 3, title: 'Kapivara',image: avatar1},
    { chatId: 4, title: 'Kapivara',image: avatar1},

  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1, name: 'Marcola', avatar: avatar1
  });

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          show={showNewChat}
          user={user}
          chatList={chatList} 
          setShow={setShowNewChat}
        />
        <header>
          <img src={user.avatar} className="header-avatar" alt="Foto Perfil" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>

            <div onClick={handleNewChat} className="header-btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>

            <div className="header-btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>

          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar, ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatListItem 
              key={key}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
              data={item}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        { activeChat.chatId !== undefined && <ChatWindow user={user} /> }

        { activeChat.chatId === undefined && <ChatIntro /> }
      </div>
    </div>
  );
}

export default App;
