import React, { useContext, useState } from "react";
import { Toast } from "react-bootstrap";
import { NotificationContext } from "../contexts/NotificationContext";

interface IAutoToastProps {
  title: string;
  message: string;
  id: number;
  delay?: number
}

const AutoToast = ({ title, message, id, delay=5000 }: IAutoToastProps) => {
  const [show, setShow] = useState(true);
  const notificationContext = useContext(NotificationContext);

  const close = () => {
    setShow(false);
    notificationContext.removeNotification(id);
  };

  return (
    
      <Toast
        style={{ zIndex: 7 }}
        onClose={close}
        show={show}
        delay={delay}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
  );
};

export default AutoToast;
