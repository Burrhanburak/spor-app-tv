import MovieVideo from "@/components/home/MovieVideo";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import { prisma } from "@/lib/db";

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
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function HomePage() {
  const movieData = await getData();

  return (
    <div className="p-5 lg:p-0">
      <MovieVideo data={movieData} />
      <div className="relative">
        <h1 className="text-3xl font-bold z-20 ">Recently Added</h1>
      </div>
      <RecentlyAdded />
    </div>
  );
}
