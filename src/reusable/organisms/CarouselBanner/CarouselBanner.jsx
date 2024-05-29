// import React from "react";
// import Slider from "react-slick";
// import { Heading, Paragraph, Link } from "../../atoms";

// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";
// import * as styles from "./carouselBanner.module.scss";

// const CarouselBanner = ({ carouselData }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     fade: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       {carouselData &&
//         carouselData.map((carouselItem) => (
//           <div
//             className={`${styles.container} `}
//             data-sal="fade"
//             data-sal-delay="50"
//             data-sal-easing="ease"
//             data-sal-duration="300"
//           >
//             <div
//               className={`${styles.subContainer} `}
//               style={{
//                 backgroundImage: `url(${carouselItem.image})`,
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//               }}
//             >
//               <div className={styles.content}>
//                 <Heading className={styles.heading} size="h1">
//                   {carouselItem.title}
//                 </Heading>
//                 <Paragraph size="display" className={styles.subtitle}>
//                   {carouselItem.subtitle}
//                 </Paragraph>
//                 {carouselItem.link && (
//                   <Paragraph size="display">
//                     <Link to={carouselItem.link} className={styles.ctaLink}>
//                       {carouselItem.ctaText} &rarr;
//                     </Link>
//                   </Paragraph>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//     </Slider>
//   );
// };

// export default CarouselBanner;

import React, { useState, useEffect } from "react";
import { useMediaQuery } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bannerone, bannertwo, bannerthree, tagline, mobileBanner1, mobileBanner2, mobileBanner3 } from "./import";
import './banner.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="mainBanner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <ul className="main-slider">
                            <li>
                                <div className="banner-content">
                                    <h2 id="banner-text-animated">Enhancing Well Being of Communities</h2>
                                    <h4>Through Mentoring and Capacity Building in</h4>
                                    <div className="flip-container">
                                        <div className="flip-text">
                                            <h1>Healthcare</h1>
                                        </div>
                                    </div>
                                    <p>Our comprehensive approach encompasses healthcare, education, livelihood and support for the achievement of the Sustainable Development Goals (SDGs).</p>
                                    <img src={tagline} alt="Moving knowledge not people" />
                                </div>
                            </li>
                            <li>
                                <div className="slider-main">
                                    <div className="slide active">
                                        <img src={isMobile ? (currentIndex === 0 ? mobileBanner1 : currentIndex === 1 ? mobileBanner2 : mobileBanner3) : (currentIndex === 0 ? bannerone : currentIndex === 1 ? bannertwo : bannerthree)} alt="" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
