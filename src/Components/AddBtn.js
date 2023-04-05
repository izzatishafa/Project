import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddBtn = () => {
    return (
        <div className="flex justify-end pb-1 pr-10">
            <button className="bg-light-blue lg:w-28 sm:w-20 rounded-md pl-3 pr-1 lg:py-2 sm:py-1.5 text-white font-poppins hover:bg-hv-light-blue flex items-center">
            <FontAwesomeIcon icon={faPlus} className="lg:mr-3 sm:mr-2" />
            <span className="lg:pl-2 sm:pl-1">Add</span>
            </button>
        </div>
    )
}

export default AddBtn