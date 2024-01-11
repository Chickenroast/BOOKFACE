import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
interface Message {
  id: number;
  user: string;
  text: string;
}

interface User {
  userId: number;
  username: string;
  name: string;
  profilePhoto: string;
}

interface Conversation {
  id: number;
  participants: string[];
  messages: Message[];
}

const ConversationComponent: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { conversationId } = useParams<{ conversationId?: string }>();

  useEffect(() => {
    // Fetch conversations from the server
    fetch('http://localhost:3000/conversations')
      .then((response) => response.json())
      .then((data) => {
        setConversations(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching conversations');
        console.error('Error fetching conversations:', error);
        setLoading(false);
      });

    // Fetch users from the server
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError('Error fetching users');
        console.error('Error fetching users:', error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Find the selected conversation based on the URL parameter
  const selectedConversation = conversations.find((conv) => conv.id === parseInt(conversationId || '', 10));

  return (
    <div className='h-screen w-screen bg-beigel px-5'>
      {selectedConversation ? (
        <div key={selectedConversation.id}>
          <h2>Conversation {selectedConversation.id}</h2>
          {selectedConversation.participants.length > 0 ? (
            <div>
              {selectedConversation.messages
                .filter((message) => selectedConversation.participants.includes(message.user))
                .map((message) => {
                  const user = users.find((u) => u.username === message.user);
                  return (
                    <div key={message.id} className='flex items-center mt-10'>
                      {user && (
                        <>
                          <img src={user.profilePhoto} alt={user.username} className='h-10 w-10 rounded-full mr-5' />
                          <div className='bg-beiged w-80 rounded-3xl h-min py-5 flex items-center pl-4'>{message.text}</div>
                        </>
                      )}
                    </div>
                  );
                })}
            </div>
          ) : (
            <div>No messages in this conversation.</div>
          )}
        </div>
      ) : (
        <div>No conversation selected.</div>
      )}
      < Footer />
    </div>
  );
};

export default ConversationComponent;
