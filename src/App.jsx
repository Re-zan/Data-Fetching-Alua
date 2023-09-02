import { useState } from "react";
import useDataCollect from "./hooks/useDataCollect";
import DataShow from "./DataShow";

const App = () => {
  const [data, isLoading] = useDataCollect();
  const [postIdFilter, setPostIdFilter] = useState("");
  const [postIdRightSideFilter, setPostIdRightSideFilter] = useState([]);
  if (isLoading) {
    return <span className="text-center">Loading...</span>;
  }

  const getFirstComments = {};
  data?.map((getFirstCommentByPostId) => {
    const postId = getFirstCommentByPostId?.postId;
    if (!postId[getFirstComments]) {
      getFirstComments[postId] = getFirstCommentByPostId;
    }
  });

  const filteredComments = data.filter(
    (comment) =>
      postIdFilter === "" || comment.postId === parseInt(postIdFilter)
  );

  const handleComments = (id) => {
    const filterForReightSide = data?.filter((datas) => datas.postId === id);
    setPostIdRightSideFilter(filterForReightSide);
  };

  return (
    <div className="bg-gray-900 min-h-full">
      <section className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8 grid grid-cols-2 gap-5">
          <div className="text-white  ">
            <input
              type="number"
              className=" text-black w-full p-3"
              placeholder="Enter PostID"
              value={postIdFilter}
              onChange={(e) => setPostIdFilter(e.target.value)}
            />
            <div className="overflow-auto max-h-[800px]">
              {postIdFilter
                ? Object.values(filteredComments).map((firstComment) => (
                    <DataShow
                      key={firstComment.id}
                      firstComment={firstComment}
                      handleComments={handleComments}
                    ></DataShow>
                  ))
                : Object.values(getFirstComments).map((firstComment) => (
                    <DataShow
                      key={firstComment.id}
                      firstComment={firstComment}
                      handleComments={handleComments}
                    ></DataShow>
                  ))}
            </div>
          </div>
          <div className="text-white ">
            <h2 className="title text-3xl font-bold">
              Total Filter Comments: {postIdRightSideFilter.length}
            </h2>
            <div className="overflow-auto max-h-[450px]">
              {" "}
              {postIdRightSideFilter.map((Comment) => (
                <>
                  <div className="border my-6 p-4 space-y-2 ">
                    <p>
                      <span className=" italic text-xl font-bold">
                        {" "}
                        Comment:{" "}
                      </span>
                      {Comment.body}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default App;
