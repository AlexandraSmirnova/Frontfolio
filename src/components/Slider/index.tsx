import React from 'react';
import SlickSlider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.css';
import { Slide, SlideProps } from './Slide';


interface SliderProps {
    items: SlideProps[],
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: false,
    // mobileFirst: true,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 1032,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
    ]
};

export const Slider: React.FC<SliderProps> = ({ items }) => {
    return (
        <SlickSlider className={styles.sliderContainer} {...settings}>
            {items.map((item) => (
                <Slide key={item.name} {...item} />
            ))}
        </SlickSlider>
    );
};
