export default function Izin({ onClick }) {
    return (
        <button onClick={onClick} className={`text-red font-poppins border border-red rounded-md p-1 w-28 hover:bg-red hover:text-white`}>Izin</button>
    )
}