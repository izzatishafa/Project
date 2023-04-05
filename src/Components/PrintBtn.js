import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

const PrintBtn = () => {
    return (
        <div className="flex justify-end pt-14 pb-1 pr-10">
            <button className="bg-light-blue lg:w-28 sm:w-24 rounded-md pl-3 pr-1 lg:py-2 sm:py-1.5 text-white font-poppins hover:bg-hv-light-blue flex items-center">
            <FontAwesomeIcon icon={faPrint} className="lg:mr-3 sm:mr-2" />
            <span className="lg:pl-2 sm:pl-1">Print</span>
            </button>
        </div>
    )
}

export default PrintBtn