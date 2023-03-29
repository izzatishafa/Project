import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import profile from '../Assets/pict2.jpg'
import upload from '../Assets/upload.png'
import DatePick from '../Components/DataPicker'


const PresensiSakit = () => {
    return (
        <div class={`grid grid-cols-1 gap-4 mx-20 my-10 pb-10 shadow-md rounded-md`}>
                <div className="">
                <div className="flex flex-row items-center px-14 py-5 gap-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>Bilik Presensi / Sakit</p>
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
                    <div className={`grid grid-cols-1 mt-8 mb-5 mx-16 gap-4 shadow-md rounded-md`}>
                        <p className={`font-poppins font-thin text-light-gray text-sm p-7`}>Lorem ipsum dolor sit amet consectetur. At in consectetur praesent cursus ultrices semper eu quis. Maecenas nisi
                        vivamus tortor tempor faucibus magna mattis iaculis. Nascetur hendrerit dignissim tincidunt scelerisque. Nunc sed
                        a vulputate mauris sed massa purus. Aenean dictum justo molestie proin pulvinar aliquet. Etiam magna sollicitudin
                        et etiam lacus aliquam id lacus. Vestibulum adipiscing nec luctus ac sem. Eget nulla tortor sit viverra feugiat nibh.
                        Tellus porta vivamus a blandit at nibh pharetra turpis nulla.
                        </p>
                    </div>
                    <div className="flex flex-row items-center px-16 gap-8">
                        <div className="flex flex-row items-center">
                            <button className={`flex items-center border border-t border-black rounded-md text-black text-md font-poppins bg-transparent appearance-none outline-none w-44 pl-6 pr-2 py-1`}>
                            Upload File
                            <img src={upload} alt="icon" className="ml-5 w-5 h-5" />
                            </button>
                        </div>
                        <DatePick />
                        <p className='text-2xl'>-</p>
                        <DatePick />
                        </div>
                        <div className="mx-16">
                        <button className={`text-white font-poppins bg-light-blue w-full rounded-md mb-3 mt-10 p-2 hover:bg-hv-light-blue`}>Submit</button>
                        </div>
                </div>
        </div>
    )
}

export default PresensiSakit