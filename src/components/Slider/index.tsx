import React from 'react';
import SlickSlider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.css';
import { Slide, SlideProps } from './Slide';
import { useSliderSettings } from '../../utils/useSliderSettings';


interface SliderProps {
    items: SlideProps[],
}

export const Slider: React.FC<SliderProps> = ({ items }) => {
    const ref = React.useRef(null);
    const settings = useSliderSettings();

    return (
        <SlickSlider
            className={styles.sliderContainer}
            dotsClass={styles.dots}
            ref={ref}
            {...settings}
        >
            {items.map((item) => (
                <Slide key={item.name} {...item} />
            ))}
        </SlickSlider>
    );
};
