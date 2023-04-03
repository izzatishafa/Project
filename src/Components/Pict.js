import pict from "../Assets/wdygt.png"

const Pict = () => {
    return (
        <>
        <div className={`flex flex-col pl-10 pt-7 pb-0 text-dark-blue font-poppin font-extrabold`}>
                    <p>WHAT ARE YOU</p>
                    <p>GOING TODAY?</p>
                </div>
        <div className="">
            <img src={pict}></img>
        </div>
        </>
    )
}

export default Pict