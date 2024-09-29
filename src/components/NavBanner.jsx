import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Banner from "./Banner";
import {useState} from 'react' ;
function NavBanner() {
    let imgdata = ["slide_image.png" , "slider2.jpg" ,  "slider3.jpg" , "slide_image.png"]
    let [currImage , setCurrImage] = useState(4) ;
    let updateCurrImage  = (val) => {
         setCurrImage(val) ;
    }
     return (
        <div className="relative h-[100vh] z-50 flex">
            {
                imgdata.map((img , index) => <img src={`./${img}`} alt="Chef Matt smiling in a kitchen setting" className={`w-[100vw] h-[86vh] absolute left-0 top-0 z-50 object-cover ${index + 1 == currImage ? 'block' : 'hidden'}`} />)
            }
            <div className="absolute inset-0 bg-black bg-opacity-40 z-50 flex h-[86vh]">
                <Banner image={currImage} updateCurrImage={updateCurrImage} imgdata = {imgdata}/>
            </div>
            <div className="w-fit h-[86vh] verysmall:h-[100vh] z-50 absolute verysmall:fixed left-0 top-0">
                <NavBar />                
            </div>
            <MainContent/>
        </div>
    )
}
export default NavBanner;