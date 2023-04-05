import AddBtn from "../Components/AddBtn"
import ViewBtn from "../Components/ViewBtn"
import Calendar from "../Components/Calendar"

const Agenda = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-3 lg:mr-16 sm:mr-0 pt-5 justify-end items-center">
                <ViewBtn />
                <div className="p-0">
                <AddBtn />
                </div>
            </div>
            <Calendar date={new Date()} />
        </div>
    )
}

export default Agenda