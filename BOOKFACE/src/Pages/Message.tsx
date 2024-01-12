import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";

interface Conversation {
  id: number;
  participants: string[];
  messages: {
    id: number;
    user: string;
    text: string;
  }[];
}

interface User {
  username: string;
  profilePhoto: string;
}

const MessageDashboard: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [isConversationOpen, setIsConversationOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/conversations")
      .then((response) => response.json())
      .then((data) => setConversations(data))
      .catch((error) => console.error("Error fetching conversations:", error));

    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const isMobile = window.innerWidth <= 768;
  const loggedInUsername = "aliceee";
  const handleConversationClick = (conversation: Conversation) => {
    if (isMobile) {
      window.location.href = `/conversation/${conversation.id}`;
    } else {
      setSelectedConversation(conversation);
      setIsConversationOpen(true);
    }
  };

  const closeConversation = () => {
    setSelectedConversation(null);
    setIsConversationOpen(false);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center overflow-x-hidden bg-beiged py-20 lg:my-2 lg:w-full lg:rounded-2xl lg:bg-beiged lg:py-0 lg:shadow-md">
      <div className="fixed left-0 right-0 top-0 flex h-14 w-screen items-center bg-beigel px-4 lg:hidden">
        <img src="logo.svg" alt="" className="h-12 w-12" />
        <div className="ml-4 flex-grow">
          <input
            type="text"
            placeholder="Search user..."
            className="h-10 w-full rounded-3xl bg-beiged px-4 focus:outline-none"
          />
        </div>
      </div>

      <h2 className="mb-2 text-center lg:hidden">Message Dashboard</h2>
      {conversations.map((conversation) => (
        <div
          className=""
          key={conversation.id}
          onClick={() => handleConversationClick(conversation)}
        >
          <div className="mx-5 mt-5 flex h-28 w-96 items-center rounded-2xl bg-beigel pl-2 shadow-md">
            <h1>
              Conversation between: {conversation.participants.join(", ")}
            </h1>
          </div>
        </div>
      ))}

      {!isMobile && selectedConversation && isConversationOpen && (
        <div className="absolute rounded-2xl left-20 h-full w-[64%] bg-beiged text-brownl overflow-y-auto">
          <button
            className="text-brownl absolute right-5 ml-2 mt-2 p-3 rounded-full bg-beigel"
            onClick={closeConversation}
          >
            x
          </button>

          <div className="p-4">
            <h1>Conversation details for {selectedConversation.id}</h1>
            {selectedConversation.messages &&
            selectedConversation.messages.length > 0 ? (
              selectedConversation.messages.map((message) => {
                const user = users.find((u) => u.username === message.user);
                const isCurrentUser =
                  user && user.username === loggedInUsername;

                return (
                  <div
                    key={message.id}
                    className={`mt-2 flex items-center ${
                      isCurrentUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    {user && (
                      <>
                        <div
                          className={`flex flex-row items-center rounded-2xl p-2 ${
                            isCurrentUser
                              ? "flex-row-reverse text-right"
                              : "text-left"
                          }`}
                        >
                          <img
                            src={user.profilePhoto}
                            className={`${
                              isCurrentUser
                                ? "hidden"
                                : "flex h-12 w-12 rounded-full object-cover"
                            }`}
                          />
                          <p
                            className={`m-2 mb-10 bg-beigel px-5 py-2 text-lg shadow-md  ${
                              isCurrentUser
                                ? "rounded-l-full rounded-t-full"
                                : "rounded-r-full rounded-t-full  bg-brownd text-beigel"
                            }`}
                          >
                            {`${message.text}`}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })
            ) : (
              <div>No messages in this conversation.</div>
            )}

            <input
              type="text"
              placeholder="Type a message"
              className="absolute bottom-5 h-10 w-[95%] rounded-full self-center bg-brownd p-5 text-beiged placeholder-beigel"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MessageDashboard;
