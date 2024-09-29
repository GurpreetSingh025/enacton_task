import { useState } from "react";
function Banner(props) {
    let updateCurrImage = props.updateCurrImage ;
    let imgData = props.imgdata ;
    let [active , setActive] = useState(4) ;
    let handleClick = () => {
        const elem = document.querySelector(".faq-cont") ;
        if(elem){elem.scrollIntoView({ behavior: 'smooth' })}
    }
    return (
        <div className="flex-1 flex flex-col justify-end z-40">
            <div className="flex justify-center items-center mb-16">
                <div className="border border-white text-white py-2 px-14 text-lg cursor-pointer" onClick={handleClick}>Meet Chef Matt</div>
            </div>
            <div className="flex justify-center items-center mb-8">
                <div className="flex space-x-2">
                    {
                        imgData.map((item, index) => <div onClick={(e) => {
                           updateCurrImage(index + 1) ;  setActive(index + 1) ;
                        }} className={`w-2 h-2 rounded-full cursor-pointer ${active == index + 1 ? "border border-white rounded-full" : "bg-white"}`}></div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Banner;