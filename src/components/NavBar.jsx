import { useState , useEffect } from "react";
function NavBar() {
    let [navOpen, setNavOpen] = useState(false);
    let [currentActive, setCurrentActive] = useState("Home");
    useEffect(function(){
       switch(currentActive){
           case "Home" :
              window.scrollTo({ top: 0, behavior: 'smooth' });
              break ;
           case "Products" :
             const elem = document.querySelector(".product-cont") ;
             if(elem){elem.scrollIntoView({ behavior: 'smooth' })}
             break ;           
           case "Meet Chef Matt" :
              const elem2 = document.querySelector(".faq-cont") ;
              if(elem2){elem2.scrollIntoView({ behavior: 'smooth' })}
              break ;           
            case "FAQ" :
                const elem3 = document.querySelector(".faq-cont") ;
                if(elem3){elem3.scrollIntoView({ behavior: 'smooth' })}
                break ; 
            case "Connect with Us" :
                const elem4 = document.querySelector(".info-cont") ;
                if(elem4){elem4.scrollIntoView({ behavior: 'smooth' })}
                break ;                            
       }
    } , [currentActive])
    return <>
        {
            navOpen ? (
                <div className="navbar-open h-full z-50 select-none w-fit bg-black bg-opacity-85 flex flex-col justify-between">
                    <div className="px-3 py-6">
                        <div className="menu-close-cont pl-[12px] w-full flex items-center">
                            <span className="menu-close-icon items-center cursor-pointer mb-2" onClick={() => setNavOpen(false)}>
                                <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 9L9 27" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 9L27 27" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="nav-open-logo mb-1">
                            <img src="./cheffMattImg.png" className="h-20" />
                        </div>
                        <div className="menu-list-cont w-full">
                            <ul className="menu-list list-none">
                                {["Home", "Products", "Meet Chef Matt", "FAQ", "Connect with Us"].map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setCurrentActive(item) }
                                        className={`${currentActive === item ? "currentlyActive" : ""} common-menu-item`}>
                                        {item.toUpperCase()}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="support-cont px-3 py-3 border-solid border-white border-b-2 ">
                            <span className="mr-3 text-white font-poppins text-[13px]">TEXT SUPPORT 24/7</span>
                            <span className="text-[12px]">
                                <a href="tel:+1234567890" className="text-[#D29A5A] underline">070-7782-9137</a>
                            </span>
                        </div>
                        <div className="cart-cont flex justify-between px-4 py-3">
                            <div className="flex items-center justify-center">
                                <span className="mr-2">
                                    <svg width="26" height="26" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.66667 14.5L9.66667 9.66667C9.66667 6.99729 11.8306 4.83334 14.5 4.83334V4.83334C17.1694 4.83334 19.3333 6.99729 19.3333 9.66667L19.3333 14.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                        <path d="M4.52768 14.5428C4.67276 12.8019 4.74529 11.9315 5.31938 11.4032C5.89347 10.875 6.76693 10.875 8.51386 10.875H20.4861C22.2331 10.875 23.1065 10.875 23.6806 11.4032C24.2547 11.9315 24.3272 12.8019 24.4723 14.5428L25.1945 23.2089C25.279 24.2224 25.3212 24.7292 25.0241 25.0521C24.727 25.375 24.2185 25.375 23.2014 25.375H5.7986C4.78155 25.375 4.27302 25.375 3.97592 25.0521C3.67882 24.7292 3.72105 24.2224 3.80551 23.2089L4.52768 14.5428Z" stroke="white" stroke-width="2" />
                                    </svg>
                                </span>
                                <span className="text-white flex items-center text-[15px] justify-center pt-[2px] font-poppins">CART</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="mr-2">
                                    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.19245 16.2262L13.3153 23.8568C13.6398 24.1616 13.802 24.3139 14 24.3139C14.198 24.3139 14.3602 24.1616 14.6847 23.8568L22.8075 16.2262C25.0897 14.0823 25.3669 10.5543 23.4474 8.08038L23.0865 7.61519C20.7903 4.65564 16.1812 5.15198 14.5678 8.53255C14.3399 9.01008 13.6601 9.01008 13.4322 8.53255C11.8188 5.15198 7.20967 4.65563 4.91346 7.61519L4.55254 8.08037C2.6331 10.5543 2.91024 14.0823 5.19245 16.2262Z" stroke="white" stroke-width="2" />
                                    </svg>
                                </span>
                                <span className="text-white flex items-center justify-center text-[15px] pt-[2px] font-poppins">WISHLIST</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="navbar z-50 h-full select-none border-r-[6px] border-r-[#D29A5A] w-[90px] bg-black bg-opacity-70 flex flex-col justify-between items-center py-8">
                    <span className="w-full flex justify-center items-center text-white text-2xl mb-16 cursor-pointer" onClick={() => setNavOpen(true)}>
                        <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35 30H5V26.6667H35V30ZM35 21.6667H5V18.3333H35V21.6667ZM35 13.3333H5V10H35V13.3333Z" fill="white" />
                        </svg>
                    </span>
                    <div className="flex text-white text-4xl transform h-full whitespace-nowrap items-center">
                        <img src="./chef_matt_nav.png" className=" relative left-3 h-[289px]" />
                    </div>
                </div>
            )
        }
    </>
}

export default NavBar;