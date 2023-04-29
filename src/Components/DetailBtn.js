import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";
import AgreeBtn from "./AgreeBtn";
import DenyBtn from "./DenyBtn";
import moment from "moment";
import {title} from "case";

Modal.setAppElement("#root"); // untuk mengatur elemen HTML tempat di mana modal akan dirender

export default function DetailBtn({ onClick, data }) {
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
              <h1
                className={`text-center text-xl text-dark-blue font-bold font-poppins pt-5 pb-2`}
              >
                {data.title}
              </h1>
              <button className="py-6 px-7 flex rounded" onClick={toggleModal}>
                <CgCloseR />
              </button>
            </div>
            <h2
              className={`text-center text-md text-dark-blue font-bold font-poppins`}
            >
              {data.project}
            </h2>
            <div className="flex flex-row gap-3 text-left pt-7 pb-1.5 pl-10">
              <p className="text-dark-blue font-thin font-poppins">
                {moment(data.created_at).format("DD MMM YYYY")}
              </p>
              <p
                className={
                  (data.status === "DONE"
                    ? "text-teal-800 bg-teal-200"
                    : data.status === "ON_PROGRESS"
                    ? "text-yellow-800 bg-yellow-200"
                    : data.status === "PENDING"
                    ? "text-rose-800 bg-rose-200"
                    : "text-blue-800 bg-blue-200") +
                  " text-xs px-2 py-1 rounded-full font-bold font-poppins"
                }
              >
                {title(data.status)}
              </p>
            </div>
            {data.position === "PKL" && <p className="text-left text-dark-blue font-bold font-poppins pb-10 pl-10">
              {data.desc}
            </p> }
            
            <div className="flex flex-row items-center justify-center gap-4 pb-5">
              {JSON.parse(data.lampiran).map((item, i) => (
                <img
                  src={item}
                  key={`img-${i}`}
                  className="w-[400px] h-[250px]"
                />
              ))}
            </div>
            {
              data.position === "Bootcamp" && <p className="text-left text-dark-blue font-bold font-poppins pb-5 pl-10">
              {data.kendala}
            </p>
            }
            
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
