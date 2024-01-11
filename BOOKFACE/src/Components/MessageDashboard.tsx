import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define a Conversation interface
interface Conversation {
  id: number;
  participants: string[];
}

const MessageDashboard: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    // Fetch the conversations from the JSON file
    fetch('http://localhost:3000/conversations')
      .then((response) => response.json())
      .then((data) => setConversations(data))
      .catch((error) => console.error('Error fetching conversations:', error));
  }, []);

  return (
    <div >
      <h2>Message Dashboard</h2>
      {conversations.map((conversation) => (
        <Link key={conversation.id} to={`/messages/${conversation.id}`}>
          <div>
            Conversation between: {conversation.participants.join(', ')}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MessageDashboard;
