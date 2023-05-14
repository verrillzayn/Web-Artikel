import { Button } from "@material-tailwind/react";
import Router, { useRouter } from "next/router";

const DashboardTable = (props) => {
  // console.log(props.posts);

  const baseUrl = "http://localhost:3000/api/artikels";

  const router = useRouter();
  const handleDelete = (id) => {
    fetch(`${baseUrl}/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => console.log(res));

    Router.reload();
  };
  return (
    <div className="flex flex-col overflow-x-auto max-w-[80vw]">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light ">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    no
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Artikel
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Like
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Comment
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Slug
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.posts.map((el, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b transition hover:bg-gray-200 cursor-pointer duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {el.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {JSON.stringify(el.category, null, 4)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">-</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {JSON.stringify(el.comment, null, 4)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {el?.slug}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Button
                          onClick={() =>
                            router.push(`/admin/dashboard/artikels/${el._id}`)
                          }
                          size="sm"
                          variant="gradient"
                        >
                          edit
                        </Button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Button
                          onClick={() => {
                            handleDelete(el._id);
                          }}
                          size="sm"
                          color="red"
                          variant="gradient"
                        >
                          delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
