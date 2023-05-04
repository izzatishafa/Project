import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SelectStatus from "../Components/SelectStatus";
import UploadBtn from "../Components/UploadBtn";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Form, Formik } from "formik";
import { supabase } from "../supabaseClient";

const LaporanMagangBootcamp = () => {
  const history = useHistory();
  const handleSubmit = async (values) => {
    console.log(
      {
        title: values.task,
        status: values.status.value,
        desc: values.keterangan,
        project: values.nama_project,
        kendala: values.kendala,
        student_id: data.session.user.id,
      }
    )
    const { data } = await supabase.auth.getSession();
    const { error } = await supabase.from("student_assignment_report").insert({
      title: values.task,
      status: values.status.value,
      desc: values.keterangan,
      project: values.nama_project,
      kendala: values.kendala,
      student_id: data.session.user.id,
    });
    if (error === null) {
      history.push("/daily-report-magang");
    }
  };
  const handleGoBack = () => {
    history.push("/daily-report-magang");
  };

  return (
    <div
      className={`grid grid-cols-1 gap-4 mx-16 mr-10 mt-5 mb-40 pb-10 shadow-md rounded-md justify-center items-center`}
    >
      <div className={`flex flex-col`}>
        <div className="flex flex-row items-center px-14 pt-5 pb-1 gap-2">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={handleGoBack}
            className="hover:cursor-pointer"
          />
          <p
            className={`text-left text-lg text-dark-blue font-bold font-poppins`}
          >
            Bilik Pengisian Laporan
          </p>
        </div>
        <p className={`font-poppins text-dark-blue text-sm font-thin px-14`}>
          Magang Bootcamp
        </p>
      </div>
      <div className="flex lg:flex-row sm:flex-col px-14">
        <Formik
          initialValues={{
            task: "",
            status: "",
            keterangan: "",
            nama_project: "",
            kendala: "",
          }}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            handleBlur,
            values,
            handleChange,
            setFieldValue,
          }) => (
            <Form>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <label className={`font-poppins text-black`}>
                    Task <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="contoh kegiatan"
                    name="task"
                    onChange={handleChange}
                    value={values.task}
                    className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none`}
                  />
                  <label className={`font-poppins text-black pt-3`}>
                    Status <span className="text-red">*</span>
                  </label>
                  <SelectStatus
                    name="status"
                    onChange={(data) => setFieldValue("status", data)}
                    value={values.status}
                  />
                  <div className="flex flex-row gap-4 mt-3">
                    <UploadBtn />
                  </div>
                  <div className="w-full mt-8">
                    <label className={`font-poppins text-black`}>
                      Keterangan (Opsional){" "}
                    </label>
                    <textarea
                      className={`w-full font-poppins px-3 py-2 text-sm text-black border rounded-md outline-none mt-2`}
                      placeholder="contoh keterangan"
                      name="keterangan"
                      onChange={handleChange}
                      value={values.keterangan}
                    />
                  </div>
                </div>
                <div className="flex flex-col pl-28 w-full">
                  <div>
                    <label
                      className={`font-poppins text-black lg:pt-0 sm:pt-4`}
                    >
                      Nama Project <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="contoh nama project"
                      name="nama_project"
                      onChange={handleChange}
                      value={values.nama_project}
                      className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none `}
                    />
                  </div>
                  <label className={`font-poppins text-black pt-5`}>
                    Kendala <span className="text-red">*</span>
                  </label>
                  <textarea
                    className={`w-full font-poppins px-3 py-2 text-black border rounded-md outline-none my-2 text-sm`}
                    placeholder="contoh uraian kendala"
                    name="kendala"
                    onChange={handleChange}
                    value={values.kendala}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mx-22 bg-light-blue hover:bg-hv-light-blue p-1.5 text-md text-white font-poppins bold rounded-md mt-5"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LaporanMagangBootcamp;
