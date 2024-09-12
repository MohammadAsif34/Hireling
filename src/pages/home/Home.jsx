import React from "react";
import "./home.css";
import logo from "../../assets/react.svg";

const Home = () => {
  const topSeller = [
    {
      name: "asif",
      img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      totalStar: 5.0,
      totalReview: 2,
    },
    {
      name: "ahsan",
      img: "https://images.pexels.com/photos/27779105/pexels-photo-27779105/free-photo-of-a-brown-dog-is-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      totalStar: 2.1,
      totalReview: 2,
    },
    {
      name: "samad",
      img: "https://images.pexels.com/photos/28319838/pexels-photo-28319838/free-photo-of-a-woman-holding-a-flower-in-her-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      totalStar: 0.5,
      totalReview: 2,
    },
  ];
  return (
    <div className="w-full bg-pink-100">
      <div className="container m-auto py-4">
        <div className=" mx-3 main p-3 flex items-center">
          <div className="flex-1 ml-12">
            <div className="w-2/3">
              <h1 className="text-6xl font-bold capitalize">
                hire your perfect <span className="text-white">freelancer</span>{" "}
                quick and easy
              </h1>
            </div>
            <div className="w-4/5 my-5">
              <form
                action=""
                className="w-full h-12 p-1 bg-white rounded-full flex"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-full px-4 flex-1 bg-pink-200 rounded-full outline-none text-lg"
                ></input>
                <button
                  type="submit"
                  className="ml-1 px-4 bg-pink-400 rounded-full"
                >
                  search
                </button>
              </form>
            </div>
            <div className="mx-8 flex items-center">
              <div className="w-14 h-14 p-1 rounded-full bg-pink-300 translate-x-8 flex justify-center items-center z-20">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full rounded-full "
                />
              </div>
              <div className="w-14 h-14 p-1 rounded-full bg-pink-300 translate-x-4 flex justify-center items-center z-10">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full rounded-full "
                />
              </div>
              <div className="w-14 h-14 p-1 rounded-full bg-pink-300  flex justify-center items-center z-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full rounded-full "
                />
              </div>
              <div className="px-3">
                <p className="">24.5M+</p>
                <p>people join</p>
              </div>
              <div className="border-l px-3">
                <p className=""> 4.9</p>
                <p>*****</p>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      {/* Featured categories  */}
      <div className="w-full bg-pink-100 p-1">
        <div className="container m-auto p-2 ">
          <h1 className="my-4 text-4xl font-semibold capitalize">
            featured categories
          </h1>
          <div className="container m-auto flex">
            <div className="min-w-48 h-32 m-6 p-4 bg-pink-200 rounded-lg">
              <div className=" h-2/3 flex justify-center items-center">
                <img src={logo} alt="" />
              </div>
              <h1 className="texl-xl font-semibold capitalize">
                web development{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* end featured categories  */}
      {/* Our service  */}
      <div className="w-full bg-pink-200 p-1">
        <div className="container m-auto px-3">
          <h1 className="my-4 text-4xl font-semibold capitalize px-2">
            Our service
          </h1>
          <div className="container m-auto flex">
            <div className="min-w-48 h-32 m-6 p-4 bg-pink-300 rounded-lg">
              <div className=" h-2/3 flex justify-center items-center">
                <img src={logo} alt="" />
              </div>
              <h1 className="texl-xl font-semibold capitalize">
                web development{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* end our service  */}
      {/* Top Seller  */}
      <div className="w-full m-0 bg-pink-100 p-1">
        <div className="container m-auto px-3 my-3">
          <div className=" ">
            <h1 className="my-4 text-4xl font-semibold capitalize ">
              top sellers
            </h1>
            <p className="capitalize">
              get some inspiration from {"null"} skills{" "}
            </p>
            <div className="container m-auto flex">
              {/* top seller mapping  */}
              {topSeller.map((item) => (
                <div className="min-w-64  m-6 p-4 bg-pink-200 rounded-lg">
                  <div className="tag">
                    <span className="bg-green-600 px-2 rounded-full ">
                      top seller
                    </span>
                  </div>
                  <div className=" h-32 flex justify-center items-center ">
                    <img
                      src={item.img}
                      alt=""
                      className="w-32 h-32 border rounded-full"
                    />
                  </div>
                  <h1 className="text-2xl  py-2 text-center font-bold capitalize">
                    {item.name}
                  </h1>
                  <h2 className="text-center py-1 font-semibold">
                    <i className="bi bi-star-fill"></i>&nbsp;
                    {item.totalStar} &nbsp; ({item.totalReview} Reviews)
                  </h2>
                  <div className="flex justify-center my-2">
                    <button className="px-4 py-2 bg-pink-100 hover:bg-pink-400 rounded-full">
                      view profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* end top sellers */}
    </div>
  );
};

export default Home;
