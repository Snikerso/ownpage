import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const PortalModal = ({ children }) => {
  const mount = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(
    <div
      style={{
        position: 'absolute',

        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        padding: '100px',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
    >
      {children}
    </div>,
    el,
  );
};

export default PortalModal;
