function Banner() {
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
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 border border-white rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Banner;