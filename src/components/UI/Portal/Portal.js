import React, { Children } from 'react'
import ReactDOM from 'react-dom';

function Portal({children, destId}) {
  return ReactDOM.createPortal(
    children,
    document.getElementById(destId)
  );
};

export default Portal