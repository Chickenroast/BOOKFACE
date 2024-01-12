// Home.tsx

import Post from "../Components/Post";
import postData from "../Components/Boss.json";
import NavTop from "../Components/NavTop";
import Footer from "../Components/Footer";
import MessageDashboard from "./Message";

import NavTopdesk from "../Components/NavTopdesk";
const Home: React.FC = () => {
  return (
    <div className="h-max-[100vh] flex flex-col items-center  py-16 lg:mx-32 lg:items-center">
      <NavTop />
      <NavTopdesk />

      {/* Main content container */}

      <main className="flex flex-row w-full">
        <div className="flex">
          {/* Post components */}
          <div className="flex flex-col">
            {postData.map((post, index) => (
              <Post key={index} postData={post} />
            ))}
          </div>
        </div>

        {/* Dashboard Chat */}

        <aside className="hidden lg:flex w-full">
          <MessageDashboard />
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
