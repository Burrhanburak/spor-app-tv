import MovieVideo from "@/components/home/MovieVideo";
import RecentlyAdded from "@/components/home/RecentlyAdded";

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <div className="relative">
        <h1 className="text-3xl font-bold z-20 ">Recently Added</h1>
      </div>
      <RecentlyAdded />
    </div>
  );
}
