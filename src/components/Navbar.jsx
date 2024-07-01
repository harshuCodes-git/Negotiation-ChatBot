import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-100">
      <div className="flex flex-wrap   justify-center p-1 shadow-lg">
        <div className=" flex  bg-pink-300 pl-5 justify-start">
          <img
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt=""
            className="w-5 h-5 align-left "
          />
          Hii
        </div>
        <div className="flex flex-wrap align-center text-center  border-zinc-100 rounded-se-s   rounded-full shadow-2xl bg-black">
          <li className="p-2 pt-1  text-white  border-[white] list-none shadow-lg shadow-blue-100 hover:shadow-blue-500 ">
            Home
          </li>
          <li className="p-2  pt-1 hover:bg-slate-900 text-white border-[white] list-none">
            About
          </li>
          <li
            className="p-2  pt-1 hover:bg-slate-900 text-white  border-[white] 
           list-none"
          >
            Connect
          </li>
          <li className="p-2  pt-1 text-white  border-[white] list-none">
            Carrer
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar