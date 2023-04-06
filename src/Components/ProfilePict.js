import profile from "../Assets/pict2.jpg"

export default function ProfilePicture() {
    return (
        <div className="relative flex justify-center items-center p-3">
            <img src={profile} className="rounded-full w-32 h-32 shadow-md object-cover" />
            <div className="absolute w-full h-full flex justify-center items-center">
                <div className="text-dark-blue text-center text-sm font-poppins font-bold
                bg-white bg-opacity-40 opacity-0 trasitio hover:opacity-100 p-11 rounded-full cursor-pointer">
                <p>Tambah Foto <br/>Profil</p>
                </div>
            </div>
            </div>
    )
}


