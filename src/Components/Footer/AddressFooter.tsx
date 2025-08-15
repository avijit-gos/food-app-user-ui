/** @format */

import { useFooterStore } from "@/Store/footer.store";
import React from "react";

const AddressFooter = () => {
  const { address } = useFooterStore();
  return (
    <div className='w-1/2 flex items-center justify-center mx-auto mt-6 text-xs text-gray-50 opacity-70'>
      {address?.address}
    </div>
  );
};

export default AddressFooter;
