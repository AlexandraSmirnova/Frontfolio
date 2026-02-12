import { useState } from 'react';

import { useMediaQuery } from './useMediaQuery';


export function useSliderSettings() {
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [currentSlide, setCurrentSlide] = useState(0);

    useMediaQuery([
        {
            breakpoint: 780,
            onChange: () => setSlidesToShow(1),
        },
        {
            breakpoint: 1164,
            onChange: () => setSlidesToShow(2),
        },
        {
            breakpoint: 1280,
            onChange: () => setSlidesToShow(3),
        },
        {
            breakpoint: 1560,
            onChange: () => setSlidesToShow(4),
        },
    ]);

    return {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        afterChange: (index: number) => setCurrentSlide(index),
        currentSlide,
    };
}
