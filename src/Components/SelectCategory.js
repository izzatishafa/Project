import Select from 'react-select';


const options = [
    { value: 'option1', label: 'Bootcamp' },
    { value: 'option2', label: 'PKL' },
    { value: 'option3', label: 'Trial' },
  ];

const SelectCategory = () => {
    return (
        <div className="">
        <Select
            options={options}
            placeholder="Pilih Kategori"
            className={`border-thin rounded-lg placeholder-light-gray font-poppins outline-none my-2`}
        />
        </div>
    )
}

export default SelectCategory