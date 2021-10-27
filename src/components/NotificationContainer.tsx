import React, { useContext } from 'react'
import { ToastContainer } from 'react-bootstrap'
import { NotificationContext } from '../contexts/NotificationContext';
import AutoToast from './AutoToast';

const NotificationContainer = () => {
    const notificationContext = useContext(NotificationContext);

    return (
        <ToastContainer
          style={{ zIndex: 10 }}
          className="p-3"
          position="bottom-end"
        >
          {notificationContext.errors.map((err) => (
            <AutoToast
              title={err.title}
              message={err.message}
              key={err.id}
              id={err.id}
            />
          ))}
        </ToastContainer>

    )
}

export default NotificationContainer
