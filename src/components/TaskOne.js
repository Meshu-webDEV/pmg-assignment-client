import Button from "./Button";
import React, { useState } from "react";
import { backendAPI } from "../lib/backend";
import Spinner from "./Spinner";
import TaskOneItem from "./TaskOneItem";

const TaskOne = () => {
  //

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});
  const [terms, setTerms] = useState([
    "ariana",
    "taylor",
    "billie",
    "ed",
    "shawn",
    "dua",
    "selena",
    "camila",
    "bruno",
    "justin",
  ]);

  const getSearch = async () => {
    try {
      setLoading(true);
      const { data } = await backendAPI.get(`/one/?singers=${terms.join(",")}`);
      setResults(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderResults = () => {
    return results.simple.map((result, i) => (
      <TaskOneItem key={i} data={result} />
    ));
  };

  return (
    <div className="relative bg-blue_light min-h-screen overflow-y-scroll scroll w-full flex flex-col space-y-8 py-8 items-center text-white">
      {/* Title */}
      <h1 className="text-8xl font-montserrat font-black ">TASK ONE</h1>
      <section className="px-28 flex flex-col space-y-8">
        {/* Description */}
        <div className="flex flex-col space-y-2">
          <div className="relative h-6">
            <div className="font-bold absolute z-50 top-0.5 left-1.5">
              DESCRIPTION
            </div>
            <div className="w-6 h-6 bg-purple_light bg-opacity-80 absolute inset-0"></div>
          </div>
          <p className="text-sm pb-4">
            For each of the 10 predefined singer names, use Apple iTunes API to
            get search results, One search request for every singer name.
            Combine all of those 10 search results and sort by
            "primaryGenreName" first and then sort by "releaseDate" from
            earliest to latest in every primary genre name group.
          </p>
          <hr className="w-1/2 opacity-10" />
          {/* Footer note */}
          <p className="text-xs italic opacity-80 tracking-wide">
            <span className="font-medium">Predefined singer names:</span>{" "}
            ariana, taylor, billie, ed, shawn, dua, selena, camila, bruno,
            justin
          </p>
        </div>
        {/* Action */}
        <div className="flex justify-between pb-8">
          <Button
            onClick={getSearch}
            variant="purple"
            icon={false}
            text="Search"
          />
        </div>
        {/* Content */}
        <div className="">
          {loading ? (
            <div className="py-20">
              <Spinner label="Loading..." className="w-4 h-4" />
            </div>
          ) : !results.detailed?.length ? null : (
            <div className="flex flex-col space-y-14 pr-1">
              {renderResults()}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TaskOne;
