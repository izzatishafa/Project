export default function BackBtn({onClick}) {
    return (
        <div className="mx-20">
            <button onClick={onClick} className={`text-red border border-red font-poppins bg-white w-full 
            rounded-md mb-3 p-2 hover:bg-red hover:text-white`}>Back</button>
        </div>
    )
}