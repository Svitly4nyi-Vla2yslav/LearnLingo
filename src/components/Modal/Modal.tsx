import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { BtnClose, ModalContainer, OverLay } from './Modal.styled';
import { useEffect } from 'react';
import  CloseBtnSvg  from "../../assets/close.svg"

interface ModalProps {
    children: ReactNode;
    toggleModal: () => void;
  }

const modalElement = document.getElementById('portal');

export const Modal: React.FC<ModalProps> = ({ children, toggleModal }) => {
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    const body = document.querySelector('body');
    if (body) {
    body.style.position = 'fixed';
    window.addEventListener('keydown', onEscapeClick);
    
    return () => {
      body.style.position = '';
      window.removeEventListener('keydown', onEscapeClick);
    }};
  }, [toggleModal]);

  return createPortal(
    <OverLay onMouseDown={onClickBackdrop}>
      <ModalContainer>
        <BtnClose onClick={toggleModal} type="button">
          <CloseBtnSvg />
        </BtnClose>
        {children}
      </ModalContainer>
    </OverLay>,
     modalElement ? modalElement : document.body 
  );
};