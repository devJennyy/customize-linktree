import { BsThreeDots } from 'react-icons/bs'
import './App.css'
import { RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';
import { FaFacebook, FaGithubAlt } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { ImWhatsapp } from 'react-icons/im';

function App() {

  return (
    <>
      <div className="h-full w-full flex justify-center md:py-4 bg-[url('/img/Background.png')] bg-cover">
        <div className="flex flex-col justify-center items-center gap-[30px] h-full md:w-[450px] w-full bg-[#161A42]/30 md:rounded-[24px] rounded-none relative">
          <img
            src="/img/Ornament.svg"
            className="absolute top-0 w-full"
          />
          {/* Profile Image */}
          <div className="flex justify-center md:mt-[-70px] mt-[-40px]">
            <img
              src="/img/Avatar.png"
              className="object-cover md:w-[130px] md:h-[130px] w-[110px] h-[110px] rounded-full"
            />
          </div>

          {/* Title Name */}
          <div className="text-white mt-[-10px]">
            <h1 className="md:text-[24px] text-[19px] font-semibold mb-1">Jenny Pieloor</h1>
            <p className="md:text-[15px] text-[12px] font-semibold">UI/UX DESIGNER</p>
          </div>

          {/* Icon Button Links */}
          <div className="flex flex-row justify-center items-center gap-8 text-white md:mb-4 mb-1">
            <button className=" z-[1] hover:scale-[1.4] transition-all">
              <FaFacebook className='md:text-[23px] text-[18px]'/>
            </button>

            <button className=" z-[1] hover:scale-[1.4] transition-all">
              <SiInstagram className='md:text-[23px] text-[18px]'/>
            </button>

            <button className=" z-[1] hover:scale-[1.4] transition-all">
              <RiTwitterXFill className='md:text-[23px] text-[18px]'/>
            </button>

            <button className=" z-[1] hover:scale-[1.4] transition-all">
              <ImWhatsapp className='md:text-[23px] text-[18px]' />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-center items-center md:gap-3 gap-2">
            <button className="text-white font-semibold md:text-[20px] text-[16px] border-2 md:w-[350px] w-[270px] md:h-[64px] h-[50px] border-[#495099] md:rounded-[16px] rounded-lg flex justify-between items-center px-[20px] hover:bg-[#495099] hover:scale-95 transition-all">
              <img src="/icons/Heart.svg" className="md:w-[18px] w-[14px] ml-[2px]" />
              <p>Portfolio</p> <BsThreeDots size={18} />
            </button>
            <button className="text-white font-semibold md:text-[20px] text-[16px] border-2 md:w-[350px] w-[270px] md:h-[64px] h-[50px] border-[#495099] md:rounded-[16px] rounded-lg flex justify-between items-center px-[20px] hover:bg-[#495099] hover:scale-95 transition-all">
              <RiLinkedinFill />
              <p>LinkedIn</p> <BsThreeDots size={18} />
            </button>
            <button className="text-white font-semibold md:text-[20px] text-[16px] border-2 md:w-[350px] w-[270px] md:h-[64px] h-[50px] border-[#495099] md:rounded-[16px] rounded-lg flex justify-between items-center px-[20px] hover:bg-[#495099] hover:scale-95 transition-all">
              <FaGithubAlt />
              <p>Github</p> <BsThreeDots size={18} />
            </button>
          </div>

          {/* Buy me coffee */}
          <div className="flex flex-col justify-center items-center">
            <img
              src="/icons/Coffee.png"
              className="md:w-[100px] w-[64px] md:mt-[60px]"
            />
            <p className="text-white font-semibold md:text-[16px] text-[12px] md:mt-[-20px] mt-[-15px]">
              Buy me coffee :&gt;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
