import React from 'react';
    
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-dark text-white">
      <h3 className="ml-5">Shopping Store</h3>
        <button className="btn btn-outline-success mr-5 my-2 my-sm-0" onClick={() => props.show()}>CART: {(props.cart.length)}</button>
    </nav>
  );
};
export default Navbar;