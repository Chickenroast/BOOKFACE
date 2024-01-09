// Home.tsx
import React from 'react';
import Post from '../Components/Post';
import postData from '../Components/Boss.json';
import NavTop from '../Components/NavTop';
import Footer from '../Components/Footer';
const Home: React.FC = () => {
  return (
    <div className='h-screen w-screen bg-beigel px-5 flex flex-col items-center overflow-y-auto overflow-x-hidden py-16'>
        <NavTop />
      {postData.map((post, index) => (
        <Post key={index} postData={post} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
