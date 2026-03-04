import React from 'react';


interface ModalProps {
    isOpen: boolean;
    modalContent: ModalContent;
    onClose(): void;
}

interface ModalContent {
    title: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalContent }) => {
    const dialogRef = React.useRef(null);

    React.useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog ref={dialogRef} onClick={handleBackdropClick}>
            {modalContent.title}
        </dialog>
    );
};

export {
    Modal,
    ModalContent,
};
