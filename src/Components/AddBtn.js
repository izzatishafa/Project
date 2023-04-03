import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddBtn = () => {
    return (
        <div className="flex justify-end pt-14 pb-1 pr-10">
            <button className="bg-light-blue w-28 rounded-md pl-3 pr-1 py-2 text-white font-poppins hover:bg-hv-light-blue flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-3" />
            <span className="pl-2">Add</span>
            </button>
        </div>
    )
}

export default AddBtn