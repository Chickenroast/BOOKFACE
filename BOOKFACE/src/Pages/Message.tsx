import Footer from '../Components/Footer'
function Message() {
  return (
    <div className='h-screen w-screen px-4 bg-beigel flex flex-col items-center overflow-y-auto overflow-x-hidden py-20'>
          <div className="fixed top-0 left-0 right-0 bg-beiged w-screen h-14 flex items-center px-4">
      <img src="logo.svg" alt="" className="w-12 h-12" />
      <div className="ml-4 flex-grow">
        <input
          type="text"
          placeholder="Search username..."
          className="w-full h-10 px-4 rounded-3xl bg-beigel focus:outline-none"
        />
      </div>
    </div>
      <div className=''></div>
        <div className='w-full h-24 bg-beiged rounded-2xl'>
          Mess
        </div>
      <Footer />
    </div>
  )
}

export default Message
