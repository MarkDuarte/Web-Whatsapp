import './MessageItem.css';

export const MessageItem = ({ data, user }) => {
  return (
    <div className="messageLine" 
      style={{ 
        justifyContent: data.author === user.name ? 'flex-end' : 'flex-start' 
      }}
    >
      <div className="messageItem" 
        style={{ 
          backgroundColor: data.author === user.name ? '#DCF8C6' : '#FFF' 
          }} 
      >
        <div className="messageText">{data.body}</div>
        <div className="messageDate">19:00</div>
      </div>
    </div>
  )
};