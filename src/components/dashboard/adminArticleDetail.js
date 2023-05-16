import ArticleForm from "./articleForm";

const AdminArticleDetail = ({ posts }) => {
  return (
    <>
      <ArticleForm
        articlePost={posts}
        header={"Article Information"}
        saveBtn={true}
        method={"PATCH"}
      />
    </>
  );
};

export default AdminArticleDetail;
