// Home.tsx

import Post from "../Components/Post";
import postData from "../Components/Boss.json";
import NavTop from "../Components/NavTop";
import Footer from "../Components/Footer";
import MessageDashboard from "./Message";
import NavTopdesk from "../Components/NavTopdesk";
import CookieBanner from "../Components/Cookies";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center py-[150px] lg:pb-0 overflow-y-scroll pt-16 lg:mx-28 lg:overflow-hidden">
      <NavTop />
      <NavTopdesk />

      {/* Main content container */}

      <main className="flex w-full flex-row justify-center">
        <div className="flex lg:w-[70vw] ">
          {/* Post components */}

          <div className="flex w-full flex-col scrollbar-none lg:h-[90vh] lg:overflow-y-scroll">

          <div className="scrollbar-none flex w-full flex-col lg:h-[90vh] overflow-hidden lg:overflow-y-scroll">

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
      <CookieBanner />
    </div>
  );
};

export default Home;
