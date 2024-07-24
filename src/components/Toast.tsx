import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FC} from "react";

const Toast: FC = () => {
  return <ToastContainer position="top-center" autoClose={1200} />
}

export default Toast;
