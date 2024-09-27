function ShopBlock() {
    return (
        <div className="shop-block-cont w-full bg-white px-2 lg:px-12 py-5 flex justify-between lg:justify-evenly mb-20">
            <div>
                <img src="./item1.jpg" className="hidden verysmall:block h-[280px] object-contain" />
            </div>
            <div className="flex flex-col items-center">
                <p className="font-poppins text-[#130F0C] text-[26px] font-normal mb-3">ONLINE ONLY</p>
                <hr className="bg-[#130F0C] w-16 h-2 mb-4"></hr>
                <p className="font-poppins text-center mb-8">GET 20% OFF YOUR ORDER OF $50 OR MORE <br /> Use code <span className="font-extrabold">“Chef20”</span></p>
                <div className="px-24 mb-7 cursor-pointer py-3 font-poppins font-bold flex items-center justify-center text-[#130F0C] border-2 border-solid border-[#130F0C]">Shop Now</div>
                <div className="flex justify-center items-center">
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-[#A7A7A7] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#A7A7A7] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#A7A7A7] rounded-full"></div>
                        <div className="w-2 h-2 border border-[#A7A7A7] rounded-full"></div>
                    </div>
                </div>
            </div>
            <div>
                <img src="./item2.jpg" className="hidden verysmall:block h-[280px] object-contain" />
            </div>
        </div>
    )
}
export default ShopBlock;