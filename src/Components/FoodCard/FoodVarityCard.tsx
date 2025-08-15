/** @format */

import { IVariety } from "@/Interfaces";

type FoodVarityProps = {
  variety: IVariety;
  onSelect: () => void;
};

const FoodVarityCard = ({ variety, onSelect }: FoodVarityProps) => {
  return (
    <div
      onClick={onSelect}
      className={`${
        variety.selected
          ? "border-1 border-app-primary"
          : "border-1 border-gray-300"
      } w-fit h-fit p-3 rounded-md m-1.5 min-w-24 text-center cursor-pointer hover:bg-gray-200 transition-all`}>
      <p className='font-semibold text-sm text-gray-600'>{variety.name}</p>
      <p className='text-xs font-medium'>{`₹${variety.price}`}</p>
    </div>
  );
};

export default FoodVarityCard;
