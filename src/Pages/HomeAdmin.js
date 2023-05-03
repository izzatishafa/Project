import profile from "../Assets/pict2.jpg";
import user from "../Assets/user2.png";
import arrow from "../Assets/arrow-right.png";
import calendar from "../Assets/calendar3.png";
import edit from "../Assets/edit2.png";
import { useHistory } from "react-router-dom";

const HomeAdmin = () => {
  const history = useHistory();
  const handleGoToDailyReport = () => {
    history.push("/daily-report-admin");
  };
  const handleGoToAgenda = () => {
    history.push("/agenda-admin");
  };
  const handleGoToManagementAgenda = () => {
    history.push("/management-agenda");
  };
  const handleGoToManagementUser = () => {
    history.push("/management-user");
  };
  return (
    <div className="p-8 ml-10">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mx-12 mb-6">
        <div className="rounded-md">
          <div className={`bg-card-blue rounded-tl-md rounded-tr-md`}>
            <div className="flex flex-row justify-between items-center p-5 ">
              <div className="flex flex-col">
                <h1 className={`text-white font-poppins font-bold text-3xl`}>
                  10
                </h1>
                <p className={`text-white text-sm font-poppins font-thin`}>
                  User Intern
                </p>
              </div>
              <img src={user} alt="" className="w-14" />
            </div>
          </div>
          <button
            onClick={handleGoToManagementUser}
            className={`w-full hover:bg-hv-btn-blue rounded-br-md rounded-bl-md bg-cardbtn-blue font-poppins font-thin text-sm text-white flex items-center justify-center py-1 px-24`}
          >
            More Info
            <img src={arrow} alt="" className="ml-2 w-4" />
          </button>
        </div>
        <div className="rounded-md">
          <div className={`bg-card-green rounded-tl-md rounded-tr-md`}>
            <div className="flex flex-row justify-between items-center p-5 ">
              <div className="flex flex-col">
                <h1 className={`text-white font-poppins font-bold text-3xl`}>
                  4
                </h1>
                <p className={`text-white text-sm font-poppins font-thin`}>
                  Agenda for this Month
                </p>
              </div>
              <img src={calendar} alt="" className="w-14" />
            </div>
          </div>
          <button
            onClick={handleGoToManagementAgenda}
            className={`w-full hover:bg-hv-btn-green rounded-br-md rounded-bl-md bg-cardbtn-green font-poppins font-thin text-sm text-white flex items-center justify-center py-1 px-24`}
          >
            More Info
            <img src={arrow} alt="" className="ml-2 w-4" />
          </button>
        </div>
        <div className="rounded-md">
          <div className={`bg-card-red rounded-tl-md rounded-tr-md`}>
            <div className="flex flex-row justify-between items-center p-5 ">
              <div className="flex flex-col">
                <h1 className={`text-white font-poppins font-bold text-3xl`}>
                  5
                </h1>
                <p className={`text-white text-sm font-poppins font-thin`}>
                  New Daily Report
                </p>
              </div>
              <img src={edit} alt="" className="w-14" />
            </div>
          </div>
          <button
            onClick={handleGoToDailyReport}
            className={`w-full hover:bg-hv-btn-red rounded-br-md rounded-bl-md bg-cardbtn-red font-poppins font-thin text-sm text-white flex items-center justify-center py-1 px-24`}
          >
            More Info
            <img src={arrow} alt="" className="ml-2 w-4" />
          </button>
        </div>
      </div>

      <div className={`grid lg:grid-cols-2 sm:grid-cols-1 gap-12 mr-3`}>
        <div className="shadow-md rounded-md hover:shadow-xl">
          <h1
            className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}
          >
            Attendance List
          </h1>
          <div className="flex flex-row items-center">
            <div>
              <img
                src={profile}
                alt="..."
                className="rounded-full w-11 h-11 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Maccaroni El Matadore
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                08.00 WIB - 20/03/2023
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <img
                src={profile}
                alt="..."
                className="rounded-full w-11 h-11 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                08.00 WIB - 20/03/2023
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <img
                src={profile}
                alt="..."
                className="rounded-full w-11 h-11 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>Jane Doe</p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                17.00 WIB - 19/03/2023
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={handleGoToDailyReport}
          className="shadow-md rounded-md hover:shadow-xl"
        >
          <h1
            className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}
          >
            Daily Report
          </h1>
          <div className="flex flex-row items-center ml-10 my-3">
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Membuat auth menggunakan...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                Senin 20/03/2023
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center ml-10 my-3">
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Membuat auth menggunakan...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                Senin 20/03/2023
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center ml-10 my-3">
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Membuat auth menggunakan...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                Senin 20/03/2023
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-md hover:shadow-xl">
          <h1
            className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}
          >
            Score
          </h1>
          <div className="flex flex-row items-center ml-10 my-3">
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Post Test menunggu...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                10 minutes ago
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center ml-10 my-3">
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Tugas menunggu penilaian...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                10 minutes ago
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center ml-10 my-3">
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Post Test menunggu...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                10 minutes ago
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-md hover:shadow-xl">
          <h1
            className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}
          >
            Notifications
          </h1>
          <div className="flex flex-row items-center">
            <div>
              <img
                src={profile}
                alt="..."
                className="rounded-full w-11 h-11 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>
                John telah submit...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                5 minutes ago
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <img
                src={profile}
                alt="..."
                className="rounded-full w-11 h-11 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Tole telah submit...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                5 minutes ago
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <img
                src={profile}
                alt="..."
                className="rounded-full w-11 h-11 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Tole telah submit...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                5 minutes ago
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={handleGoToAgenda}
          className="shadow-md rounded-md hover:shadow-xl pb-5 mb-2"
        >
          <h1
            className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}
          >
            Agenda
          </h1>
          <div className="flex flex-row items-center">
            <div>
              <input
                type="checkbox"
                className="items-center w-8 h-8 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Presentasi Tugas ...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                11.40 WIB - 21/03/2023
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <input
                type="checkbox"
                className="items-center w-8 h-8 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Presentasi Tugas ...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                11.40 WIB - 21/03/2023
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <input
                type="checkbox"
                className="items-center w-8 h-8 ml-10 mr-5 my-3"
              />
            </div>
            <div>
              <p className={`text-dark-gray font-poppins`}>
                Presentasi Tugas ...
              </p>
              <p className={`text-sm text-left text-light-gray font-poppins`}>
                11.40 WIB - 21/03/2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
