
import Lottie from 'lottie-react';
import animationData from '../assets/404.json';
function Error404() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
       <Lottie
      animationData={animationData}
      className='h-96 w-96 lg:h-[80%] lg:w-[80%]'
    />
      <h1 className='text-3xl lg:text-5xl lg:absolute bottom-12 text-brownl'>404 PAGE NOT FOUND</h1>
    </div>
  )
}

export default Error404
