import React from "react";

function PostCard(props) {
  return (
    <div>
      <div className=" w-full h-full flex justify-center mb-8 ">
        <div className="flex bg-white shadow-lg rounded-md w-2/4 h-auto">
          <div className="flex items-start px-4 py-6">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://placeimg.com/80/80/people"
              alt="avatar"
            />
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                  Rizal Susmiyanto{" "}
                </h2>
                <div>
                  <label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <p className="mt-3 text-gray-700 text-sm">
                Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor
                sit amet!Lorem ipsum, dolor sit amet conse. Saepe optio minus
                rem dolor sit amet!Lorem ipsum, dolor sit amet conse. Saepe
                optio minus rem dolor sit amet!Lorem ipsum, dolor sit amet
                conse. Saepe optio minus rem dolor sit amet!Lorem ipsum, dolor
                sit amet conse. Saepe optio minus rem dolor sit amet!Lorem
                ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
                amet!
              </p>
              <div className="mt-4 flex items-center  p-2 border-2 rounded-md p ">
                <input
                  className="  text-white"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=" Beri Tanggapan ...."
                />
              </div>

              {/* User Commnet */}
              <div className="flex items-start pt-4">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                  src="https://placeimg.com/80/80/people"
                  alt="avatar"
                />
                <div className=" pb-3">
                  <div className="flex items-center justify-between pt-2">
                    <h2 className="text-lg font-semibold text-gray-900 -mt-1 ">
                      Keren{" "}
                    </h2>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm pb-1">
                    Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
                    dolor sit{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start pt-8">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                  src="https://placeimg.com/80/80/people"
                  alt="avatar"
                />
                <div className=" pb-3">
                  <div className="flex items-center justify-between pt-2">
                    <h2 className="text-lg font-semibold text-gray-900 -mt-1 ">
                      Keren{" "}
                    </h2>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm pb-1">
                    Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
                    dolor sit{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  class="bg-zinc-700 text-white active:bg-neutral-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  More Commentar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Duplicate */}
      <div className=" w-full h-full flex justify-center mb-8 ">
        <div className="flex bg-white shadow-lg rounded-md w-2/4 h-auto">
          <div className="flex items-start px-4 py-6">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://placeimg.com/80/80/people"
              alt="avatar"
            />
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                  Fiersa Bersari{" "}
                </h2>
                <div>
                  <label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <p className="mt-3 text-gray-700 text-sm">
                Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor
                sit amet!Lorem ipsum, dolor sit amet conse. Saepe optio minus
                rem dolor sit amet!Lorem ipsum, dolor sit amet conse. Saepe
                optio minus rem dolor sit amet!Lorem ipsum, dolor sit amet
                conse. Saepe optio minus rem dolor sit amet!Lorem ipsum, dolor
                sit amet conse. Saepe optio minus rem dolor sit amet!Lorem
                ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
                amet!
              </p>
              <div className="mt-4 flex items-center  p-2 border-2 rounded-md ">
                <input
                  className="  text-white"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=" Beri Tanggapan ...."
                />
              </div>

              {/* User Commnet */}
              <div className="flex items-start pt-4">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                  src="https://placeimg.com/80/80/people"
                  alt="avatar"
                />
                <div className=" pb-3">
                  <div className="flex items-center justify-between pt-2">
                    <h2 className="text-lg font-semibold text-gray-900 -mt-1 ">
                      Dika{" "}
                    </h2>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm pb-1">
                    Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
                    dolor sit{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start pt-8">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                  src="https://placeimg.com/80/80/people"
                  alt="avatar"
                />
                <div className=" pb-3">
                  <div className="flex items-center justify-between pt-2">
                    <h2 className="text-lg font-semibold text-gray-900 -mt-1 ">
                      Galih{" "}
                    </h2>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm pb-1">
                    Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
                    dolor sit{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  class="bg-zinc-700 text-white active:bg-neutral-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  More Comentar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormPost(props) {
  return (
    <div className="w-full h-auto flex justify-center mb-8">
      <div className="flex bg-white shadow-lg rounded-md w-2/4 h-16">
        <div className="w-full h-full flex items-center px-4 py-3">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src="https://placeimg.com/80/80/people"
            alt="avatar"
          />
          <label
            htmlFor="my-modal-4"
            className="w-full h-full flex items-center p-2 rounded-lg bg-background-color cursor-pointer"
          >
            Sampaikan Sesuatu . . .
          </label>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal">
            <label
              className="modal-box relative flex bg-white shadow-lg"
              for=""
            >
              <label
                htmlFor="my-modal-4"
                className="btn btn-sm btn-circle bg-transparent border-none text-sosmed-primary-color-dark text-lg font-bold hover:bg-white hover:text-sosmed-secondary-color absolute right-2 top-2"
              >
                ✕
              </label>
              <img
                className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                src="https://placeimg.com/80/80/people"
                alt="avatar"
              />
              <div className="w-full space-y-4">
                <h3 className="text-lg font-bold text-black">Stenly Adams</h3>
                <input
                  type="text"
                  placeholder="Ketikan sesuatu . . ."
                  className="w-11/12 h-auto px-3 pt-3 pb-72 rounded-lg bg-background-color hover:outline-none focus:outline-none text-black"
                />
                <div className="w-11/12 pl-3 flex gap-2">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#219EBC"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#219EBC"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                      />
                    </svg>
                  </button>
                  <button className="w-full p-2 rounded-br-2xl font-bold text-white border-2 border-sosmed-secondary-color bg-sosmed-secondary-color hover:text-sosmed-secondary-color hover:bg-white">
                    Share
                  </button>
                </div>
              </div>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
}

export { PostCard, FormPost };
