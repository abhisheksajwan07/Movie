import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./Templates/TopNav";
import DropDown from "./Templates/DropDown";
import Cards from "./Templates/Cards";
import axios from "./Utils/axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "SCSDB | Trending";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      console.log("Has More Data: ", hasMore);
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
      console.log("Fetching page:", page);
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };
  useEffect(() => {
    refreshHandler();
    console.log("Trending Data: ", trending);
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className=" py-1 w-screen h-screen overflow-auto">
      <div className="px-[5%] w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav className="pr-3" />
          <DropDown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <DropDown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
        scrollThreshold={0.9}  
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
