// Home.tsx

import Post from "../Components/Post";
import postData from "../Components/Boss.json";
import NavTop from "../Components/NavTop";
import Footer from "../Components/Footer";
import MessageDashboard from "./Message";
import NavTopdesk from "../Components/NavTopdesk";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center  overflow-y-scroll pt-16 lg:mx-28 lg:overflow-hidden">
      <NavTop />
      <NavTopdesk />

      {/* Main content container */}

      <main className="flex w-full flex-row justify-center">
        <div className="flex lg:w-[70vw] ">
          {/* Post components */}
          <div className="scrollbar-none flex w-full flex-col lg:h-[90vh] lg:overflow-y-scroll">
            {postData.map((post, index) => (
              <Post key={index} postData={post} />
            ))}
          </div>
        </div>

        {/* Dashboard Chat */}

        <aside className="hidden w-[30vw] overflow-hidden lg:flex">
          <MessageDashboard />
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
