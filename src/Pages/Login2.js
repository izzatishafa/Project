import SubmitBtn from "../Components/SubmitBtn"
import BackBtn from "../Components/BackBtn"
import ProfilePicture from "../Components/ProfilePict"

export default function SecondLogin () {
    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div className="flex flex-col px-44 w-full">
                <h1 className="text-dark-blue text-[25px] text-left font-poppins font-black pb-1">Hello, Maccaroni</h1>
                <h2 className="text-dark-blue text-[15px] text-left font-poppins font-bold pb-5">Silahkan lengkapi identitas Anda</h2>
                <ProfilePicture />
                <label className="text-dark-blue font-poppins font-thin text-sm pb-1">No. Whatsapp</label>
                <input type="number" placeholder="08123456789" className="bg-gray-100 font-poppins text-xs rounded-md p-2 mb-3 outline-none" />
                <label className="text-dark-blue font-poppins font-thin text-sm pb-1">Asal Sekolah</label>
                <input type="email" placeholder="Contoh asal sekolah" className="bg-gray-100 font-poppins text-xs rounded-md p-2 mb-5 outline-none" /> 
            </div>
            <div className="px-24">
                <SubmitBtn />       
                <BackBtn /> 
            </div>
        </div>
    )
} 