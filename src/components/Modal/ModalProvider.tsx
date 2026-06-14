import React, { FC, createContext, useState, ReactNode } from 'react';

interface ModalContent {
    title?: string;
    desc?: string;
    image?: string;
}

interface ModalContextType {
    isModalOpen: boolean;
    modalContent: ModalContent;
    toggleModalOpen: (forceValue?: boolean) => void;
    setModalContent: (value: ModalContent) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ModalContent>({});

    const toggleModalOpen = (forceValue?: boolean) => {
        if (forceValue) {
            setIsModalOpen(forceValue);
            return;
        }
        setIsModalOpen((prev) => !prev);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, modalContent, toggleModalOpen, setModalContent }}>
            {children}
        </ModalContext.Provider>
    );
};
