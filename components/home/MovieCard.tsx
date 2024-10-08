"use client";

import { PlayCircle } from "lucide-react";
import PlayVideoModal from "@/components/home/PlayVideoModal";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

export function MovieCard({
  movieId,
  overview,
  title,
  youtubeUrl,
  age,
  time,
  year,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="right-5 top-5 absolute z-10"></div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>

      <PlayVideoModal
        youtubeUrl={youtubeUrl}
        key={movieId}
        href={pathName}
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        age={age}
        duration={time}
        release={year}
      />
    </>
  );
}
