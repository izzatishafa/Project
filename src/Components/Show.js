import Select from 'react-select'

const options = [
    { value: '5', label: '5' },
    { value: '10', label: '10' }
  ];

const Show = () => {

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            height: '0.375rem'
        }),
    };
    return (
        <div className="">
        <Select
            options={options}
            placeholder="..."
            className={`border border-1 rounded-lg placeholder-black font-poppins py-0`}
            styles={customStyles}
        />
        </div>
    );
  }
  
export default Show