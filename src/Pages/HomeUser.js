import Header from "../Components/Header"
import Header2 from "../Components/Header2"
import SideBar from "../Components/SideBar"
import QuickAccess from "./QuickAccess"




const HomeUser = () => {
  return (
    <>
      <div className="flex flex-row">
        <Header2 />
        <Header />
      </div>
      <div className="flex flex-row">
        <SideBar />
        <QuickAccess />
      </div>
    </>
  );
};

export default HomeUser
