import { useState, useEffect } from "react";
import PollUnits from "../components/PollUnits";
import { Link } from "react-router-dom";
import axios from "axios";

const LgaResults = () => {
  const [lgaData, setLgaData] = useState([]);
  const [puId, setPuId] = useState(null);
  const [lgaData, setLgaData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [title, setTitle] = useState("");
  const [lgaId, setLgaId] = useState("");

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8080/polls/${value}`);
  //       setData(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const fetchLgaNames = async () => {
    try {
      const lga = await axios.get(`http://localhost:8080/lgas`);
      setLgaData(lga.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionChange = (evt) => {
    evt.preventDefault();
    setSelectedOption(evt.target.value);
    setLgaId(evt.target.value);
    const title = lgaData.find((lga) => lga.lga_name === evt.target.value);
    console.log(title.polling_unit_id);
    const polling = lgaData.filter((lga) => {});
    setTitle(title.lga_name);
  };

  //   console.log(lgaData);

  //   useEffect(() => {
  //     fetchData(value);
  //   }, [value]);

  const fetchPollingUnit = async (lgaId) => {
    try {
      const pollingUnit = await axios.get(
        `http://localhost:8080/polling/${lgaId}`
      );
      setData(pollingUnit);
    } catch (err) {
      console.log(err);
    }
  };

  const pu = data.data?.filter((data) => data.lga_id === lgaId);
  console.log(pu);

  //   const fetchPolling = async () => {
  //     try {
  //       const pollingUnit = await axios.get(`http://localhost:8080/polling`);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  useEffect(() => {
    //  fetchPolling();
    fetchPollingUnit(lgaId);
  }, [selectedOption]);

  useEffect(() => {
    fetchLgaNames();
  }, []);

  return (
    <main className="flex-1 bg-gray-800 justify-center items-center h-screen">
      <Link to={"/"}>
        <button className="bg-white absolute p-2 rounded-xl top-5 left-10">
          👈
        </button>
      </Link>
      <h1 className="text-white text-center pt-10 font-bold text-4xl">
        LGA Polling Results
      </h1>
      <div className="mt-7 justify-center items-center">
        <form className="w-full p-20">
          <fieldset>
            <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
              <label htmlFor="frm-whatever" className="sr-only">
                My field
              </label>
              <select
                className="appearance-none w-full py-1 px-2 bg-white"
                name="LGA_names"
                id="frm-whatever"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">Please choose LGA&hellip;</option>
                {lgaData.map((lga) => (
                  <option value={lga.lga_name} key={lga.uniqueid}>
                    {lga.lga_name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="text">
        <>
          {title.length > 0 && (
            <h2 className="font-semibold text-2xl text-yellow-50 pt-5 justify-center text-center">
              LGA #{title}
            </h2>
          )}
        </>
        {data.length > 0 && (
          <div className="flex flex-wrap">
            {data.map((data, index) => (
              <PollUnits
                key={index}
                partyName={data.party_abbreviation}
                partyScore={data.party_score}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default LgaResults;
