// Home.tsx
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Post from '../Components/Post';
import postData from '../Components/Boss.json';
import NavTop from '../Components/NavTop';
import Footer from '../Components/Footer';
import MessageDashboard, { MessageDashboardProps } from '../Components/MessageDashboard';

import NavTopdesk from '../Components/NavTopdesk';
const Home: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

  // Use media query to determine if the screen size is desktop
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  // Handler for selecting a conversation
  const handleConversationSelect = (conversationId: number) => {
    setSelectedConversation(conversationId);
  };

  // MessageDashboardProps to pass the handler to MessageDashboard
  const messageDashboardProps: MessageDashboardProps = {
    onConversationSelect: handleConversationSelect,
  };

  return (
    <div className="h-min-[100vh] px-5 flex flex-col items-center lg:items-center lg:mx-28 py-16">
      <NavTop />
      <NavTopdesk />
      {/* Main content container */}
      <div className="flex">
        {/* Post components */}
        <div className="flex flex-col">
          {postData.map((post, index) => (
            <Post key={index} postData={post} />
          ))}
        </div>

        {/* MessageDashboard component */}
        <div className={isDesktop ? 'hidden lg:flex' : 'lg:hidden'}>
          {isDesktop ? (
            // For desktop, use the behavior with absolute positioning
            <MessageDashboard {...messageDashboardProps} />
          ) : (
            // For mobile, use the Link to navigate to the conversation
            <div className='hidden'>
            <Link to="/message">
            <MessageDashboard {...messageDashboardProps} />
            </Link></div>
          )}
        </div>

        {/* Render selected conversation details */}
        {selectedConversation !== null && isDesktop && (
          <div className="absolute top-0 left-0 bg-white p-5">
            {/* Render your conversation details here */}
            <p>Selected Conversation: {selectedConversation}</p>
            <button onClick={() => setSelectedConversation(null)}>Close Conversation</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
