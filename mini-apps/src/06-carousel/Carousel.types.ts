export interface CarouselProps {
  className?: string;
  images: CarouselImage[];
  startIndex?: number;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  objectFit?: "cover" | "contain";
}

export interface CarouselImage {
  id: number;
  url: string;
  alt?: string;
}
