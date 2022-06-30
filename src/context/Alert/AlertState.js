import { useEffect, useReducer } from "react";

// Context
import AlertContext from "./AlertContext";
import ToastReducer from "./AlertReducer";
import { SET_ALERT } from "../types";

// Utils
import { backendAPI } from "../../lib/backend";

const AlertState = (props) => {
  const initialState = {
    show: false,
    message: "",
    duration: 3000,
    progress: 0,
    variant: "info", // info, error, success, warning
  };

  const [state, dispatch] = useReducer(ToastReducer, initialState);

  const setAlert = (alert) => {
    dispatch({
      type: SET_ALERT,
      payload: alert,
    });
  };

  useEffect(() => {
    if (!state.show) return;
    let progress = 0;
    const max = state.duration / 1000;
    const intervalId = setInterval(() => {
      if (progress >= max) return;
      progress++;
      dispatch({
        type: SET_ALERT,
        payload: { progress: (progress / max) * 100 },
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [state.show]);

  useEffect(() => {
    if (!state.show) return;
    setTimeout(() => {
      setAlert({ show: false, progress: 0 });
    }, state.duration + 900);
  }, [state.show]);

  return (
    <AlertContext.Provider
      value={{
        initialState: initialState,
        show: state.show,
        duration: state.duration,
        progress: state.progress,
        message: state.message,
        variant: state.variant,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
