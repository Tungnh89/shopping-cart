import React from "react";
import CartItem from "./components/Cart";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <NavBar />
      <CartItem />
    </div>
  );
}

export default App;
