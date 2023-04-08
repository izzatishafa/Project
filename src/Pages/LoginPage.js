import logo from '../Assets/logo-login.png';
import PasswordInput from '../Components/PasswordInput';
import ProfilePicture from '../Components/ProfilePict';
import SubmitBtn from "../Components/SubmitBtn"
import BackBtn from "../Components/BackBtn"
import { useState } from 'react';



export default function LoginPage () {

  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  }

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1);
  }

  let content ;
  switch (currentSlide) {
    case 1: 
    content = (
      <div className="w-full h-screen flex flex-col justify-center">
          <div className="flex flex-col px-44">
            <h1 className="text-dark-blue text-[25px] text-left font-poppins font-black pb-1">Selamat Datang</h1>
            <h2 className="text-dark-blue text-[15px] text-left font-poppins font-bold pb-8">Silahkan login untuk melanjutkan aktivitas</h2>
            <label className="text-dark-blue font-poppins font-thin text-sm pb-1">Email</label>
            <input type="email" placeholder="contoh email@gmail.com" className="bg-gray-100 font-poppins text-xs rounded-md p-2 mb-3 outline-none" />
            <label className="text-dark-blue font-poppins font-thin text-sm pb-1">Password</label>
            <PasswordInput />
            <button onClick={handleNext} className="bg-light-blue hover:bg-hv-light-blue p-1.5 text-md text-white font-poppins bold rounded-md my-5 mb-3">Sign In</button>
            <p className="text-center py-1 font-spectral text-[#22C1DC] hover:text-[#2dcee9] cursor-pointer">Forgot password?</p>
          </div>
        </div>
    );
    break;
    case 2: 
    content = (
      <div className="w-full h-screen flex flex-col justify-center">
          <div className="flex flex-col px-44 w-full">
            <h1 className="text-dark-blue text-[25px] text-left font-poppins font-black pb-1">Hello, Maccaroni</h1>
            <h2 className="text-dark-blue text-[15px] text-left font-poppins font-bold pb-5">Silahkan lengkapi identitas Anda</h2>
            <ProfilePicture />
            <label className="text-dark-blue font-poppins font-thin text-sm pb-1">No. Whatsapp</label>
            <input type="text" placeholder="08123456789" className="appearance-none leading-tight focus:outline-none bg-gray-100 font-poppins text-xs rounded-md p-2 mb-3 outline-none" />
            <label className="text-dark-blue font-poppins font-thin text-sm pb-1">Asal Sekolah</label>
            <input type="email" placeholder="Contoh asal sekolah" className="bg-gray-100 font-poppins text-xs rounded-md p-2 mb-5 outline-none" /> 
          </div>
          <div className="px-24">
            <SubmitBtn onClick={handleNext} text="Submit" marginTop={8} />       
            <BackBtn onClick={handlePrev} /> 
          </div>
        </div>
    );
    break;
    case 3:
      content = (
        <div className="w-full h-screen flex flex-col justify-center">
                <div className="flex flex-col px-44 w-full">
                    <label className="text-dark-blue font-poppins font-thin text-sm pb-2">Password Baru</label>
                    <PasswordInput />
                    <label className="text-dark-blue font-poppins font-thin text-sm py-2">Konfirmasi password Baru</label>
                    <PasswordInput />
                </div>
                <div className="px-24">
                <SubmitBtn onClick={handleNext} text="confirm"/>
                <BackBtn onClick={handlePrev} />
                </div>
            </div>
      )
  }


    return (
      <section className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 h-screen flex flex-col justify-center items-center bg-dark-blue gap-[20px] desktop-only">
        <h1 className="text-white text-[30px] font-patua">INTERN MANAGEMENT</h1>
        <img src={logo} alt="" className="w-[250px] h-[300px]" />
      </div>
      <div className="lg:w-1/2 h-screen flex flex-col justify-center items-center">
        {content}
      </div>
    </section>
    )
}