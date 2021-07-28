import React, { useState } from 'react';
import styled from 'styled-components';
import { viewport } from '@styles/styleAsset';

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 3000;
  animation: appear 0.5s;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Body = styled.div`
  position: absolute;
  background: white;
  max-width: 50%;
  width: 100%;
  box-sizing: border-box;
  padding: 3em 2em;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: background 0.5s;
  @media (max-width: ${viewport.mobile}) {
    max-width: 40%;
  }
  &:focus {
    outline: 0;
  }
`;

interface ModalProps {
  show: boolean;
  children?: React.ReactNode;
}

function Modal({ children, show }: ModalProps) {
  const [modalShow, SetModalShow] = useState(show);
  return (
    <Wrap
      onClick={() => {
        SetModalShow(false);
      }}>
      <Body onClick={(e) => e.stopPropagation()}>
        <div>{children}</div>
      </Body>
    </Wrap>
  );
}

export default Modal;
