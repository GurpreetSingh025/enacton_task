import { useState } from "react";
function SignUp(){
   let [id , setId] = useState("") ;
   return(
      <div className="sign-up-cont relative z-30 h-[300px] pt-6 pl-4 pr-3 mb-14 verysmall:pr-0 verysmall:pt-14 verysmall:pl-14">
        <div className="z-20 absolute left-0 top-0 h-full w-full">
            <img src="./bg-4.jpeg" className="h-full w-full object-cover"/>
            <div className="absolute z-20 top-0 left-0 h-full w-full bg-black bg-opacity-40"></div>
        </div>
        <div className="z-30 relative">
             <div className="title text-white w-fit mb-5 font-poppins pb-1 pr-2 border-white border-b-2 font-normal text-[24px]">SIGN UP SPECIAL PROMOTIONS</div>
             <div className="text-white font-normal mb-5 font-poppins">Get exclusive deals you won’t find anywhere else straight to your inbox!</div>
             <div className="flex">
                 <input type="text" className="placeholder-white bg-transparent mr-5 text-[13px] font-poppins font-normal text-white border-white border pl-1 w-[280px] mid:w-[400px] py-1" placeholder="Enter Email Address" value={id} onChange={(e) => setId(e.target.value)}/>
                 <span className="w-[185px] h-[40px] flex text-white items-center justify-center text-[15px] transition duration-200 ease-in bg-[#D29A5A] hover:bg-[#cb822e] cursor-pointer">Subscribe</span>
             </div>
        </div>
      </div>
   )
}
export default SignUp ;