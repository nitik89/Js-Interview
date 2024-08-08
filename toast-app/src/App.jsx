import "./App.css";
import Notification from "./components/notification";
import useNotification from "./hooks/use-notification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");
  return (
    <div>
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "File Sent Successfully",
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>
      {NotificationComponent}
    </div>
  );
}

export default App;
