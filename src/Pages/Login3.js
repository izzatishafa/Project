import SubmitBtn from "../Components/SubmitBtn"
import BackBtn from "../Components/BackBtn"
import PasswordInput from "../Components/PasswordInput"

export default function ThirdLogin () {
    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div className="flex flex-col px-44 w-full">
                <label className="text-dark-blue font-poppins font-thin text-sm pb-2">Password Baru</label>
                <PasswordInput />
                <label className="text-dark-blue font-poppins font-thin text-sm py-2">Konfirmasi password Baru</label>
                <PasswordInput />
            </div>
            <div className="px-24">
                <SubmitBtn text="Confirm" marginTop={8} />       
                <BackBtn /> 
            </div>
        </div>
    )
} 