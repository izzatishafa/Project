import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import SelectStatus from "../Components/SelectStatus"
import SubmitBtn from "../Components/SubmitBtn"
import UploadBtn from "../Components/UploadBtn"
import ReactDatePicker from '../Components/DatePicker'
import { useHistory } from "react-router-dom";

const LaporanMagangBootcamp = () => {
    const history = useHistory();
    const handleSubmit = () => {
        
    }
    const handleGoBack = () => {
        history.push("/daily-report-magang");
    }
    return (
        <div className={`grid grid-cols-1 gap-4 ml-16 mr-10 mt-5 mb-40 pb-10 shadow-md rounded-md`}>
            <div className={`flex flex-col`}>
            <div className="flex flex-row items-center px-14 pt-5 pb-1 gap-2">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handleGoBack} className="hover:cursor-pointer"/>
                    <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>Bilik Pengisian Laporan</p>
                </div>
                <p className={`font-poppins text-dark-blue text-sm font-thin px-14`}>Magang Bootcamp</p>
            </div>
            <div className="flex lg:flex-row sm:flex-col">
            <div className="flex flex-col px-14 w-full">
                <div>
                <p className={`font-poppins text-black`}>Task <span className="text-red">*</span></p>
                <input type="text" placeholder="contoh kegiatan" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                </div>
                <p className={`font-poppins text-black pt-3`}>Status <span className="text-red">*</span></p>
                <SelectStatus />
                <div className="flex flex-row gap-4 mt-3">
                    <ReactDatePicker placeholder="Pilih Tanggal" starRightMargin={14} />
                    <UploadBtn />
                </div>
                <div className="w-full mt-8">
                <p className={`font-poppins text-black`}>Keterangan (Opsional) </p>
                <textarea
                    className={`w-full font-poppins px-3 py-2 text-sm text-black border rounded-md outline-none mt-2`}
                    placeholder="contoh keterangan"
                />
                </div>
            </div>
            <div className="flex flex-col lg:px-10 sm:px-14 w-full">
                <div>
                <p className={`font-poppins text-black lg:pt-0 sm:pt-4`}>Nama Project <span className="text-red">*</span></p>
                <input type="text" placeholder="contoh nama project" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none `} />
                </div>
                <p className={`font-poppins text-black pt-5`}>Kendala <span className="text-red">*</span></p>
                <textarea
                    className={`w-full font-poppins px-3 py-2 text-black border rounded-md outline-none my-2 text-sm`}
                    placeholder="contoh uraian kendala"
                />
            </div>
            </div>
            <SubmitBtn marginTop="5" />
        </div>
    )
}

export default LaporanMagangBootcamp