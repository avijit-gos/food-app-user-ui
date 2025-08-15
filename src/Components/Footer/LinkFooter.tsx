/** @format */

import { useFooterStore } from "@/Store/footer.store";
import React from "react";
import { useNavigate } from "react-router-dom";

const LinkFooter = () => {
  const { footers } = useFooterStore();
  const navigate = useNavigate();
  return (
    <div className=' flex items-center justify-evenly mx-auto w-1/2'>
      {(footers || []).length > 0 && (
        <>
          {footers.map((item) => (
            <section
              key={item._id}
              className='text-[18px] font-sans opacity-80 text-gray-50 font-[500] cursor-pointer hover:opacity-100'
              onClick={() => navigate(item.link)}>
              {item.name}
            </section>
          ))}
        </>
      )}
    </div>
  );
};

export default LinkFooter;
