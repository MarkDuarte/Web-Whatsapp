import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

import { MessageItem } from './MessageItem';

import avatar from '../images/avatar2.jpeg';

import './ChatWindow.css';

export const ChatWindow = ({ user }) => {

  const body = useRef();

  let recognition = null; 
  let SpeechRecognition = window.SpeechRecognition 
  || window.webkitSpeechRecognition;

  if (SpeechRecognition) recognition = new SpeechRecognition();

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([ 
    { author: 'Kapivara', body: 'Dae kapiva, blz ?'}, 
    { author: 'Marcola', body: 'Fala Costa Larga, suavidade pura, e você'}, 
    { author: 'Kapivara', body: 'só de boas'}
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list])

  const handleEmojiPicker = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleMicClick = () => {
    if (recognition) {

      recognition.onstart = () => {
        setListening(true)
      }

      recognition.onend = () => {
        setListening(false)
      }

      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript)
      }

      recognition.start();
    }
  }

  const handleIconClick = () => {

  }

  return (
    <div className="chatWindow">

    <div className="chatWindow-header">

      <div className="chatWindow-headerinfo">
        <img src={avatar} className="chatWindow-avatar" alt="Foto" />
        <div className="chatWindow-name">Kapiva Loko</div>
      </div>

      <div className="chatWindow-headerbuttons">

        <div className="chatWindow-btn">
          <SearchIcon style={{ color: '#919191' }} />
        </div>

        <div className="chatWindow-btn">
          <AttachFileIcon style={{ color: '#919191' }} />
        </div>

        <div className="chatWindow-btn">
          <MoreVertIcon style={{ color: '#919191' }} />
        </div>

      </div>

    </div>  
      <div ref={body} className="chatWindow-body">
        {list.map((item, key) => (
          <MessageItem
            key={key}
            data={item} 
            user={user}
          />
        ))}
      </div>

      <div className="chatWindow-emojiarea" style={{ height: emojiOpen ? '200px' : '0px' }}>
        <EmojiPicker
          disableSkinTonePicker
          disableSearchBar
          onEmojiClick={handleEmojiPicker} 
        />
      </div>

      <div className="chatWindow-footer">

        <div className="chatWindow-pre">

          <div 
            className="chatWindow-btn" 
            onClick={() => setEmojiOpen(false)}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatWindow-btn" onClick={() => setEmojiOpen(true)}>
            <InsertEmoticonIcon style={{ color: emojiOpen ? '#4D4D' : '#919191' }} />
          </div>
        </div>

        <div className="chatWindow-inputarea">
          <input 
            type="text" 
            className="chatWindow-input"
            placeholder="Digite uma mensagem" 
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="chatWindow-pos">
          { text === '' && 
          <div onClick={handleMicClick} className="chatWindow-btn">
            <MicIcon style={{ color: listening ? '#126ECE' : '#919191' }} />
          </div>
          }

          {text !== '' &&
          <div onClick={handleIconClick} className="chatWindow-btn">
            <SendIcon style={{ color: '#919191' }} />
          </div>
          }        
        </div>

      </div>
    </div>
  )
}