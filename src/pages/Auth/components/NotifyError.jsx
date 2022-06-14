export function NotifyError({ text }) {
  return (
    <div className="notification-error userName-error1">
      <i className="error-icon fas fa-exclamation-circle"></i>
      {text}
    </div>
  );
}
