import React from "react";

const ModalLogin = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className="bg-zinc-200 opacity-50 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-12 px-24 border-4 rounded-xl">
          <div>
            <div className="flex font-mono text-black mb-10 text-2xl font-bold">
              Login
              <div className="flex ml-36"></div>
            </div>
          </div>
          <div className="font-mono pb-4 text-lg">Username </div>
          <input
            className="border-2 border-sky-500 rounded-md p-4 "
            type="text"
            placeholder="Masukkan Username "
          />
          <div className="font-mono pb-4 text-lg pt-3">Password </div>
          <input
            className="border-2 border-sky-500 rounded-md p-4 "
            type="text"
            placeholder="Masukkan Password "
          />
          <div className="flex pt-3 text-sm font-mono">
            <div className="">
              Kamu belum memiliki akun?
              <a className="font-mono text-sky-300 " href="/register">
                {" "}
                Daftar Disini
              </a>
            </div>
          </div>
          <div className=" flex justify-start  pt-6 text-md font-mono   ">
            <button
              class="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleOKClick}
            >
              Masuk Akun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
