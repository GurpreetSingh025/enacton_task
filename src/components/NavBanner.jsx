import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Banner from "./Banner";
function NavBanner() {
    return (
        <div className="relative h-[100vh] z-50 flex">
            <img src="./slide_image.png" alt="Chef Matt smiling in a kitchen setting" className="w-[100vw] h-[100vh] absolute left-0 top-0 z-50 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-50 flex">
                <Banner />
            </div>
            <div className="w-fit h-[100vh] z-50 absolute verysmall:fixed left-0 top-0">
                <NavBar />                
            </div>
            <MainContent/>
        </div>
    )
}
export default NavBanner;