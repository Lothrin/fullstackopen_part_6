import React from "react";
import { useNotificationValue } from "../NotificationContext";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };
  const { notification } = useNotificationValue();

  if (!notification.isVisible) return null;

  return (
    <div style={style} className="notification">
      {notification.message}
    </div>
  );
};

export default Notification;
