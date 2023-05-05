import moment from "moment";
import { supabase } from "../supabaseClient";
import Swal from "sweetalert2";
import { useState } from "react";

export default function AttendanceBtn() {
  const [loading, setLoading] = useState(false);

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
    const IS_STUDENT_COME_ON_TIME = isStudentComeOnTime()
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
    if(error === null){
      if(IS_STUDENT_COME_ON_TIME){
        Swal.fire({
          icon: "success",
          title: "Buset Gercep.."
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Begadang teroooos..",
        });
      }
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={loading}
      className={`p-1 my-2 w-60 bg-light-blue rounded-md text-white font-poppins hover:bg-hv-light-blue`}
    >
      Present
    </button>
  );
}





// import moment from "moment";
// import { supabase } from "../supabaseClient";
// import Swal from "sweetalert2";
// import { useState, useEffect } from "react";

// export default function AttendanceList() {
//   const [attendanceList, setAttendanceList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchAttendanceList();
//   }, []);

//   const fetchAttendanceList = async () => {
//     setLoading(true);
//     const { data, error } = await supabase.from("attendance_list").select("*");
//     if (error) {
//       console.log(error);
//       setLoading(false);
//     } else {
//       setAttendanceList(data);
//       setLoading(false);
//     }
//   };

//   const isStudentComeOnTime = () => {
//     const jam_masuk = moment("09:00", "HH:mm");
//     const datang_jam = moment();
//     const same_day_treshhold = jam_masuk.diff(
//       moment("00:00", "HH:mm"),
//       "minutes"
//     );
//     const selisih_dateng = jam_masuk.diff(datang_jam, "minutes");
//     const student_come_on_time =
//       selisih_dateng >= 0 && selisih_dateng < same_day_treshhold;
//     return student_come_on_time;
//   };

//   const handleSubmit = async (values) => {
//     setLoading(true);
//     const IS_STUDENT_COME_ON_TIME = isStudentComeOnTime();
//     const { data } = await supabase.auth.getSession();
//     console.log(data.session.user);
//     let { data: userData } = await supabase
//       .from("user_data")
//       .select("full_name")
//       .eq("email", data.session.user.email);
//     const { error } = await supabase.from("attendance_list").insert([
//       {
//         arrive_at: moment(values).toISOString(),
//         status: IS_STUDENT_COME_ON_TIME ? "ON_TIME" : "LATE",
//         student_id: data.session.user.id,
//         student_name: userData[0].full_name,
//       },
//     ]);
//     if (error === null) {
//       if (IS_STUDENT_COME_ON_TIME) {
//         Swal.fire({
//           icon: "success",
//           title: "Buset Gercep..",
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Begadang teroooos..",
//         });
//       }
//       // memperbarui data dengan melakukan fetch ulang attendance_list
//       fetchAttendanceList();
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       {/* tampilkan data dari state attendanceList */}
//       {attendanceList.map((item, index) => (
//         <div key={index}>
//           <p>{item.student_name}</p>
//           <p>{item.arrive_at}</p>
//           <p>{item.status}</p>
//         </div>
//       ))}
//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className={`p-1 my-2 w-60 bg-light-blue rounded-md text-white font-poppins hover:bg-hv-light-blue`}
//       >
//         Present
//       </button>
//     </div>
//   );
// }

