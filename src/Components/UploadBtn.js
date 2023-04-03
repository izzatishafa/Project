import upload from '../Assets/upload.png'


const UploadBtn = () => {
    return (
        <div className="flex flex-row items-center">
                            <button className={`hover:bg-hv-gray flex items-center border border-t border-black rounded-md text-black text-md font-poppins bg-transparent appearance-none outline-none w-44 pl-6 pr-2 py-1`}>
                            Upload File
                            <img src={upload} alt="icon" className="ml-5 w-5 h-5" />
                            </button>
                        </div>
    )
}

export default UploadBtn

