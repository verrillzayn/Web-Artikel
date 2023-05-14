import { useEffect, useRef, useState } from "react";

const CtkEditor = (props) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, Editor } = editorRef.current || {};
  const API_URl = "http://localhost:3000/api/imageUpload";
  const coba =
    "https://api.imgbb.com/1/upload?key=f40d524645dce106106126e05de1d463";

  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then(async (file) => {
            body.append("image", file);
            await fetch(coba, {
              method: "POST",
              body: body,
            })
              .then((res) => res.json())
              .then((res) =>
                resolve({
                  default: res?.data?.url,
                })
              )
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);
  return (
    <>
      {editorLoaded ? (
        <CKEditor
          config={{
            extraPlugins: [uploadPlugin],
            placeholder: "type content here..",
            style: {
              definitions: [
                {
                  name: "sub judul",
                  element: "h2",
                  classes: [
                    `text-3xl`,
                    `mb-4`,
                    `sm:text-4xl`,
                    `p-5`,
                    `md:p-4`,
                    `lg:p-0`,
                    `md:text-4xl`,
                    `lg:text-6xl`,
                    `text-black`,
                  ],
                },
                {
                  name: "Sub sub judul",
                  element: "h3",
                  classes: [
                    `text-3xl`,
                    `mb-4`,
                    `sm:text-4xl`,
                    `p-5`,
                    `md:p-4`,
                    `lg:p-0`,
                    `md:text-4xl`,
                    `lg:text-5xl`,
                    `text-black`,
                  ],
                },
                {
                  name: "paragrap pertama",
                  element: "p",
                  classes: [
                    `first-letter:text-7xl`,
                    `first-letter:text-primaryTheme`,
                    `first-letter:font-bold`,
                    `first-letter:text-slate-900`,
                    `first-letter:mr-2`,
                    `first-letter:float-left`,
                    `text-justify`,
                  ],
                },
                {
                  name: "paragraph",
                  element: "P",
                  classes: ["text-justify"],
                },
                {
                  name: "Marker",
                  element: "span",
                  classes: ["marker"],
                },
                {
                  name: "Spoiler",
                  element: "span",
                  classes: ["spoiler"],
                },
              ],
            },
          }}
          editor={Editor}
          data={props.data?.content}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            // console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            props.setter(data);
            // console.log({ event, editor, data });
          }}
          // onBlur={(event, editor) => {
          //   console.log("Blur.", editor);
          // }}
          // onFocus={(event, editor) => {
          //   console.log("Focus.", editor);
          // }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CtkEditor;
