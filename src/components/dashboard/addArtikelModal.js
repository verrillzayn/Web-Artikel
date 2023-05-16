"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TiDocumentAdd } from "react-icons/ti";
import ArticleForm from "./articleForm";

const AddArtikelModal = () => {
  const [open, setOpen] = useState(false);

  const handleSetter = (val) => {
    setOpen(val);
  };

  const cancelButtonRef = useRef(null);

  return (
    <>
      {/* <Button onClick={() => setOpen(true)}>click</Button> */}
      <button
        color="indigo"
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-indigo-500 text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40  focus:shadow-none  active:shadow-none absolute top-[29rem] lg:top-[27rem] right-4"
        onClick={() => setOpen(true)}
      >
        <TiDocumentAdd size="3em" color="white" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center py-4 px-4 lg:px-10 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative p-6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full h-fit">
                  <ArticleForm
                    header={"Add Article"}
                    method={"POST"}
                    saveBtn={true}
                    setter={handleSetter}
                    ref={cancelButtonRef}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default AddArtikelModal;
