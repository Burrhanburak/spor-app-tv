import { prisma } from "@/lib/db";
import MovieButtons from "@/components/home/MovieButtons";

async function getData() {
  try {
    const data = await prisma.sport.findFirst({
      select: {
        title: true,
        overview: true,
        videoSource: true,
        imageString: true,
        release: true,
        duration: true,
        id: true,
        age: true,
        youtubeString: true,
      },
    });
    if (!data) {
      console.error("No data found in the database");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function MovieVideo() {
  const data = await getData();

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={data?.imageString || "/fallback-poster.jpg"}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto z-10">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons
            age={data?.age as number}
            duration={data?.duration as number}
            id={data?.id as number}
            overview={data?.overview as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            youtubeUrl={data?.youtubeString as string}
            key={data?.id}
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent" />
    </div>
  );
}
