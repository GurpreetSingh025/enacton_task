import Banner from  './Banner';
import Products from './Products';
import ShopBlock from './ShopBlock';
import Faq from './Faq';
import SignUp from './SignUp';
import InfoBlock from './InfoBlock';
import FooterContent from './FooterContent';
function MainContent(){
   return(
    <div className="content-cont h-fit z-30 w-full verysmall:w-main-content-width bg-black absolute top-0 left-0 verysmall:left-[90px]">
        <div className='h-[86vh] mb-3'></div>
        <Products/>
        <ShopBlock/>
        <Faq/>
        <SignUp/>
        <InfoBlock/>
        <FooterContent/>
    </div>
   )
}
export default MainContent ;