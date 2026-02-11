import React from "react";
import { UseBlogContext } from "../../context/BlogDataContext";
import { notFound, refresh } from "../../assets/constant";

const NotFound = () => {
   const { setVariety, setIngredient, setNotFound, setSearchedText } = UseBlogContext() 

    const onRefresh = (e) => {
        e.preventDefault()
        setVariety('')
        setIngredient(null)
        setNotFound('')
        setSearchedText('')
    }
 
  return (
    <section className="text-center border border-ternary/40 rounded-lg py-9 mx-auto mt-10 md:mt-25 w-2/3 md:w-1/3">
      <h3 className="text-red-700 text-2xl md:text-3xl">{notFound}</h3>
      <button className="border-2 border-primary bg-primary/20 text-secondary rounded-full cursor-pointer px-4 md:px-6 py-2 md:py-2 mt-5 md:mt-10" onClick={(e) => onRefresh(e)}>
        {refresh}
      </button>
    </section>
  );
};

export default NotFound;
