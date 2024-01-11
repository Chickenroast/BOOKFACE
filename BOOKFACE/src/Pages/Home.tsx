import React from "react";
import Post from "../Components/Post";
import postData from "../Components/Boss.json";
import NavTop from "../Components/NavTop";
import Footer from "../Components/Footer";
import MessageDashboard from "./Message";
import NavTopdesk from "../Components/NavTopdesk";
import ConversationComponent from "./Conversation";
const Home: React.FC = () => {
  return (
    <div className="h-min-[100vh] px-5 flex flex-col items-center lg:items-start lg:mx-28 py-16">
      <NavTop />
      <NavTopdesk />
      {/* Create a new container with flex property for Post and MessageDashboard */}
      <div className="flex">
        {/* Post components */}
        <div className="flex flex-col">
          {postData.map((post, index) => (
            <Post key={index} postData={post} />
          ))}
        </div>

        {/* MessageDashboard component */}

    <div className="hidden lg:flex">
      < MessageDashboard /></div>
      </div>
      <Footer />
      <ConversationComponent />
    </div>
  );
};

export default Home;
