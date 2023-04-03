import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const TwinButton = () => {
    return (
        <div className="flex flex-row justify-center p-2 gap-0">
            <button className={`bg-cyan text-white p-2 rounded-bl-md rounded-tl-md hover:bg-hv-cyan`}><FontAwesomeIcon icon={faCircleInfo} className="px-1"/></button>
            <button className={`bg-red text-white p-2 rounded-br-md rounded-tr-md hover:bg-hv-red`}><FontAwesomeIcon icon={faTrashCan} className="px-2" /></button>
        </div>
    )
}

export default TwinButton