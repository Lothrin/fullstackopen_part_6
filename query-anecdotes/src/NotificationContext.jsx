import { createContext, useReducer, useContext, useEffect } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { message: action.payload, isVisible: true };
    case "HIDE":
      return { message: "", isVisible: false };
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, dispatch] = useReducer(notificationReducer, {
    message: "",
    isVisible: false,
  });

  useEffect(() => {
    if (notification.isVisible) {
      const timer = setTimeout(() => {
        dispatch({ type: "HIDE" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.isVisible]);

  return (
    <NotificationContext.Provider value={{ notification, dispatch }}>
      {props.children}
    </NotificationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotificationValue = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotificationValue must be used within a NotificationContextProvider"
    );
  }

  return context; // Return the notification and dispatch from the context
};
