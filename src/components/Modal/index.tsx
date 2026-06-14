import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';
import { CloseButton } from '../CloseButton';
import { ModalContext } from './ModalProvider';


export interface ModalContent {
    title: string;
    desc: string;
    image: string;
}

export const Modal: React.FC = () => {
    const { modalContent, isModalOpen: isOpen, toggleModalOpen } = useContext(ModalContext);
    const { title, desc, image } = modalContent;

    const handleClose = () => toggleModalOpen(false);

    // Закрытие окна при нажатии на клавишу Escape
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            // Блокируем прокрутку страницы при открытом окне
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, toggleModalOpen]);

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={handleClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <CloseButton className={styles.modalCloseButton} onClick={handleClose} />
                <div className={styles.modalHeader}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.modalBody}>
                    <img className={styles.modalImage} src={`/images/${image}`}/>
                    <div>{desc}</div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
