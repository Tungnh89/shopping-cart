import React from "react";
import { useGlobalContext } from "../../context";
import { BsDash, BsPlus } from "react-icons/bs";

const CartItem = () => {
  const { cart, clearItem, remoteItem, increaseItem, decreaseItem } =
    useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="container text-center p-3 capitalize">
        <h3 className="text-purple-400">is currently empty</h3>
      </div>
    );
  }

  return (
    <div className="cart w-full bg-gray-100 pt-6 sm:px-8">
      <div className="container">
        {cart.length &&
          cart.map((item, index) => {
            return (
              <div
                key={index}
                className="p-4 border-t border-b mx-auto mb-1.5 bg-white flex justify-start flex-wrap gap-3"
              >
                <div className="my-auto h-14">
                  <input type="checkbox" className="" />
                </div>

                <div className="w-24">
                  <img src={item.image} alt="image product" />
                  <button
                    type="button"
                    className="text-indigo-500 hover:text-red-700 hover:font-semibold"
                    onClick={() => remoteItem(item._id)}
                  >
                    remote
                  </button>
                </div>

                <div className="">
                  <div className="pb-1.5 capitalize">
                    <h3>{`${item.title.substring(0, 25)}...`}</h3>
                  </div>

                  <div className="bg-gray-100 p-2 rounded text-sm text-gray-400">
                    <span>Phân loại hàng: {item.classify}</span>
                  </div>

                  <div className="w-full flex-col">
                    <div className="text-red-500 my-1.5">
                      {item.price}
                      <sup>đ</sup>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        className="border p-1.5 rounded-l"
                        onClick={() => decreaseItem(item._id)}
                      >
                        <BsDash />
                      </button>

                      <div className="border px-5 py-1">{item.amount}</div>

                      <button
                        type="button"
                        className="border p-1.5 rounded-r"
                        onClick={() => increaseItem(item._id)}
                      >
                        <BsPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="container text-center pt-2 pb-16">
        <button
          type="button"
          className="bg-red-800 px-3 py-1.5 text-white rounded-md font-semibold"
          onClick={clearItem}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
