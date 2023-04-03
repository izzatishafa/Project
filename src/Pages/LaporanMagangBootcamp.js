import SelectStatus from "../Components/SelectStatus"
import SubmitBtn from "../Components/SubmitBtn"
import UploadBtn from "../Components/UploadBtn"
import ReactDatePicker from '../Components/DatePicker'

const LaporanMagangBootcamp = () => {
    return (
        <div className={`grid grid-cols-1 gap-4 ml-16 mr-10 mt-5 mb-40 pb-10 shadow-md rounded-md`}>
            <div className={`flex flex-col px-14 py-5`}>
                <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>Bilik Pengisian Laporan</p>
                <p className={`font-poppins text-dark-blue text-sm font-thin`}>Magang Bootcamp</p>
            </div>
            <div className="flex flex-row gap-4">
            <div className="flex flex-col px-14 w-full">
                <div>
                <p className={`font-poppins text-black`}>Task</p>
                <input type="text" placeholder="contoh kegiatan" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`} />
                </div>
                <p className={`font-poppins text-black pt-3`}>Status</p>
                <SelectStatus />
                <div className="flex flex-row gap-4 mt-3">
                    <ReactDatePicker placeholder="Pilih Tanggal"/>
                    <UploadBtn />
                </div>
                <div className="w-full mt-8">
                <p className={`font-poppins text-black`}>Keterangan (Opsional) </p>
                <textarea
                    className={`w-full font-poppins px-3 py-2 w-full text-sm text-black border rounded-md outline-none mt-2`}
                    placeholder="contoh keterangan"
                />
                </div>
            </div>
            <div className="flex flex-col px-10 w-full">
                <div>
                <p className={`font-poppins text-black`}>Nama Project</p>
                <input type="text" placeholder="contoh nama project" className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none `} />
                </div>
                <p className={`font-poppins text-black pt-5`}>Kendala</p>
                <textarea
                    className={`w-full font-poppins px-3 py-2 w-full text-black border rounded-md outline-none my-2 text-sm`}
                    placeholder="contoh uraian kendala"
                />
            </div>
            </div>
            <SubmitBtn marginTop="5" />
        </div>
    )
}

export default LaporanMagangBootcamp