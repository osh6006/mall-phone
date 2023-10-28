"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Billboard } from "@/type";
import useMount from "@/hooks/useMount";

interface BannerProps {
  data: Billboard[];
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const { isMounted } = useMount();

  if (!isMounted) return null;

  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      showIndicators
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      className="p-4"
    >
      {data?.map((banner) => {
        return (
          <div
            key={banner.imageURL}
            className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            style={{ background: `url(${banner?.imageURL})` }}
          >
            <div className="w-full h-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                {banner.label}
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
  {
    /* </div> */
  }
};

export default Banner;
