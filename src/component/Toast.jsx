const infoToast = (msg) => {
  return (
    <div className="alert alert-info">
      <span>{msg}.</span>
    </div>
  );
};
const successToast = (msg) => {
  return (
    <div className="alert alert-success">
      <span>{msg}.</span>
    </div>
  );
};
const warningToast = (msg) => {
  return (
    <div className="alert alert-warning">
      <span>{msg}.</span>
    </div>
  );
};
const errorToast = (msg) => {
  return (
    <div className=" alert alert-error">
      <span>{msg}.</span>
    </div>
  );
};
// msg = "bisa uy"
const Toast = () => {
  var msgType = "";
  var msg = (<>Nazih <b>Ketiduran</b></>)
  var toast = !!msgType&&msg
  var toastContainer
  if (msgType === "error") {
    toastContainer = errorToast(msg);
  } else if (msgType === "success") {
    toastContainer = successToast(msg);
  } else if (msgType === "warning") {
    toastContainer = warningToast(msg);
  } else if (msgType === "info") {
    toastContainer = infoToast(msg);
  }
  if (toast) return (
      <div className="toast toast-center toast-top md:toast-end top-16 z-[2]">
        {toastContainer}
      </div>
    );
};

export default Toast;
