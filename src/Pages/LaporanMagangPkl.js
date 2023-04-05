import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import SubmitBtn from "../Components/SubmitBtn"
import UploadBtn from "../Components/UploadBtn"
import ReactDatePicker from "../Components/DatePicker"

const LaporanMagangPkl = () => {
    return (
        <div className={`grid grid-cols-1 gap-4 ml-16 mr-10 mt-5 mb-40 pb-10 shadow-md rounded-md`}>
            <div className={`flex flex-col`}>
            <div className="flex flex-row items-center px-14 pt-5 pb-1 gap-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>Bilik Pengisian Laporan</p>
                </div>
                <p className={`font-poppins text-dark-blue text-sm font-thin px-14`}>Magang Pkl</p>
            </div>
            <div className="flex lg:flex-row sm:flex-col gap-8">
            <div className="flex flex-col px-14 w-full">
                <div>
                <p className={`font-poppins text-black`}>Kegiatan <span className="text-red">*</span></p>
                <input type="text" placeholder="contoh kegiatan" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none `} />
                </div>
                <p className={`font-poppins text-black pt-5`}>Penjelasan Singkat Kegiatan <span className="text-red">*</span></p>
                <textarea
                    className={`w-full font-poppins px-3 py-2 text-black border rounded-md outline-none my-2 text-sm`}
                    placeholder="contoh keterangan"
                />
            </div>
            <div className="w-full lg:pr-14 sm:px-14">
            <p className={`font-poppins text-black`}>Keterangan (Opsional) </p>
            <textarea
                className={`w-full font-poppins px-3 py-2 text-sm text-black border rounded-md outline-none my-2`}
                placeholder="contoh keterangan"
            />
            <div className="flex flex-row gap-4">
                <ReactDatePicker placeholder="Pilih Tanggal" starRightMargin={14} />
                <UploadBtn />
            </div>
            </div>
            </div>
            <SubmitBtn marginTop="4" />
        </div>
    )
}

export default LaporanMagangPkl