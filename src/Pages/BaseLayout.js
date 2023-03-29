import Header from "../Components/Header"
import SideBar from "../Components/SideBar"

const Baselayout = ({children}) => {
    return(
        <>
            <div>
                <div className="flex flex-row">
                <SideBar />
                <Header />
                </div>
                <div>
                    {children}
                </div>
            </div>
        
        </>
    )
}

export default Baselayout