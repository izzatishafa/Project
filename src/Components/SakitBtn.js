export default function Sakit ({ onClick }) {
    return (
        <button onClick={onClick} className={`text-red font-poppins border border-red rounded-md p-1 w-28 hover:bg-red hover:text-white`}>Sakit</button>
    )
}