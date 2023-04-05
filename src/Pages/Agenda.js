import Calendar from "../Components/Calendar"

const Agenda = () => {
    return (
        <div>
            <Calendar date={new Date()} />
        </div>
    )
}

export default Agenda