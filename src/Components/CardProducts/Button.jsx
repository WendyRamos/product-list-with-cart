import React from "react";
import CartShop from "../../assets/images/icon-add-to-cart.svg";
import IconDecrement from "../../assets/images/icon-decrement-quantity.svg";
import IconIncrement from "../../assets/images/icon-increment-quantity.svg";

function Button({ click, quantity, onIncrement, onDecrement, onAddToCart }) {
  return (
    <div className="absolute bottom-[-20px] w-[65%]">
      {!click ? (
        <button
          className="flex flex-row items-center gap-2  border-2 border-rose-300 rounded-full 
            py-2 px-5 bg-white font-bold text-rose-900 text-xs w-full justify-center cursor-pointer"
          onClick={onAddToCart}
        >
          <img src={CartShop} alt="carShop"></img>Add to Cart
        </button>
      ) : (
        <button
          className="flex flex-row items-center justify-between gap-2 rounded-full 
            py-[10px] px-2 bg-red font-bold text-white text-xs w-full"
        >
      
          <img
            src={IconDecrement}
            alt="Decrement"
            className="border border-white rounded-full w-4 h-4 p-[3px] brightness-0 invert cursor-pointer"
            onClick={onDecrement}
          />
          <span className="font-normal">{quantity}</span>
       
          <img
            src={IconIncrement}
            alt="Increment"
            className="border border-white rounded-full w-4 h-4 p-[3px] brightness-0 invert cursor-pointer"
            onClick={onIncrement}
          />
        </button>
      )}
    </div>
  );
}

export default Button;
