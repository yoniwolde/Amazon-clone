import React from 'react';
import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <>
      <section>
        <div className="header_container">
          {/*logo*/}
          <div className="logo_container">
            <a href="#">
              <img
                src="https://wallpapers.com/images/hd/amazon-logo-black-background-xb9pdemosnjfz9ej.jpg"
                alt="amazon logo"
              />
            </a>
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
            <div className='order_container'>
              <a href='' className='language'>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                  alt="US flag"
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </a>
              {/* three components*/}
              <a href="">
                <div>
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                </div>
              </a>
              <a href="">
                <p>Returns</p>
                <span>& Orders</span>
              </a>
              <a href='' className='cart' >
                <BiCart size={35} />
                <span>0</span>
              </a>
            </div>
          </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header