/** @format */

import { OPEN_FOOD_MODAL, IMAGE_PATH } from "@/Constants";
import { useFoodStore } from "@/Store/food.store";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon, X } from "lucide-react";
import { getSelectTotalFoodPrice } from "@/Utils";
import MinusIcon from "@/assets/MinusIcon";
import ButtonComp from "../ButtonComponent/ButtonComponent";
import FoodVarityCard from "../FoodCard/FoodVarityCard";
import { IVariety } from "@/Interfaces";

const FoodLinkingModal = () => {
  const { selectFood, setSelectFoodVarity } = useFoodStore();
  const [openFoodModal, setOpenFoodModal] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [disableMinus, setDisableMinus] = useState<boolean>(true);
  const [disablePlus, setDisablePlus] = useState<boolean>(true);
  const [varieties, setVarieties] = useState<IVariety[]>(
    selectFood?.variety ?? []
  );

  useEffect(() => {
    if (selectFood && selectFood.variety) {
      setVarieties(selectFood.variety);
    }
  }, [selectFood?.variety]);

  useEffect(() => {
    const token = PubSub.subscribe(OPEN_FOOD_MODAL, (msg, data) => {
      if (data.message) setOpenFoodModal(true);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  const onClose = () => {
    setOpenFoodModal(false);
    setCount(1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handlePlus = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setDisableMinus(count <= 1);
    setDisablePlus(count >= 10);
  }, [count]);

  const handleSelect = (index: number) => {
    setVarieties((prev) =>
      prev.map((v, i) => ({ ...v, selected: i === index }))
    );
    setSelectFoodVarity(varieties[index]);
  };

  const handleAddToCart = () => {}

  return (
    <>
      {openFoodModal && selectFood && (
        <div
          className='fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn'
          onClick={onClose}>
          <div
            className='bg-white rounded-lg shadow-lg w-screen h-screen animate-scaleIn relative'
            onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className='relative w-screen h-[40vh]'>
              <Button
                className='bg-gray-50/50 hover:bg-gray-50/30 text-black absolute top-1 right-1 cursor-pointer z-70'
                onClick={onClose}>
                <X />
              </Button>
              <img
                src={`${IMAGE_PATH}${selectFood.image}`}
                loading='lazy'
                className='w-full h-[40vh] object-cover filter brightness-90 contrast-125 rounded-t-md bg-black'
              />
            </div>

            <div className='bg-gray-100 w-screen h-[65vh] absolute top-70 left-0 p-3 rounded-3xl'>
              {/* Body */}
              <section className='p-4 text-center leading-none h-[57vh]'>
                <h3 className='text-3xl font-semibold'>{selectFood.name}</h3>
                <h3 className='text-2xl font-semibold text-gray-700'>
                  <>{getSelectTotalFoodPrice(varieties, count)}</>
                </h3>

                {/* Add button */}
                <section className='flex items-center justify-center mt-3'>
                  <Button
                    className={`w-10 h-10 p-0 rounded-full text-balance cursor-pointer mx-1.5 ${
                      disableMinus
                        ? "bg-disable-button hover:bg-disable-button"
                        : "bg-app-primary hover:bg-app-primary"
                    }`}
                    onClick={handleMinus}>
                    <MinusIcon width={32} height={32} stroke='white' />
                  </Button>

                  <h4 className='text-2xl font-semibold mx-2.5'>{count}</h4>

                  <Button
                    className={`w-10 h-10 p-0 rounded-full text-balance cursor-pointer mx-1.5 ${
                      disablePlus
                        ? "bg-disable-button hover:bg-disable-button"
                        : "bg-app-primary hover:bg-app-primary"
                    }`}
                    onClick={handlePlus}>
                    <PlusIcon width={32} height={32} stroke='white' />
                  </Button>
                </section>

                <section className='mt-2 text-left'>
                  {(varieties || []).length > 0 ? (
                    <div className='w-full flex items-center'>
                      {varieties.map((data, index) => (
                        <FoodVarityCard
                          key={data.name}
                          variety={data}
                          onSelect={() => handleSelect(index)}
                        />
                      ))}
                    </div>
                  ) : (
                    <>No variety found for this food item</>
                  )}
                </section>
              </section>

              {/* Footer */}
              <div className='h-[7vh] p-3 flex items-center justify-center'>
                <ButtonComp
                  className='bg-app-primary w-70 h-11 hover:bg-app-primary cursor-pointer'
                  text={`Add to cart`}
                  onClick={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodLinkingModal;
