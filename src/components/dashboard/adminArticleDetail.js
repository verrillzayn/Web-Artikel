import ArticleForm from "./articleForm";

const AdminArticleDetail = ({ posts }) => {
  const strData = JSON.stringify(posts);
  const serializePost = JSON.parse(strData);
  return (
    <>
      <ArticleForm
        articlePost={serializePost}
        header={"Article Information"}
        saveBtn={true}
        method={"PATCH"}
      />
    </>
  );
};

export default AdminArticleDetail;
