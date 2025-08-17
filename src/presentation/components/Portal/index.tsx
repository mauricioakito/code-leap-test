import React, { type FC } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal: FC<PortalProps> = ({ children }) => {
  const root = document.getElementById("portal-root");
  return root ? ReactDOM.createPortal(children, root) : null;
};

export default Portal;