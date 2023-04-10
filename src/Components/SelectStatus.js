import Select from 'react-select';


const options = [
    { value: 'ON_PROGRESS', label: 'On Progress' },
    { value: 'READY_FOR_DEPLOY', label: 'Ready for Deploy' },
    { value: 'READY_FOR_TEST', label: 'Ready for Test' },
    { value: 'PENDING', label: 'Pending'},
    { value: 'DONE', label: 'Done'},
  ];

const SelectStatus = () => {
    return (
        <div className="">
        <Select
            options={options}
            placeholder="Pilih Status"
            className={`border-thin rounded-lg placeholder-light-gray font-poppins outline-none my-2`}
        />
        </div>
    )
}

export default SelectStatus