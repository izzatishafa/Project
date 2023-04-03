import Notif from '../Components/Notif'


const Notifications = () => {
    return (
        <div className={`p-5 grid grid-cols-1 ml-16 mr-10 mt-5 mb-44 shadow-md rounded-md`}>
            <Notif />
            <Notif />
            <Notif />
            <Notif />
            <Notif />
        </div>
    )
}

export default Notifications