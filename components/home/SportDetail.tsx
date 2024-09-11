import React from "react";
import RecenctlyAdded from "@/components/home/RecentlyAdded";

interface Sport {
  title: string;
  description?: string;
  imageString?: string;
  videoSource?: string;
  isRecentlyAdded?: boolean;
}

const SportDetail: React.FC<{ sport: Sport }> = ({ sport }) => {
  return (
    <div className="sport-detail relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group">
      {sport.videoSource ? (
        <video
          poster={sport.imageString || "/fallback-poster.jpg"}
          autoPlay
          playsInline
          muted
          loop
          src={sport.videoSource}
          className="w-full absolute top-0 left-0 h-full object-cover -z-10 brightness-[60%]"
        ></video>
      ) : (
        sport.imageString && (
          <img
            src={sport.imageString}
            alt={sport.title}
            className="w-full h-full object-cover object-center"
          />
        )
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h2 className="sport-title text-2xl font-bold mb-2">{sport.title}</h2>
        {sport.description && (
          <p className="sport-description text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {sport.description}
          </p>
        )}
        {sport.isRecentlyAdded && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            <RecenctlyAdded />
          </span>
        )}
      </div>
    </div>
  );
};

export default SportDetail;
