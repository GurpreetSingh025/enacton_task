import SliderNextArrow from "./SliderNextArrow";
import SliderPreviousArrow from "./SliderPreviousArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

function Products() {
    let data = [
        {
            img: "./jar1.png",
            name: "CINNAMON HONEY",
            Normalprice: "$12.00",
            Discountprice: "$9.00",
        },
        {
            img: "./jar2.png",
            name: "COCONUT OIL",
            Normalprice: "$20.00",
            Discountprice: "$15.00",
        },
        {
            img: "./jar3.png",
            name: "MANGO HONEY",
            Normalprice: "$9.00",
            Discountprice: "$6.00"
        },
        {
            img: "./jar4.png",
            name: "HONEY HABANERO",
            Normalprice: "$12.00",
            Discountprice: "$9.00"
        },
        {
            img: "./jar2.png",
            name: "COCONUT HONEY",
            Normalprice: "$20.00",
            Discountprice: "$15.00",
        },
        {
            img: "./jar4.png",
            name: "REGULAR HONEY",
            Normalprice: "$12.00",
            Discountprice: "$9.00"
        }
    ]
    const settings = {
        dots: false ,
        infinite: true ,
        speed : 500 ,
        slidesToShow: 4 ,
        slidesToScroll: 4,
        initialSlide: 0,    
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPreviousArrow /> ,
        responsive : [
            {
                breakpoint: 1185 ,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
            },
            {
                breakpoint: 975 ,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
            },
            {
                breakpoint: 743 ,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
            },
        ]
    };
    return (
        <div className="product-cont pl-1 py-20 mobile:pl-6 select-none mb-5">
            <div className="product-cont-heading w-full flex justify-start mb-7">
                <div className="title-desc w-[455px]">
                    <p className="text-heading border-solid border-[#D29A5A] border-b-2 font-poppins pr-20 w-full font-normal text-[19px] mb-6">CHEF MATT PRODUCTS</p>
                    <p className="text-white font-poppins font-normal">Shop Gourmet Chef Quality products from the Chef Matt brand.
                        Chef it yourself and Thank us later.</p>
                </div>
            </div>
            <div className="product-slider w-full">
                <div className="">
                    <Slider {...settings}>
                        {

                            data.map(obj => (
                                <div className="w-[200px]">
                                    <div className="w-[190px] h-[190px] mb-4 bg-white rounded-full border-2 border-[#D29A5A]">
                                        <img src={`${obj.img}`} />
                                    </div>
                                    <p className="text-[#D29A5A] mb-1 font-poppins flex items-center justify-center">{obj.name}</p>
                                    <div className="flex items-center justify-center">
                                        <span className="mr-3 line-through text-white">{obj.Normalprice}</span>
                                        <span className="text-white">{obj.Discountprice}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Products