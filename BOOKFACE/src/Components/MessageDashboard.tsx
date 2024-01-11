// MessageDashboard.tsx Desktop
import React, { useState, useEffect } from "react";


export interface MessageDashboardProps {
  onConversationSelect: (conversationId: number) => void;
}

interface Conversation {
  id: number;
  participants: string[];
}

const MessageDashboard: React.FC<MessageDashboardProps> = ({
  onConversationSelect,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    // Fetch the conversations from the JSON file
    fetch("http://localhost:3000/conversations")
      .then((response) => response.json())
      .then((data) => setConversations(data))
      .catch((error) => console.error("Error fetching conversations:", error));
  }, []);

  return (
    <div className="bg-beiged rounded-2xl my-2">
      <h2>Message Dashboard dadadada</h2>
      {conversations.map((conversation) => (
        <div key={conversation.id}>
          <div onClick={() => onConversationSelect(conversation.id)}>
            Conversation between: {conversation.participants.join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageDashboard;
