// Home.tsx

import Post from "../Components/Post";
import postData from "../Components/Boss.json";
import NavTop from "../Components/NavTop";
import Footer from "../Components/Footer";
import MessageDashboard from "./Message";
import NavTopdesk from "../Components/NavTopdesk";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center pt-16 lg:mx-28 overflow-scroll lg:overflow-hidden">
      <NavTop />
      < NavTopdesk />
    

      {/* Main content container */}

      <main className="flex flex-row w-full ">
        
        <div className="flex lg:w-[70vw] ">
          
          {/* Post components */}
          <div className="flex lg:h-[92vh] flex-col  w-full scrollbar-none overflow-y-scroll">
            {postData.map((post, index) => (
              <Post key={index} postData={post} />
            ))}
          </div>
        </div>

        {/* Dashboard Chat */}
    
        <aside className="hidden w-[30vw] lg:flex overflow-hidden">
          <MessageDashboard />
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
