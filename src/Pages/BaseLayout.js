import Header from "../Components/Header"
import Header2 from "../Components/Header2"
import SideBar from "../Components/SideBar"
import SideBar2 from "../Components/SideBar2"


const Baselayout = ({children}) => {
    return(
            <div className="flex flex-row">
                <SideBar />
                <div className="flex flex-col w-full">
                    <Header />
                    {children}
                </div>
            </div> 
    )
}

export default Baselayout;
