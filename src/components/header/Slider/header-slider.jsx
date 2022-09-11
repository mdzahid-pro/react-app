import React , {Component} from "react";
import Slider from "react-slick";
import HeaderSliderOne from '../../../assets/img/header/index-03/01.jpg'
import HeaderSliderItem from "./header-slider-item";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HeaderSlider extends Component {
    state = {
        settings: { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 }
    };

    render(){
        const {settings} = this.state;
        return (
            // <!-- header area start -->
            <div className="header-wrapper-index-03">
                <div className="container custom-container-1720">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- header area start --> */}
                            <div className="header-area-wrapper">
                                <div className="header-area index-01 index-03">
                                    <div className="header-slider-inst-index-01">
                                        <Slider {...settings}>
                                            <HeaderSliderItem imageUrl={HeaderSliderOne}
                                                subtitle="Save upto 30% off"
                                                title="Buy Fresh Groceries & Ogranic food."
                                                description="There’s a voice that keeps on calling me. Down the road,
                                                that’s where I’ll always be. Every stop I make, I make a new friend. Can’t
                                                stay for long, just turn around and I’m gone again."
                                                btn_text="Shop now"
                                                btnUrl="#"
                                                />

                                            <HeaderSliderItem imageUrl={HeaderSliderOne}
                                                subtitle="Save upto 30% off"
                                                title="Buy Fresh Groceries & Ogranic food."
                                                description="There’s a voice that keeps on calling me. Down the road,
                                                that’s where I’ll always be. Every stop I make, I make a new friend. Can’t
                                                stay for long, just turn around and I’m gone again."
                                                btn_text="Shop now"
                                                btnUrl="#"
                                                />
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- header area end --> */}
                        </div>
                    </div>
                </div>
            {/* <!-- header area end --> */}
            </div>
        );
    }
}

export default HeaderSlider;