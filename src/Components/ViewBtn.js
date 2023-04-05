import eye from "../Assets/eye.png"

const ViewBtn = () => {
    return (
        <div className="flex justify-end pb-0">
            <button className="bg-white lg:w-28 sm:w-20 rounded-md pl-2 pr-1 lg:py-2 sm:py-1 text-light-blue 
            font-poppins hover:bg-light-blue hover:text-white flex items-center justify-center  border border-light-blue">
            <img src={eye} className="mr-2 lg:w-6 sm:w-[20px]" />
            <span className="lg:pl-2 sm:pl-0">View</span>
            </button>
            <style>
                {`
                    button:hover img {
                        filter: brightness(0) invert(1);
                    }
                `}
            </style>
        </div>
    )
}

export default ViewBtn
