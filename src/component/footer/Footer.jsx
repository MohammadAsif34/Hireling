import React from "react";

const Footer = () => {
  const handleSubscribe = () => {
    alert("subscribe handler clicked !! ");
  };
  return (
    <div className="w-full bg-pink-200">
      <div className="container m-auto p-5 ">
        <div className="w-full py-6 flex items-center">
          <div className="flex-1">
            <div className="mx-2 px-2 flex-0 text-2xl font-bold text-white">
              Hireling<span className="text-purple-700">.</span>
            </div>
            <div className="w-3/5 p-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                cupiditate in temporibus dolore nam iure? Amet corrupti dolorem
                illo sapiente pariatur excepturi quod aspernatur consequuntur?
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h1 className="py-2 text-3xl font-semibold capitalize ">
                subscribe to our newsletter
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                similique!
              </p>
            </div>
            <div>
              <form
                action=""
                className="w-2/3 p-1 border border-pink-500  rounded-full flex"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-10 mx-1 px-4 text-xl border border-pink-500 rounded-full flex-1 outline-none"
                />
                <button
                  type="submit"
                  className=" h-10 mx-1 px-4 py-1 text-2xl text-white bg-pink-400 rounded-full capitalize"
                  onClick={handleSubscribe}
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="border-b-2" />
        <div className="w-full flex py-6 justify-evenly">
          <div className="flex-1  ">
            <h1 className="py-2 text-lg font-semibold capitalize">
              contact us
            </h1>
            <ul>
              <li>Email : </li>
              <li>Mobile : </li>
              <li>address : </li>
            </ul>
            <h1>download app</h1>
          </div>
          <div className="flex-1">
            <h1 className="py-2 text-lg font-semibold capitalize">
              categories
            </h1>
            <div>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="py-2 text-lg font-semibold capitalize">about</h1>
            <div>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="py-2 text-lg font-semibold capitalize">
              help & support
            </h1>
            <div>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-2 bg-pink-300">
        <div className="container m-auto flex">
          <div className="flex-1">
            <span className="capitalize">
              copyright &copy; 2024&nbsp; | &nbsp; all rights reserved.
            </span>
          </div>
          <div className="flex-1 justify-end flex">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
