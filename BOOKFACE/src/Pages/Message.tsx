// MessageDashboard.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
interface Conversation {
  id: number;
  participants: string[];
}

const MessageDashboard: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/conversations")
      .then((response) => response.json())
      .then((data) => setConversations(data))
      .catch((error) => console.error("Error fetching conversations:", error));
  }, []);

  return (
    <div className="lg:py-0 py-20 flex flex-col items-center lg:bg-brownl lg:rounded-2xl lg:my-2 lg:ml-4">
      {/* Searchbar user */}

      <div className="fixed top-0 left-0 right-0 bg-beiged w-screen h-14 flex items-center px-4 lg:hidden">
        <img src="logo.svg" alt="" className="w-12 h-12" />

        <div className="ml-4 flex-grow">
          <input
            type="text"
            placeholder="Search user..."
            className="w-full h-10 px-4 rounded-3xl bg-beigel focus:outline-none"
          />
        </div>
      </div>

      {/* Dashboard */}

      <h2 className="text-center  mb-2 lg:hidden">Message Dashboard</h2>
      {conversations.map((conversation) => (
        <Link key={conversation.id} to={`/conversation/${conversation.id}`}>
          <div className="bg-beiged w-96 lg:w-auto h-28 pl-2 rounded-2xl flex items-center mt-5 mx-5">
           <h1> Conversation between: {conversation.participants.join(", ")}</h1>
          </div>
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default MessageDashboard;
