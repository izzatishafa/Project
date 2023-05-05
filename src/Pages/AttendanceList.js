import profile from "../Assets/pict2.jpg";
import DoughnutChart from "../Components/AttendanceChart";
import AttendanceBtn from "../Components/AttendanceBtn";
import Sakit from "../Components/SakitBtn";
import Izin from "../Components/IzinBtn";
import { useHistory } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import moment from "moment";
import Swal from "sweetalert2";

const AttendanceList = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAttendanceList();
  }, []);

  const fetchAttendanceList = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("attendance_list").select("*");
    if (error) {
      console.log(error);
      setLoading(false);
    } else {
      setAttendanceList(data);
      setLoading(false);
    }
  };

  const isStudentComeOnTime = () => {
    const jam_masuk = moment("09:00", "HH:mm");
    const datang_jam = moment();
    const same_day_treshhold = jam_masuk.diff(
      moment("00:00", "HH:mm"),
      "minutes"
    );
    const selisih_dateng = jam_masuk.diff(datang_jam, "minutes");
    const student_come_on_time =
      selisih_dateng >= 0 && selisih_dateng < same_day_treshhold;
    return student_come_on_time;
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    const IS_STUDENT_COME_ON_TIME = isStudentComeOnTime();
    const { data } = await supabase.auth.getSession();
    console.log(data.session.user);
    let { data: userData } = await supabase
      .from("user_data")
      .select("first_login")
      .eq("email", data.session.user.email);
    const { error } = await supabase.from("attendance_list").insert([
      {
        arrive_at: moment(values).toISOString(),
        status: IS_STUDENT_COME_ON_TIME ? "ON_TIME" : "LATE",
        student_id: data.session.user.id,
        student_name: userData.full_name,
      },
    ]);
    if (error === null) {
      if (IS_STUDENT_COME_ON_TIME) {
        Swal.fire({
          icon: "success",
          title: "Buset Gercep..",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Begadang teroooos..",
        });
      }
      fetchAttendanceList();
    }
    setLoading(false);
  };

  const getData = async () => {
    let { data, error } = await supabase
      .from("user_data")
      .select("*")
    console.log(data);
  };

  //

  const [data, setData] = useState([]);

  const history = useHistory();
  const handleGoToSickForm = () => {
    history.push("/attendance-list/presensi-sakit");
  };
  const handleGoToAbsentForm = () => {
    history.push("/attendance-list/presensi-izin");
  };

  const fetchData = async () => {
    const { data: dataSession } = await supabase.auth.getSession();
    let { data, error } = await supabase
      .from("attendance_list")
      .select("*")
      .eq("student_id", dataSession.session.user.id);
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div
        className={`grid grid-cols-1 gap-4 ml-20 mr-10 my-10 pb-10 shadow-md rounded-md`}
      >
        <div className="flex flex-col">
          <h1
            className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-2`}
          >
            Bilik Presensi
          </h1>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={profile}
                alt="..."
                className="rounded-full w-24 h-24 mx-5 my-3"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p
                className={`font-poppins text-xl text-dark-gray font-extrabold`}
              >
                Maccaroni El Matadore
              </p>
              <p className={`font-poppins font-thin text-lg text-dark-gray`}>
                SMK Negeri 14 Purwokerto
              </p>
              <p className={`font-poppins text-base text-dark-gray`}>
                Magang Bootcamp
              </p>
              <p className={`font-poppins text-sm text-dark-gray`}>Front-End</p>
              <p className={`font-poppins text-xs text-dark-gray`}>
                Waktu masuk terekam:{" "}
                <span>
                  <b>09.00 WIB</b>
                </span>
              </p>
              {/* <AttendanceBtn /> */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`p-1 my-2 w-60 bg-light-blue rounded-md text-white font-poppins hover:bg-hv-light-blue`}
              >
                Present
              </button>
              <p className={`text-red text-sm font-poppins`}>
                Keterangan tidak masuk
              </p>
              <div className="flex flex-row gap-3 items-center justify-center my-2">
                <Sakit onClick={handleGoToSickForm} />
                <Izin onClick={handleGoToAbsentForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ml-20 mr-10 my-10`}
      >
        <div className="shadow-md rounded-md">
          <h1
            className={`text-dark-blue text-left font-poppins font-bold px-5 py-5 mx-5 my-2`}
          >
            Riwayat Kehadiran
          </h1>
          {attendanceList.slice(-3).map((item, index) => (
            <div key={index} className="flex flex-row items-center pl-5">
              <div>
                <img
                  src={profile}
                  alt="..."
                  className="rounded-full w-11 h-11 mx-5 my-3"
                />
              </div>
              <div>
                <p className={`text-dark-gray font-poppins`}>
                  Maccaroni El Matadore
                </p>
                <p
                  className={`text-sm text-left text-light-gray font-poppins font-thin`}
                >
                  {moment(item.created_at).format("HH:mm:ss - DD MMM YYYY")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="shadow-md rounded-md">
          <h1
            className={`text-dark-blue text-left font-poppins font-bold px-5 py-5 mx-5 my-2`}
          >
            Presentase Kehadiran
          </h1>
          <div className="flex justify-center items-center">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;
