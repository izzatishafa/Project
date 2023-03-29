import profile from '../Assets/pict2.jpg'


const Header = () => {
    return (
        <div className="w-4/5 h-28 py-4 px-10 flex justify-between">
            <div className={`font-bold font-poppins text-dark-blue text-3xl`}>Hello, Maccaroni El Matadore</div>
            <div className="flex flex-row">
                <div className={`flex flex-col text-s font-bold font-poppins text-right`}>
                <p>Mentor</p>
                <p>Front-End</p>
                </div>
                <img src={profile} alt="profile" className="rounded-full w-14 h-14 mx-2" />
            </div>
        </div>
    )
}

export default Header
