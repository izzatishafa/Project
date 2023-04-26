const SubmitBtn = ({ marginTop, marginLeft, marginRight, text, onClick }) => {
  return (
    <div className={`mx-20 ${marginTop ? `mt-${marginTop}` : ''} ${marginLeft ? `ml-${marginLeft}` : ''} ${marginRight ? `mr-${marginRight}` : ''}`}>
      <button onClick={onClick} className={`text-white font-poppins bg-light-blue w-full rounded-md mb-2 p-2 hover:bg-hv-light-blue`}>
        {text ? text : 'Submit'}
      </button>
    </div>
  )
}

export default SubmitBtn;


  