import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen m-auto border p-2 flex justify-center items-center">
      <div className="w-1/3 p-6 border text-xl">
        <h1 className="my-6 text-center text-4xl">Login</h1>
        <form action="">
          <label htmlFor="">username</label>
          <input
            type="text"
            name=""
            id=""
            className="w-full h-12 my-2 px-4 border rounded-lg"
          />
          <label htmlFor="">password</label>
          <input
            type="password"
            name=""
            id=""
            className="w-full h-12 my-2 px-4 border rounded-lg"
          />
          <input type="checkbox" name="" id="" className="mb-6" />
          <label htmlFor=""> Remember me</label>
          <button
            type="submit"
            className="w-full h-12 my-3 border bg-pink-300 hover:bg-pink-200 rounded-lg"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
