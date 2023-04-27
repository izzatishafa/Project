import classNames from "classnames";

const SubmitBtn = ({ marginTop, marginLeft, marginRight, text, onClick, type, props }) => {
  return (
    <div className={classNames(`mx-20 ${marginTop ? `mt-${marginTop}` : ''} ${marginLeft ? `ml-${marginLeft}` : ''} ${marginRight ? `mr-${marginRight}` : ''}`, props?.className)}>
      <button onClick={onClick} type={type} className={`text-white font-poppins bg-light-blue w-full rounded-md hover:bg-hv-light-blue`}>
        {text ? text : 'Submit'}
      </button>
    </div>
  )
}

export default SubmitBtn;


  