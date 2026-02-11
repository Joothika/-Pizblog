import React from "react";
import { AddIcon } from "../../../utils/SvgImages";
import { UsePizzaContext } from "../../../context/PizzaDataContext";
import {insertInputBox,insertInputData,} from "../../../helpers/addNewBlogHelper";
import { UseBlogContext } from "../../../context/BlogDataContext";
import { GetNutrient } from "../../../hooks/GetPizzas";

const Nutrients = () => {
  const {
    placeholderNutrientCount,
    setPlaceholderNutrientCount,
    addNutrientBox,
    setAddNutrientBox,
    addNutrient,
    setAddNutrient,
    placeholderQuantityCount,
    setPlaceholderQuantityCount,
    addQuantityBox,
    setAddQuantityBox,
    addQuantity,
    setAddQuantity,
  } = UsePizzaContext();
  const {nutrientService} = UseBlogContext()
  GetNutrient()

 
  const onHandleClick = (e) => {
    e.preventDefault();
    insertInputBox(
      e,
      placeholderNutrientCount,
      setPlaceholderNutrientCount,
      setAddNutrientBox,
    );
    insertInputBox(
      e,
      placeholderQuantityCount,
      setPlaceholderQuantityCount,
      setAddQuantityBox,
    );
  };

  return (
    <div className="grid">
      <div className="grid grid-rows-auto grid-cols-2 md:mb-4">
        <label
          htmlFor="nutrients"
          className="text-secondary md:text-md  max-sm:mb-4"
        >
          Nutrients
        </label>
        <button onClick={(e) => onHandleClick(e)}>
          <AddIcon
            w={22}
            h={22}
            style={"justify-self-end cursor-pointer md:mt-1"}
          />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-4 md:gap-x-10 align-items-center mb-3">
        <div className="col-start-1 row-start-1">
            {addNutrientBox?.map((boxIndex) => {
                return (
                    <select
                    id={`${'nutrients' + boxIndex}`}
                    key={boxIndex}
                    value={addNutrient[boxIndex]}
                    onChange={insertInputData(boxIndex, addNutrient, setAddNutrient)}
                    placeholder={"nutrient " + (boxIndex + 1)}
                    className={`col-start-1 col-end-1 ${"row-start-" + (boxIndex + 1)}  w-full outline-none border border-ternary h-8 indent-1 text-xs md:text-sm mb-2`}
                    >
                        <option value="choose the no of ingredients">choose the nutrients</option>
                        {
                            nutrientService?.map((nutrient) => <option key={nutrient?._id} value={nutrient?.nutrient}>{nutrient?.nutrient}</option>)
                        }
                    </select>
                );
            })}
        </div>
        <div className="col-start-2 row-start-1">
            {addQuantityBox?.map((boxIndex) => (
            <input
                type="text"
                id={`${'quanity' + boxIndex}`}
                key={boxIndex}
                value={addQuantity[boxIndex]}
                onChange={insertInputData(boxIndex, addQuantity, setAddQuantity)}
                placeholder={"quantity " + (boxIndex + 1)}
                className={` text-sm w-full outline-none border border-ternary indent-2 py-[0.35rem] mb-2`}
            />
            ))}
        </div>

      </div>
    </div>
  );
};

export default Nutrients;
