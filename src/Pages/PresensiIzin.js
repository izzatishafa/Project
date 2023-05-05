import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import profile from '../Assets/pict2.jpg'
import upload from '../Assets/upload.png'
import SubmitBtn from '../Components/SubmitBtn'
import ReactDatePicker from '../Components/DatePicker'
import { useHistory } from "react-router-dom"


const PresensiIzin = () => {
    const history = useHistory();
    const handleGoBack = () => {
        history.push("/attendance-list");
    }
    return (
        <div className={`grid grid-cols-1 gap-4 ml-16 mr-10 mt-5 pb-10 shadow-md rounded-md`}>
                <div className="">
                <div className="flex flex-row items-center px-14 py-5 gap-2">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handleGoBack} className="hover:cursor-pointer" />
                    <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>Bilik Presensi / Izin</p>
                </div>
                <div className="flex flex-row items-center px-10">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-extrathin`}>Magang Bootcamp</p>
                    </div>
                    </div>
                    <div className={`grid grid-cols-1 mt-8 mb-5 mx-16 gap-4 shadow-lg rounded-md`}>
                        <textarea
                        className={`w-full placeholder-font-poppins px-3 py-2 text-black border rounded-md outline-none`}
                        placeholder="Masukkan Pesan..."
                        required
                        />
                    </div>
                    <div className="flex flex-row items-center px-16">
                        <div className="flex flex-row items-center gap-4">
                        <ReactDatePicker placeholder="Pilih Tanggal" starRightMargin={14} />
                        <p className='text-2xl'>-</p>
                        <ReactDatePicker placeholder="Sampai Tanggal" starRightMargin={11} />
                        </div>
                        </div>
                        <SubmitBtn marginTop="5" />
                </div>
        </div>
    )
}

export default PresensiIzin