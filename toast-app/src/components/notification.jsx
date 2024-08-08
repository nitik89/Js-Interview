import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./notification.css";

const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};
const animations = {
  fade: "fadeIn",
  pop: "popup",
  slide: "slideIn",
};
const Notification = ({
  type = "info",
  message,
  onClose,
  animation = "slide",
}) => {
  return (
    <div className={`notification ${type} ${animations[animation]}`}>
      {icons[type]}
      {message}
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={() => onClose()}
      />
    </div>
  );
};

export default Notification;
