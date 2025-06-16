import React from "react";
import { Link } from "react-router-dom";

import DropDown from "./DropDown";

const HorizontalCards = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[100%] flex h-[40vh] overflow-x-auto p-3">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[15%] h-[30vh]  mr-5 overflow-y-auto mb-4"
        >
          <img
            src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.posters_path}`}
            alt=""
          />
          <h1 className="p-1 text-white font-semibold text-xl">
            {d.title || d.name || d.original_name || d.original_title}
          </h1>
          <p className=" mt-1 mb-3 text-white">
            {d.overview.slice(0, 70)}..
            <Link className="text-blue-500">more</Link>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
