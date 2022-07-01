import React from "react";
import { Icon, ICON_NAMES } from "../lib/icons";
import { formatDate } from "../lib/utils";

const TaskOneItem = ({ data, index }) => {
  const determineIcon = (kind) => {
    switch (kind) {
      case "song":
        return <Icon ICON_NAME={ICON_NAMES.MUSIC} className="w-4 h-4" />;
      case "feature-movie":
        return <Icon ICON_NAME={ICON_NAMES.MOVIE} className="w-4 h-4" />;
      case "tv-episode":
        return <Icon ICON_NAME={ICON_NAMES.TV} className="w-4 h-4" />;
      case "podcast":
        return <Icon ICON_NAME={ICON_NAMES.PODCAST} className="w-4 h-4" />;
      default:
        return <div className="h-4 w-4 bg-white"></div>;
    }
  };

  return (
    <div className="relative flex bg-blue_dark pl-5">
      <div className="absolute p-2 bg-blue_dark bottom-full left-0">
        <div className="flex space-x-2 justify-center items-center">
          <span className="opacity-75">{determineIcon(data.kind)}</span>
          <span className="text-sm capitalize">{data.kind}</span>
        </div>
      </div>
      <div className="absolute pr-2 right-full font-bold font-montserrat text-lg">
        #{index + 1}
      </div>
      {/* first */}
      <div className="flex flex-col py-3 grow">
        <a
          href={data.collectionViewUrl}
          target="_blank"
          className="text-xs font-light border-white hover:underline"
        >
          {data.collectionName}
        </a>
        <a
          href={data.trackViewUrl}
          target="_blank"
          className="font-semibold text-2xl leading-none hover:underline"
        >
          {data.trackName}
        </a>
        <span className="rounded-full whitespace-nowrap max-w-max bg-gray-700 px-3 py-0.5 text-xs mt-3">
          {data.primaryGenreName}
        </span>
      </div>
      {/* second */}
      <div className="flex flex-col justify-end items-center shrink px-8">
        <span className="font-sans text-xs font-light opacity-70 tracking-wider py-1">
          {formatDate(data.releaseDate, false)}
        </span>
      </div>
      {/* third */}
      <img
        className="shrink aspect-square w-16 object-cover"
        style={{ maxWidth: "66px" }}
        src={data.artworkUrl100}
        alt="track artwork"
      />
    </div>
  );
};

export default TaskOneItem;
