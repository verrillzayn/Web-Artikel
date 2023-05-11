import { Button } from "@material-tailwind/react";
import ArticleForm from "./articleForm";

const AdminArticleDetail = ({ posts, id }) => {
  const articlePost = posts?.find((e) => e._id == id);
  return (
    <>
      <ArticleForm
        articlePost={articlePost}
        header={"Article Information"}
        saveBtn={true}
        method={"PATCH"}
      />
    </>
  );
};

export default AdminArticleDetail;
