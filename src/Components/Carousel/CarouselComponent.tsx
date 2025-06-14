/** @format */

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { userBannerStore } from "@/Store/banner.store";
import { useBanner } from "@/Hooks/useBanner";
import { RotateCw } from "lucide-react";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { IMAGE_PATH } from "@/Constants";

const CarouselComponent = () => {
  const { banners } = userBannerStore();
  const { loading, errorMessage } = useBanner();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      {loading ? (
        <div className='embla w-[87vw] mx-auto mb-5 mt-2 h-[65vh] bg-gray-100 rounded-md flex items-center justify-center'>
          <RotateCw className='w-12 h-12 animate-spin' />
        </div>
      ) : errorMessage ? (
        <div className='embla w-[87vw] mx-auto mb-5 mt-2 h-[65vh] bg-gray-50 rounded-md flex items-center justify-center'>
          <ErrorComponent description={errorMessage} />
        </div>
      ) : (
        <>
          {(banners || []).length > 0 ? (
            <div
              className='embla w-[87vw] mx-auto mb-5 mt-2 h-[65vh] overflow-hidden rounded-md'
              ref={emblaRef}>
              <div className='embla__container flex h-full'>
                {banners.map((banner) => (
                  <div
                    key={banner._id}
                    className='embla__slide min-w-full h-full flex-shrink-0'>
                    <img
                      src={`${IMAGE_PATH}${banner.image}`}
                      alt='Banner'
                      className='w-full h-full object-cover rounded-md'
                      loading='lazy'
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className='embla w-[87vw] mx-auto mb-5 mt-2 h-[65vh] bg-gray-50 rounded-md flex items-center justify-center'>
              <ErrorComponent description='No banner data found' />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CarouselComponent;
