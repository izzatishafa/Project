import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { CgCloseR } from 'react-icons/cg'
import dokumentasi1 from '../Assets/bootcamp.png'
import dokumentasi2 from '../Assets/bootcamp.png'
import dokumentasi3 from '../Assets/pkl.png'
import dokumentasi4 from '../Assets/pkl.png'
import AgreeBtn from './AgreeBtn'
import DenyBtn from './DenyBtn'


Modal.setAppElement('#root');

export default function DetailBtn({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-row justify-center p-2">
      <button
        onClick={toggleModal}
        className={`bg-cyan w-[45px] text-white px-2 py-1 rounded-md  hover:bg-hv-cyan relative z-9`}
        >

        <FontAwesomeIcon icon={faCircleInfo} className="px-1" />
      </button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal} className="Modal">
        <div className="flex justify-center mt-20 ml-72">
        <div className="flex flex-col bg-white rounded shadow-lg w-[900px] h-[550px] z-10">
            <div className="flex flex-row justify-end gap-[255px]">
            <h1 className={`text-center text-xl text-dark-blue font-bold font-poppins pt-5 pb-2`}>Brief Pengerjaan Project</h1>
            <button
            className="py-6 px-7 flex rounded"
            onClick={toggleModal}
          >
            <CgCloseR />
          </button>
            </div>
            <h2 className={`text-center text-md text-dark-blue font-bold font-poppins`}>PB Taxand</h2>
            <div className="flex flex-row gap-3 text-left pt-7 pb-1.5 pl-10">
                <p className="text-dark-blue font-thin font-poppins">4/3/2023</p>
                <p className="text-dark-blue font-bold font-poppins">On Progress</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 pb-5">
                <img src={dokumentasi1} className="w-[400px] h-[250px]" />
                <img src={dokumentasi2} className="w-[400px] h-[250px]" />
            </div>
            <p className="text-left text-dark-blue font-bold font-poppins pb-10 pl-10">Kendala: -</p>
            <div className="flex flex-row justify-center items-center gap-3 pb-5">
                <AgreeBtn />
                <DenyBtn />
            </div>
        </div>
        </div>
        {/* <div className="flex justify-center mt-20 ml-72">
        <div className="flex flex-col bg-white rounded shadow-lg w-[900px] h-[550px] z-10">
            <div className="flex flex-row justify-end gap-[310px]">
            <h1 className={`text-center text-lg text-dark-blue font-bold font-poppins pt-5 pb-2`}>Testing Taxand</h1>
            <button
            className="py-6 px-7 flex rounded"
            onClick={toggleModal} 
          >
            <CgCloseR className="hover:bg-slate-200"/>
          </button>
            </div>
            <div className="flex flex-row gap-3 text-left pt-3 pb-1.5 pl-10">
                <p className="text-dark-blue font-thin font-poppins text-sm">4/3/2023</p>
                <p className="text-dark-blue font-bold font-poppins text-sm">On Progress</p>
            </div>
            <p className="pb-5 px-10 text-xs text-dark-blue font-bold font-poppins">Lorem ipsum dolor sit amet consectetur. Quis aliquet molestie velit nibh egestas mi vestibulum.
                Elementum euismod pretium nisi convallis molestie. Maecenas fringilla bibendum neque scelerisque
                pretium lobortis feugiat viverra aliquet. Venenatis luctus proin tempor accumsan ac sapien tortor
                non phasellus. Sollicitudin adipiscing orci ullamcorper pulvinar diam purus diam. Etiam nec pretium
                egestas eget. Quisque dui vitae ornare placerat id ultrices donec sed mattis. Aliquet ipsum augue
                faucibus fusce.</p>
            <div className="flex flex-row items-center justify-center gap-4 pt-8 pb-5">
                <img src={dokumentasi3} className="w-[400px] h-[250px]" />
                <img src={dokumentasi4} className="w-[400px] h-[250px]" />
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
                <AgreeBtn />
                <DenyBtn />
            </div>
        </div>
        </div> */}
      </Modal>
    </div>
  );
}
