export function ViewPassWord({ viewPassWord, setViewPassWord }) {
  const handleViewPassWord = () => {
    setViewPassWord(!viewPassWord);
  };
  return (
    <div className="view-icon" onClick={handleViewPassWord}>
      {!viewPassWord && <i className="far fa-eye-slash"></i>}
      {viewPassWord && <i className="fa-solid fa-eye"></i>}
    </div>
  );
}
