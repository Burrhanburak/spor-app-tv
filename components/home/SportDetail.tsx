import React from "react";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import Image from "next/image";

interface Sport {
  title: string;
  description?: string;
  imageString?: string;
  videoSource?: string;
  isRecentlyAdded?: boolean;
}

interface Sport {
  title: string;
  description?: string;
  category?: string;
  videoSource?: string;
  imageString?: string;
  metadata?: {
    id: string;
    location: string;
    date: string;
    team1?: string;
    team2?: string;
    score?: string;
  };
  isRecentlyAdded?: boolean;
}

const SportDetail: React.FC<{ sport: Sport }> = ({ sport }) => {
  return (
    <div className="h sport-detail relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group">
      {/* Background Video or Image */}
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
          <Image
            src={sport.imageString}
            alt={sport.title}
            className="w-full h-full object-cover object-center -z-10 brightness-[60%]"
          />
        )
      )}

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-2">{sport.title}</h2>

        {/* Category */}
        {sport.category && (
          <p className="text-lg font-semibold mb-4">
            Category: <span className="text-yellow-300">{sport.category}</span>
          </p>
        )}

        {/* Description */}
        {sport.description && (
          <p className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
            {sport.description}
          </p>
        )}

        {/* Metadata */}
        {sport.metadata && (
          <div className="text-sm opacity-80 mb-4">
            <p>ID: {sport.metadata.id}</p>
            <p>Location: {sport.metadata.location}</p>
            <p>Date: {sport.metadata.date}</p>
            {sport.metadata.team1 && sport.metadata.team2 && (
              <>
                <p>
                  Teams: {sport.metadata.team1} vs {sport.metadata.team2}
                </p>
                <p>Score: {sport.metadata.score || "To be decided"}</p>
              </>
            )}
          </div>
        )}

        {sport.isRecentlyAdded && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            <RecentlyAdded />
          </span>
        )}
      </div>
    </div>
  );
};

// Usage of the component with the fake sport object

export default SportDetail;
