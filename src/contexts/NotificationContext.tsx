import React, { createContext, useState } from "react";

export interface INotification {
  message: string;
  title: string;
  id: number;
}

export interface INotificationContext {
  errors: INotification[];
}

export interface NotificationContextContent {
  errors: INotification[];
  addNotification: (title: string, error: string) => void;
  removeNotification: (notificationId: number) => void;
}

export const NotificationContext = createContext({} as NotificationContextContent);

const ErrorProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = useState([] as INotification[]);
  const addNotification = (title: string, error: string) => {
    const notes = notifications;
    console.log(notes);
    notes.sort((a, b) => a.id - b.id);
    const id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;

    setNotifications([...notes, { title: title, message: error, id: id }]);
  };

  const removeNotification = (id: number) => {
    console.log(
      "Removing",
      id,
      notifications.filter((e) => e.id !== id)
    );
    setNotifications(notifications.filter((e) => e.id !== id));
  };

  const val: NotificationContextContent = {
    errors: notifications,
    addNotification,
    removeNotification
  };

  return <NotificationContext.Provider value={val}>{children}</NotificationContext.Provider>;
};

export default ErrorProvider;
