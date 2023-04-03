import profile from '../Assets/pict2.jpg'

const Notif = () => {
    return (
        <div className={`grid grid-cols-1 pl-6 p-3 m-2 border border-thin border-soft-gray border-t-0 border-r-0 border-l-0`}>
            <div className="flex flex-row items-center">
                <div>
                    <img src={profile} alt="..." className="rounded-full w-11 h-11 mr-5" />
                </div>
                <div>
                    <p className={`text-dark-gray font-poppins`}>Tole telah menyetujui laporan Anda “Brief pengerjaan project”</p>
                    <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>5 minutes ago</p>
                </div>
                </div>
        </div>
    )
}

export default Notif