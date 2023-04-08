import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const TwinButton = ({onClick}) => {
    return (
        <div className="flex flex-row justify-center p-2 gap-0">
            <button onClick={onClick} className={`bg-cyan text-white p-2 rounded-bl-md rounded-tl-md hover:bg-hv-cyan`}><FontAwesomeIcon icon={faCircleInfo} className="px-1"/></button>
            <button onClick={onClick} className={`bg-red text-white p-2 rounded-br-md rounded-tr-md hover:bg-hv-red`}><FontAwesomeIcon icon={faTrashCan} className="px-2" /></button>
        </div>
    )
}

export default TwinButton