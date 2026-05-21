import React, { useRef } from 'react';

import styles from './styles.css';
import { Skill } from '../../types/skills';
import { SkillPoint } from './SkillPoint';
import { ConstellationAnimation } from '../../utils/ConstellationAnimation';


interface SkillsConstellationProps {
    skills: Skill[];
}

export const SkillsConstellation: React.FC<SkillsConstellationProps> = ({ skills }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefs = useRef<HTMLDivElement[]>([]);

    React.useEffect(() => {
        if (!canvasRef.current || !containerRef.current || !wordRefs.current.length ) {
            return () => {};
        }
        console.log(wordRefs);
        const animationEngine = new ConstellationAnimation(canvasRef.current, containerRef.current, wordRefs.current, 4);
        animationEngine.start();

        return () => {
            animationEngine.stop();
        };
    }, [skills]);

    return (
        <div className={styles.container} ref={containerRef}>
            <canvas id="connections" ref={canvasRef}></canvas>
            {skills.map(({ name, desc }, i) => {
                return (
                    <React.Fragment key={`${name}-${i}`}>
                        <SkillPoint
                            variant={i % 2 === 0 ? 'dark' : 'light'}
                            text={name}
                            description={desc.replace(/\\n/g, '\n')}
                            id={`${name}-${1}`}
                            ref={(el) => {
                                wordRefs.current[i] = el;
                            }}
                        />
                    </React.Fragment>
                );
            })}
        </div>
    );
};
