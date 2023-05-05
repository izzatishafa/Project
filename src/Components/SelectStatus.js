import Select from 'react-select';
import classNames from 'classnames';


const options = [
    { value: 'ON_PROGRESS', label: 'On Progress' },
    { value: 'READY_FOR_DEPLOY', label: 'Ready for Deploy' },
    { value: 'READY_FOR_TEST', label: 'Ready for Test' },
    { value: 'PENDING', label: 'Pending'},
    { value: 'DONE', label: 'Done'},
  ];

const SelectStatus = (props) => {
    return (
        <Select
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            options={options}
            required
            placeholder="Pilih Status"
            className={classNames(`border-thin rounded-lg placeholder-light-gray font-poppins outline-none my-2`, props.className)}
        />
    )
}

export default SelectStatus