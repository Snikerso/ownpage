import React, {useEffect} from 'react';

const useCanvas = (callback) => {
    const canvasRef = React.useRef(null);
  
    React.useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      callback([canvas, ctx]);
    }, []);
  
    return canvasRef;
  }

  export default useCanvas;