import { useEffect, useState } from 'react';

export interface UseMediaQueryParam {
  breakpoint: number;
  onChange: () => void;
}

/**
 * https://github.com/akiran/react-slick/issues/2439 - Хак для react-slick
 *
 * React hook to run callbacks when the window width crosses specified breakpoints.
 */
export function useMediaQuery(breakpoints: UseMediaQueryParam[]): void {
    const [innerWidth, setInnerWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const sorted = [...breakpoints].sort((a, b) => a.breakpoint - b.breakpoint);

        const match = sorted.find((bp) => innerWidth <= bp.breakpoint);

        if (match) {
            match.onChange();
        }
    }, [innerWidth, breakpoints]);
}
