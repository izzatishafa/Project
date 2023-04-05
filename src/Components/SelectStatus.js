import Select from 'react-select';


const options = [
    { value: 'option1', label: 'Progress' },
    { value: 'option2', label: 'Ready for Deploy' },
    { value: 'option3', label: 'Ready for Test' },
    { value: 'option3', label: 'Issue'},
    { value: 'option3', label: 'Done'},
    { value: 'option3', label: 'Other'}
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