// ConversationModal.tsx
import React from 'react';

interface ConversationModalProps {
  onClose: () => void;
  selectedConversation: Conversation | null;
}

const ConversationModal: React.FC<ConversationModalProps> = ({ onClose, selectedConversation }) => {
  if (!selectedConversation) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">{`Conversation ${selectedConversation.id}`}</h2>
        {selectedConversation.participants.length > 0 ? (
          <div>
            {selectedConversation.messages.map((message) => (
              <div key={message.id}>
                <strong>{message.user}</strong>: {message.text}
              </div>
            ))}
          </div>
        ) : (
          <div>No messages in this conversation.</div>
        )}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ConversationModal;
