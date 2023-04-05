import SubmitBtn from '../Components/SubmitBtn'
import ReactDatePicker from '../Components/DatePicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const AgendaBaru = () => {
    return (
        <div className="grid grid-cols-1 gap-4 ml-16 mr-10 mt-5 pb-10 shadow-md rounded-md">
            <div className="flex flex-row items-center px-14 py-5 gap-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>Agenda Baru</p>
            </div>
            <div className="flex lg:flex-row sm:flex-col gap-4">
                <div className="flex flex-col px-14 w-full">
                    <div>
                    <p className={`font-poppins text-black`}>Agenda Kegiatan <span className="text-red">*</span></p>
                    <input type="text" placeholder="contoh kegiatan" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                    </div>
                    <div className="w-full pt-3">
                    <p className={`font-poppins text-black`}>Rincian Kegiatan <span className="text-red">*</span></p>
                    <textarea
                        className={`w-full font-poppins px-3 py-2 text-sm text-black border rounded-md outline-none mt-2`}
                        placeholder="contoh rincian kegiatan"
                    />
                </div>
                </div>
                <div className="flex flex-col px-14 w-full">
                <div>
                    <p className={`font-poppins text-black`}>Penerima <span className="text-red">*</span></p>
                    <input type="text" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                </div>
                <div>
                    <p className={`font-poppins text-black pt-2`}>PIC <span className="text-red">*</span></p>
                    <input type="text" placeholder="contoh nama pic" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-4 outline-none`} />
                </div>
                <ReactDatePicker placeholder="Pilih Tanggal" starRightMargin={14} />
            </div>
        </div>
            <SubmitBtn marginTop="5"/>
        </div>
    )
}

export default AgendaBaru