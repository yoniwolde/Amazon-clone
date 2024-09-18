import React, { useContext } from 'react';
import "./Header.css";
import {Link} from "react-router-dom"
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import {DataContext} from "../DataProvider/DataProvider"

function Header() {

  const [{ basket }, dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  },0)
  
  return (
    <section className="fixed">
      <section>
        <div className="header_container">
          {/*logo*/}
          <div className="logo_container">
            <Link to="/">
              <img
                src="https://wallpapers.com/images/hd/amazon-logo-black-background-xb9pdemosnjfz9ej.jpg"
                alt="amazon logo"
              />
            </Link>
            <div className="delivery">
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className="search">
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search Product" />
            <BsSearch size={25} />
          </div>
          {/* right side link*/}
          <div className="order_container">
            <Link to="/orders" className="language">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="US flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components*/}
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/payments">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className="cart">
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header