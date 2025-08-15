/** @format */

import { useFooterStore } from "@/Store/footer.store";
import React from "react";
import { IMAGE_PATH } from "@/Constants";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";

const SocialFooter = () => {
  const { socials } = useFooterStore();
  return (
    <div className='p-3 my-1 flex items-center justify-center'>
      {/* Play store icons */}
      <div className='w-1/2 h-full'>
        {(socials || []).length > 0 && (
          <section className='w-full flex items-center'>
            {socials.map((item) => (
              <section key={item._id}>
                {item?.name?.includes("Play") && (
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    <img
                      src={`${IMAGE_PATH}${item.image}`}
                      alt={item.name}
                      className='w-28 h-8 m-1 transition duration-300 ease-in-out'
                    />
                  </a>
                )}
              </section>
            ))}
          </section>
        )}
      </div>

      {/* Social media */}
      <div className='w-1/2 h-full flex justify-end'>
        {(socials || []).length > 0 && (
          <section className='w-full flex items-center justify-end gap-4'>
            {socials.map((item) => (
              <section key={item._id}>
                {!item?.name?.includes("Play") && (
                  <>
                    {item?.name && (
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className=''>
                        <img
                          src={
                            item.name === "Facebook"
                              ? `${Facebook}`
                              : item.name === "Twitter"
                              ? `${Twitter}`
                              : item.name === "Youtube"
                              ? `${Youtube}`
                              : ``
                          }
                          alt={item.name}
                          className='w-[18px] h-[18px] m-1 transition duration-300 ease-in-out'
                        />
                      </a>
                    )}
                  </>
                )}
              </section>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default SocialFooter;
