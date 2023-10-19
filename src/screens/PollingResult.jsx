import { useState, useEffect } from "react";
import PollUnits from "../components/PollUnits";
import { Link } from "react-router-dom";

const PollingResult = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/polls/${value}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <div className="flex-1 bg-gray-800 justify-center items-center h-screen">
      <Link to={"/"}>
        <button className="bg-white absolute p-2 rounded-xl top-5 left-10">
          👈
        </button>
      </Link>
      <h1 className="text-white text-center pt-10 font-bold text-4xl">
        Polling Results
      </h1>
      <div className="mt-7 justify-center items-center">
        <div className="text-center  pb-2">
          <h3 className="text-white">Enter Polling unit ID</h3>
          <input
            className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
            value={value}
            onChange={(e) => {
              e.preventDefault();
              setValue(e.target.value);
            }}
          />
        </div>
        <div className="">
          {data.length > 0 && (
            <>
              <h2 className="font-semibold text-2xl text-yellow-50 pt-5 justify-center text-center">
                Poll #{value}
              </h2>
              <div className="flex flex-wrap">
                {data.map((data, index) => (
                  <PollUnits
                    key={index}
                    partyName={data.party_abbreviation}
                    partyScore={data.party_score}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PollingResult;
