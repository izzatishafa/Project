import PasswordInput from '../Components/PasswordInput'

export default function FirstLogin () {
    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div className="flex flex-col px-44">
                    <h1 className="text-dark-blue text-[25px] text-left font-poppins font-black pb-1">Selamat Datang</h1>
                    <h2 className="text-dark-blue text-[15px] text-left font-poppins font-bold pb-5">Silahkan login untuk melanjutkan aktivitas</h2>
                    <label className="text-dark-blue font-poppins font-thin text-sm pb-1">Email</label>
                    <input type="email" placeholder="contoh email@gmail.com" className="bg-gray-100 font-poppins text-xs rounded-md p-2 mb-3 outline-none" />
                    <label className="text-dark-blue font-poppins font-thin text-sm pb-1">Password</label>
                    <PasswordInput />
                    <button className="bg-light-blue hover:bg-hv-light-blue p-1.5 text-md text-white font-poppins bold rounded-md my-3">Sign In</button>
                    <p className="text-center py-1 font-spectral text-[#22C1DC] hover:text-[#2dcee9] cursor-pointer">Forgot password?</p>
            </div>
        </div>
    )
} 