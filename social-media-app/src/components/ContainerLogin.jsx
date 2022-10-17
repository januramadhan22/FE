import React from "react";

function ContainerLogin({ children }) {
  return (
    <div className="w-full h-screen bg-slate-200">
      <div className="navbar bg-sosmed-primary-color">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">Sosmed Apps</a>
        </div>
        <div className="flex-none gap-5">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-circle border-none bg-white hover:bg-sosmed-secondary-color"
            >
              <div className="indicator ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="transparent"
                  fill="#5699BE"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>

                <span className="bg-badge-red text-white text-xs rounded-full w-5 h-5 flex justify-center items-center  indicator-item">
                  2
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-1 card card-compact dropdown-content w-72 bg-white shadow-lg overflow-auto"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-sosmed-primary-color">Notification</span>
                <span className=" w-full text-sosmed-primary-color space-y-2">
                  <p>
                    <strong>Username</strong> telah mengomentari postingan anda
                  </p>
                  <p>
                    <strong>Username</strong> telah mengomentari postingan anda
                  </p>
                  <p>
                    <strong>Username</strong> telah mengomentari postingan anda
                  </p>
                  <p>
                    <strong>Username</strong> telah mengomentari postingan anda
                  </p>
                </span>
                <div className="w-full flex justify-center mt-3">
                  <button className="px-8 py-1 rounded-lg bg-sosmed-primary-color text-white border-2 hover:bg-white hover:border-sosmed-primary-color hover:text-sosmed-primary-color">
                    Loadmore
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white shadow-lg"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-auto">{children}</div>
    </div>
  );
}

export default ContainerLogin;
