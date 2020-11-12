import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PortalModal from '../components/organisms/PortalModal';
import TextEditor from 'components/molecules/TextEditor';

const StyledWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  border: 2px solid black;
  margin: 0 auto;
  height: 400px;
`;
export default function useModalEditor() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  useEffect(() => {}, [setIsOpen]);
  const Modal = () => {
    return (
      <>
        {isOpen && (
          <PortalModal>
            <StyledWrapper>
              <h2>title</h2>
              <button onClick={() => setIsOpen(false)}>X</button>
              <TextEditor />
            </StyledWrapper>
          </PortalModal>
        )}
      </>
    );
  };

  return [isOpen, setIsOpen, Modal];
}
