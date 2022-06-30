import Button from "./Button";
import React, { useState } from "react";
import { backendAPI } from "../lib/backend";
import Spinner from "./Spinner";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import { Icon, ICON_NAMES } from "../lib/icons";

const docs = [
  {
    item: "shirt",
    price: 100,
    sizes: ["S", "M", "L"],
  },
  {
    item: "shoes",
    price: 150,
    sizes: ["m", "l"],
  },
  {
    item: "suit",
    price: 200,
    sizes: "M",
  },
  {
    item: "pant",
    price: 50,
    sizes: "l",
  },
  {
    item: "socks",
    price: 10.25,
    sizes: "s",
  },
];

const code = `const results = await Two.aggregate([
        {
          $match: { sizes: { $in: [/^S$/i, /^M$/i, /^L$/i] } },
        },
        { $unwind: "$sizes" },
        {
          $group: {
            _id: { $toUpper: "$sizes" },
            avgPrice: { $avg: "$price" },
          },
        },
      ]);`;

const TaskTwo = () => {
  //

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});
  const [show, setShow] = useState("none");

  const getSearch = async () => {
    try {
      setLoading(true);
      const { data } = await backendAPI.get("/two");
      setResults(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderShow = () => {
    switch (show) {
      case "none":
        return null;
      case "docs":
        return (
          <div className="flex flex-col space-y-4 relative">
            <div
              className=" h-5 absolute transform top-4 right-2 opacity-40 hover:opacity-90 hover:cursor-pointer"
              onClick={() => setShow("none")}
            >
              <Icon ICON_NAME={ICON_NAMES.X} className="w-5" />
            </div>
            <div className="font-semibold">Documents</div>
            <JSONPretty
              theme="__custom-json-pretty__"
              id="json-pretty"
              data={docs}
            ></JSONPretty>
          </div>
        );
      case "code":
        return (
          <div className="flex flex-col space-y-4 relative">
            <div
              className=" h-5 absolute transform top-4 right-2 opacity-40 hover:opacity-90 hover:cursor-pointer"
              onClick={() => setShow("none")}
            >
              <Icon ICON_NAME={ICON_NAMES.X} className="w-5" />
            </div>
            <div className="font-semibold">Code snippet</div>
            <pre className="pre-code-snippet">
              <code className="code-snippet">{code}</code>
            </pre>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="relative bg-blue_dark min-h-screen overflow-y-scroll scroll w-full flex flex-col space-y-8 py-8 items-center text-white">
      {/* Title */}
      <h1 className="text-8xl font-montserrat font-black ">TASK TWO</h1>
      <section className="px-28 flex flex-col space-y-8">
        {/* Description */}
        <div className="flex flex-col space-y-2">
          <div className="relative h-6">
            <div className="font-bold absolute z-50 top-0.5 right-1.5">
              DESCRIPTION
            </div>
            <div className="w-6 h-6 bg-pink_light bg-opacity-80 absolute right-0"></div>
          </div>
          <p className="text-sm pb-4">
            A MongoDB collection has with predefined documents. Write a MongoDB
            query to calculate average prices of items with the same size and
            sort by average prices
          </p>
          <hr className="w-1/2 opacity-10" />
          {/* Footer note */}
          <div className="flex space-x-4 items-center">
            <p
              onClick={() => setShow("docs")}
              className="text-xs italic opacity-80 tracking-wide hover:underline hover:cursor-pointer"
            >
              Show predefined documents
            </p>
            <p
              onClick={() => setShow("code")}
              className="text-xs italic opacity-80 tracking-wide hover:underline hover:cursor-pointer"
            >
              Show code snippet
            </p>
          </div>

          {renderShow()}
        </div>
        {/* Action */}
        <div className="flex justify-between pb-8 self-end">
          <Button
            onClick={getSearch}
            variant="pink"
            icon={false}
            text="Calculate & Sort"
          />
        </div>
        {/* Content */}
        <div className="">
          {loading ? (
            <div className="py-20">
              <Spinner label="Loading..." className="w-4 h-4" variant="pink" />
            </div>
          ) : !results?.length ? null : (
            <div className="flex flex-col space-y-4">
              <div className="font-semibold">Results</div>
              <JSONPretty
                theme="__custom-json-pretty__"
                id="json-pretty"
                data={results}
              ></JSONPretty>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TaskTwo;
