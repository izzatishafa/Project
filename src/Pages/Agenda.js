import Calendar from "../Components/Calendar"
import Header from "../Components/Header"
import SideBar from "../Components/SideBar"

const Agenda = () => {
    return (
        <div>
            <Calendar date={new Date()} />
        </div>
    )
}

export default Agenda