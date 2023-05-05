import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SubmitBtn from "../Components/SubmitBtn";
import UploadBtn from "../Components/UploadBtn";
import { useHistory } from "react-router-dom";
import { Form, Formik } from "formik";
import { supabase } from "../supabaseClient";

const LaporanMagangPkl = () => {
  const history = useHistory();
  const handleSubmit = async (values) => {
    console.log("clicked");
    const { data } = await supabase.auth.getSession();
    const { error } = await supabase.from("intern_assignment").insert({
      activity: values.activity,
      desc: values.desc,
      keterangan: values.keterangan,
      student_id: data.session.user.id,
    });
    history.push("/daily-report-pkl");
    if (error === null) {
      history.push("/daily-report-pkl");
    }
  };

  const handleGoBack = () => {
    history.push("/daily-report-pkl");
  };
  return (
    <div
      className={`grid grid-cols-1 gap-4 ml-16 mr-10 mt-5 mb-40 pb-10 shadow-md rounded-md`}
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
          Magang Pkl
        </p>
      </div>

      <Formik
        initialValues={{
          activity: "",
          desc: "",
          keterangan: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <div className="flex flex-row">
              <div className="flex flex-col w-full px-14">
                <label className={`font-poppins text-black`}>
                  Kegiatan <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="contoh kegiatan"
                  name="activity"
                  onChange={handleChange}
                  value={values.activity}
                  className={`placeholder-light-gray font-poppins text-sm border-2 w-full rounded-md py-1 px-2 my-2 outline-none `}
                />
                <label className={`font-poppins text-black pt-2`}>
                  Penjelasan Singkat Kegiatan{" "}
                  <span className="text-red">*</span>
                </label>
                <textarea
                  className={`w-full font-poppins px-3 py-2 text-black border rounded-md outline-none my-2 text-sm`}
                  placeholder="contoh keterangan"
                  name="desc"
                  required
                  onChange={handleChange}
                  value={values.desc}
                />
              </div>

              <div className="flex flex-col w-full pr-14">
                <label className={`font-poppins text-black`}>
                  Keterangan (Opsional){" "}
                </label>
                <textarea
                  className={`w-full font-poppins px-3 py-2 text-sm text-black border rounded-md outline-none my-2`}
                  placeholder="contoh keterangan"
                  name="keterangan"
                  onChange={handleChange}
                  value={values.keterangan}
                />
                <div className="mt-3">
                  <UploadBtn />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-full selection:px-[1rem] bg-light-blue hover:bg-hv-light-blue p-1.5 text-md text-white font-poppins bold rounded-md mt-5"
            >
              Submit
            </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LaporanMagangPkl;
