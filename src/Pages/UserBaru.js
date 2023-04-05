import SubmitBtn from '../Components/SubmitBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import SelectCategory from '../Components/SelectCategory'

const UserBaru = () => {
    return (
        <div className="grid grid-cols-1 gap-4 ml-16 mr-10 mt-5 pb-10 shadow-md rounded-md">
            <div className="flex flex-row items-center px-14 py-5 gap-2">
                <FontAwesomeIcon icon={faChevronLeft} />
                <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>User Baru</p>
            </div>
            <div className="flex lg:flex-row sm:flex-col gap-4">
                <div className="flex flex-col px-14 w-full">
                        <p className={`font-poppins text-black pt-2`}>Nama Lengkap <span className="text-red">*</span></p>
                        <input type="text" placeholder="contoh nama lengkap" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                        <p className={`font-poppins text-black pt-2`}>Kategori <span className="text-red">*</span></p>
                        <SelectCategory />
                        <p className={`font-poppins text-black pt-2`}>Username <span className="text-red">*</span></p>
                        <input type="text" placeholder="contoh username" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                        <p className={`font-poppins text-black pt-2`}>Password <span className="text-red">*</span></p>
                        <input type="password" placeholder="contoh password" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                </div>
                <div className="flex flex-col px-14 w-full">
                        <p className={`font-poppins text-black lg:pt-2 sm:pt-0`}>Email Aktif</p>
                        <input type="email" placeholder="contoh email@gmail.com" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                        <p className={`font-poppins text-black pt-2`}>No. Whatsapp</p>
                        <input type="text" placeholder="08123456789" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                        <p className={`font-poppins text-black pt-2`}>Asal Sekolah</p>
                        <input type="password" placeholder="contoh nama sekolah" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                </div>
            </div>
            <SubmitBtn />
        </div>
    )
}

export default UserBaru