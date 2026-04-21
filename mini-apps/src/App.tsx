import "./App.css";
import Carousel from "./06-carousel/Carousel";
import { useEffect, useState } from "react";
import type { CarouselImage } from "./06-carousel/Carousel.types";

function App() {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const getMockImages = () => {
    return Promise.resolve([
      { id: 1, url: "https://picsum.photos/id/1011/600/400" },
      { id: 2, url: "https://picsum.photos/id/1015/600/400" },
      { id: 3, url: "https://picsum.photos/id/1016/600/400" },
      { id: 4, url: "https://picsum.photos/id/1020/600/400" },
      { id: 5, url: "https://picsum.photos/id/1024/600/400" },
      { id: 6, url: "https://picsum.photos/id/1027/600/400" },
      { id: 7, url: "https://picsum.photos/id/1035/600/400" },
      { id: 8, url: "https://picsum.photos/id/1039/600/400" },
      { id: 9, url: "https://picsum.photos/id/1043/600/400" },
      { id: 10, url: "https://picsum.photos/id/1050/600/400" },
    ]);
  };
  // const fetchImages = async (limit: number = 10) => {
  //   const IMAGE_FETCH_URL = "https://jsonplaceholder.typicode.com/photos";
  //   const params = new URLSearchParams({
  //     _limit: String(limit),
  //   });
  //   const url = `${IMAGE_FETCH_URL}?${params.toString()}`;
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error("Couldnt fetch images");
  //   }
  //   return await response.json();
  // };
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMockImages();
        console.log("data", data);
        setImages(data);
      } catch (err) {
        console.log("err", err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="root-container">
      <Carousel className="flex-1" images={images} />
    </div>
  );
}

export default App;
