import React from "react";

function Card(props) {
  return (
    <div className="h-screen ">
      <div className="flex bg-white shadow-lg rounded-md mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl ">
        <div className="flex items-start px-4 py-6">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
          <div className="">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                Rizal Susmiyanto{" "}
              </h2>
              <a className="mr-5" href="">
                ...
              </a>
            </div>
            <p className="mt-3 text-gray-700 text-sm">
              Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
              amet!Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
              dolor sit amet!Lorem ipsum, dolor sit amet conse. Saepe optio
              minus rem dolor sit amet!Lorem ipsum, dolor sit amet conse. Saepe
              optio minus rem dolor sit amet!Lorem ipsum, dolor sit amet conse.
              Saepe optio minus rem dolor sit amet!Lorem ipsum, dolor sit amet
              conse. Saepe optio minus rem dolor sit amet!
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
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <div className=" pb-3">
                <div className="flex items-center justify-between pt-2">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1 ">
                    Keren{" "}
                  </h2>
                </div>
                <p className="mt-3 text-gray-700 text-sm pb-1">
                  Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor
                  sit{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start pt-8">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <div className=" pb-3">
                <div className="flex items-center justify-between pt-2">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1 ">
                    Keren{" "}
                  </h2>
                </div>
                <p className="mt-3 text-gray-700 text-sm pb-1">
                  Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor
                  sit{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <a
                name=""
                id=""
                className="btn text-white"
                href="#"
                role="button"
              >
                More Comment{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
