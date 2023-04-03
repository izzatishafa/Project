const SubmitBtn = ({ marginTop }) => {
    return (
      <div className={`mx-16 ${marginTop ? `mt-${marginTop}` : ''}`}>
        <button className={`text-white font-poppins bg-light-blue w-full rounded-md mb-3 p-2 hover:bg-hv-light-blue`}>Submit</button>
      </div>
    )
  }
  
  export default SubmitBtn;
  