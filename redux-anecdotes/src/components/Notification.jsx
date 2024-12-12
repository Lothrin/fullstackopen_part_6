import { useSelector } from "react-redux";

const Notification = () => {
  const message = useSelector((state) => state.notification.message);
  const isVisible = useSelector((state) => state.notification.isVisible);

  const style = {
    border: "solid",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    display: isVisible ? "block" : "none",
    backgroundColor: "lightblue",
  };

  return (
    isVisible && (
      <div style={style}>
        <p>{message}</p>
      </div>
    )
  );
};

export default Notification;
