type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

function Status(props: StatusProps) {
  const { status } = props;
  return (
    <div className="status__container">
      {status === 'loading' ? (
        <h2>Loading...</h2>
      ) : status === 'success' ? (
        <h2>Data fetched successfully!</h2>
      ) : status === 'error' ? (
        <h2>Error Fetching Data :(</h2>
      ) : (
        <h2>Something Breaking!!</h2>
      )}
    </div>
  );
}

export default Status;
