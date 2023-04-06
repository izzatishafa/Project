import logo from '../Assets/logo-login.png'
import PasswordInput from '../Components/PasswordInput'
import FirstLogin from './Login1'
import SecondLogin from './Login2'
import ThirdLogin from './Login3'



export default function Login () {
    return (
        <section className="flex flex-row">
            <div className="w-full h-screen flex flex-col justify-center items-center bg-dark-blue gap-[20px] desktop-only">
                <h1 className="text-white text-[30px] font-patua">INTERN MANAGEMENT</h1>
                <img src={logo} alt="" className="w-[250px] h-[300px]" />
            </div>
            {/* <FirstLogin /> */}
            {/* <SecondLogin /> */}
            {/* <ThirdLogin /> */}
        </section>
    )
}