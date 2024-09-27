function Faq(){
   return(
      <div className="faq-cont grid grid-cols-1 mid:grid-cols-2 cursor-pointer mb-20">
          <div className="hidden small:flex h-[290px] large:h-[440px] justify-between px-12 py-4 bg-white">
             <div className="mt-4 small:mt-14 mid:mt-5 xl:mt-12 2xl:mt-16 large:mt-36 mr-7">
                <p className="font-poppins font-black text-[27px] text-[#130F0C] mb-7">SUBSCRIBE & SAVE</p>
                <p  className="font-poppins font-semibold text-[16px]">Join Chef Matt’s Monthly Subscription <br/> and bring world class chef quality <br/> meals to your home.</p>
             </div>
             <div>
                <img src="./subsc_chef.png" className="h-full object-contain"/>
             </div>
          </div>
          <div className="h-[290px] large:h-[440px] cursor-pointer">
             <img src="./meet-chef.png" className="h-full w-full object-cover"/>
          </div>
          <div className="h-[290px] large:h-[440px] cursor-pointer">
             <img src="./chef-recipes.jpeg" className="h-full w-full object-cover"/>
          </div>
          <div className="h-[290px] large:h-[440px] cursor-pointer">
              <img src="./chef-live.jpeg" className="h-full w-full object-cover"/>
          </div>
      </div>
   )
}
export default Faq ;