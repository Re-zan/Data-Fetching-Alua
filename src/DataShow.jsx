const DataShow = ({ firstComment, handleComments }) => {
  return (
    <div
      className="border my-6 p-4 space-y-2 "
      onClick={() => handleComments(firstComment.postId)}
    >
      <h2>
        <span className=" italic text-xl font-bold"> Name: </span>
        {firstComment.name}
      </h2>
      <p>
        <span className=" italic text-xl font-bold"> Email: </span>
        {firstComment.email}
      </p>
      <p>
        <span className=" italic text-xl font-bold"> Comment: </span>
        {firstComment.body}
      </p>
    </div>
  );
};

export default DataShow;
