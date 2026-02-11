import React from "react";
import { subscribeButton, subscribeHeading, subscribePara } from "../../../assets/constant";
import { UseAuthContext } from "../../../context/AuthDataContext";
import {addSubscribedUsers} from '../../../service/userService'

const SubscribeBox = () => {
  const {subscribedUserText, setSubscribedUserText} = UseAuthContext()
  console.log(subscribedUserText)

  return (
  <section className="text-center md:py-20">
    <h2 className="text-2xl md:text-4xl font-semibold text-secondary">{subscribeHeading}</h2>
    <p className="text-sm mt-3 mx-10 md:text-lg md:mt-5  text-ternary ">{subscribePara}</p>
    <form>
        <input type="text" value={subscribedUserText} onChange={(e) => setSubscribedUserText(e.target.value)} className="border border-ternary md:w-120 h-9.5 md:h-10.5 bg-none outline-none indent-4" />
        <button className="bg-linear-to-b from-primary to-secondary text-white px-7 py-3 text-xs mt-6 md:text-sm md:px-12 md:py-3 md:mt-10 rounded-tr-lg rounded-br-lg cursor-pointer" onClick={(e) => addSubscribedUsers(e, subscribedUserText, setSubscribedUserText)} >{subscribeButton}</button>
    </form>
  </section>)
};

export default SubscribeBox;
