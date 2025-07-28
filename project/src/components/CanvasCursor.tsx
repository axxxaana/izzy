import React from 'react';
import useCanvasCursor from '../hooks/useCanvasCursor';

const CanvasCursor: React.FC = () => {
  useCanvasCursor();

  return <canvas className="pointer-events-none fixed inset-0 z-[9999]" id="canvas" />;
};

export default CanvasCursor; 