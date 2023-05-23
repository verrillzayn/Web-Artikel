import CommentCard from "./CommentCard";

const Kommentar = ({ params, session, thePost }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentContent = {
      author: session.user.id,
      artikel: thePost._id,
      content: e.target.comment.value,
    };
    const jsonData = JSON.stringify(commentContent);
    const url = `/api/artikels/comments`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };
    const response = await fetch(url, options);
    const result = await response.json();
    e.target.comment.value = "";
  };

  return (
    <section className="bg-white flex justify-center p-2 md:p-0 lg:p-0 md:flex md:justify-center lg:flex lg:justify-center lg:pr-32">
      <div className="py-4 md:py-20 lg:py-16 lg:w-[50vw] md:w-[70vw] w-full text-[18px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
            Discussion (20)
          </h2>
        </div>
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-400 focus-within:border-primaryTheme focus-within:border-2">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              name="comment"
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primaryTheme rounded-lg hover:bg-indigo-900 hover:shadow-xl"
          >
            Post comment
          </button>
        </form>
        <CommentCard params={params} />
      </div>
    </section>
  );
};

export default Kommentar;
