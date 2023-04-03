import logo from '../Assets/logo.png'

export default function Header() {
    return (
        <div className={`w-64 py-1 px-7 flex flex-row items-center bg-dark-blue rounded-br-lg`}>
                <div>
                    <img src={logo} alt="logo" className="pr-5 w-16"/>
                </div>
                <div className={`text-white text-left text-md flex flex-col font-patua`}>
                    <p>INTERN</p>
                    <p>MANAGEMENT</p>
                </div>
            </div>
    )
}