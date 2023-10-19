import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex-col pt-10 bg-gray-800 h-screen justify-between text-center ">
      <section>
        <h1 className="text-white  font-bold text-5xl ">ANTHONY ANEKE</h1>
      </section>

      <section className="flex-col mt-40 h-300">
        <div>
          <h2 className="text-white mb-10 text-4xl italic">TASKS</h2>
        </div>
        <div>
          <Link to={"/poll_results"}>
            <button className="text-white font-bold text-2xl px-3 py-2 rounded-xl bg-slate-400 mb-7 text-center hover:bg-slate-500">
              Questions: 1
            </button>
          </Link>
        </div>
        <div>
          <Link to={"/lga_results"}>
            <button className=" hover:bg-slate-500 text-white bg-slate-400 text-center font-bold text-2xl px-3 py-2 rounded-xl mb-7">
              Questions: 2
            </button>
          </Link>
        </div>
        <>
          <Link to={"/"}>
            <button className="text-white font-bold text-2xl px-3 py-2 rounded-xl bg-slate-400 mb-5 text-center hover:bg-slate-500">
              Question: 3
            </button>
          </Link>
        </>
      </section>
    </main>
  );
};

export default Home;
