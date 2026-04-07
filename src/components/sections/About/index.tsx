import React from 'react';

import styles from './styles.css';
import { AnimationProvider } from '../../AnimationProvider';


export const About: React.FC = () => {
    return (
        <section className={styles.container} id="about" >

            <AnimationProvider className={styles.innerContainer}>
                <h1 className={styles.title}>{'>'} О себе</h1>
                <div className={styles.description}> В области разработки уже более 9 лет. За это время успела поработать над сайтами для студенческих соревнований, писала расширения для браузера. Довелось даже поработать с исходниками Chromium. На данный момент работаю в Календаре от VK Workspace для разных платформ (B2B и B2C решения). Есть огромный опыт автоматизации тестирования. Очень целеустремленная и ответственная, люблю работать на результат.</div>
                <div className={styles.description}> Некоторые факты обо мне:</div>
                <ul className={styles.description}>
                    <li>Окончила МГТУ им Н. Э. Баумана по специальности &quot;Информатика и вычислительная техника&quot; с красным дипломом</li>
                    <li>Прошла Школу Разработки Интерфейсов(ШРИ) от Яндекса</li>
                    <li>Делюсь знаниями - была ментором курса Фронтенда в образовательном центре при МГТУ им Н. Э. Баумана</li>
                    <li>Очень творческий человек: занималась актерским мастерством и участвовала в спектаклях, на данный момент увлекаюсь танцами и вокалом </li>
                </ul>
            </AnimationProvider>
        </section>
    );
};

