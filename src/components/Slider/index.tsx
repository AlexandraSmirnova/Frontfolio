import React, { useContext } from 'react';
import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.css';
import { Slide, SlideProps } from './Slide';
import { useSliderSettings } from '../../utils/useSliderSettings';
import { ModalContext } from '../Modal/ModalProvider';


interface SliderProps {
    items: SlideProps[],
}

export const Slider: React.FC<SliderProps> = ({ items }) => {
    const ref = React.useRef(null);
    const settings = useSliderSettings();

    const {setModalContent, toggleModalOpen} = useContext(ModalContext);

    const handleSlideClick = (item: SlideProps) => {
        setModalContent({ title: item.name, desc: item.description, image: item.image });
        toggleModalOpen(true);
    };

    return (
        <SlickSlider
            className={styles.sliderContainer}
            dotsClass={styles.dots}
            ref={ref}
            {...settings}
        >
            {items.map((item) => (
                <Slide key={item.name} onClick={()=> handleSlideClick(item)} {...item} />
            ))}
        </SlickSlider>
    );
};
