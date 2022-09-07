const ErrorsAndGoods = ({ error, setError, good, setGood }) => {
  if (error) {
    setTimeout(() => {
      setError(false);
    }, 2000);
  } else if (good) {
    setTimeout(() => {
      setGood(false);
    }, 2000);
  }
  return (
    <div>
      {error && (
        <div className="error">
          <p>No Color Matched</p>
        </div>
      )}
      {good && (
        <div className="good">
          <p>Color Has Been Copied</p>
        </div>
      )}
    </div>
  );
};

export default ErrorsAndGoods;
