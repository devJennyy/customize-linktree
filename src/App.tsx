import { BsThreeDots } from 'react-icons/bs'
import './App.css'
import { RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';
import { FaFacebook, FaGithubAlt } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { ImWhatsapp } from 'react-icons/im';

function App() {

  return (
    <>
      <div className="h-full w-full flex justify-center py-4 bg-[url('/img/Background.png')] bg-cover">
        <div className="flex flex-col justify-center items-center gap-[30px] h-full w-[450px] bg-[#161A42]/30 rounded-[24px] relative">
          <img
            src="img/Ornament.svg"
            className="absolute top-0 w-full"
          />
          {/* Profile Image */}
          <div className="flex justify-center mt-[-70px]">
            <img
              src="img/Avatar.png"
              className="object-cover w-[130px] h-[130px] rounded-full"
            />
          </div>

          {/* Title Name */}
          <div className="text-white mt-[-10px]">
            <h1 className="text-[24px] font-semibold mb-1">Jenny Pieloor</h1>
            <p className="text-[15px] font-semibold">UI/UX DESIGNER</p>
          </div>

          {/* Icon Button Links */}
          <div className="flex flex-row justify-center items-center gap-8 text-white mb-4">
            <button className=" z-[1] hover:scale-[1.4] transition-all">
              <FaFacebook size={23} />
            </button>

            <button className=" z-[1] hover:scale-[1.4] transition-all">
              <SiInstagram size={23} />
            </button>

            <button className=" z-[1] hover:scale-[1.4] transition-all">
              <RiTwitterXFill size={23} />
            </button>

            <button className=" z-[1] hover:scale-[1.4] transition-all">
              <ImWhatsapp size={23} />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-center items-center gap-3">
            <button className="text-white font-semibold text-[20px] border-2 w-[350px] h-[64px] border-[#495099] rounded-[16px] flex justify-between items-center px-[20px] hover:bg-[#495099] hover:scale-95 transition-all">
              <img src="icons/Heart.svg" className="w-[18px] ml-[2px]" />
              <p>Portfolio</p> <BsThreeDots size={18} />
            </button>
            <button className="text-white font-semibold text-[20px] border-2 w-[350px] h-[64px] border-[#495099] rounded-[16px] flex justify-between items-center px-[20px] hover:bg-[#495099] hover:scale-95 transition-all">
              <RiLinkedinFill />
              <p>LinkedIn</p> <BsThreeDots size={18} />
            </button>
            <button className="text-white font-semibold text-[20px] border-2 w-[350px] h-[64px] border-[#495099] rounded-[16px] flex justify-between items-center px-[20px] hover:bg-[#495099] hover:scale-95 transition-all">
              <FaGithubAlt />
              <p>Github</p> <BsThreeDots size={18} />
            </button>
          </div>

          {/* Buy me coffee */}
          <div className="flex flex-col justify-center items-center">
            <img
              src="icons/Coffee.png"
              className="w-[100px] mt-[60px]"
            />
            <p className="text-white font-semibold mt-[-20px]">
              Buy me coffee :&gt;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
