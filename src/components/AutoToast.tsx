import React, { useContext, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { ErrorContext } from "../contexts/ErrorContext";

interface IAutoToastProps {
  title: string;
  message: string;
  id: number;
}

const AutoToast = ({ title, message, id }: IAutoToastProps) => {
  const [show, setShow] = useState(true);
  const errorContext = useContext(ErrorContext);

  const close = () => {
    setShow(false);
    errorContext.removeError(id);
  };

  return (
    
      <Toast
        style={{ zIndex: 999 }}
        onClose={close}
        show={show}
        delay={3000}
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
