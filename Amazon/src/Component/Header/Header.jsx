import React from 'react';
import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <section className='header_container'>
      <section>
        <div className='logo_container'>
          {/*logo*/}
          <a href="#">
            <img src="../../assets/Image/Amazoncom-yellow-arrow.png" alt="amazon logo" />
          </a>
          {/*delivery*/}
          <span><SlLocationPin/></span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div>
          {/*search*/}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search Product" />
          <BsSearch/>
        </div>
        {/* right side link*/}
              <div>
                  <div>
                      <div>
                          <img src='../../assets/Image/Flag_of_the_United_States.png' alt='US flag' />
                          <section>
                              <option value="">
                                  EN
                              </option>
                          </section>
                      </div>
                      {/* three components*/}
                      <a href="">
                          <div>
                              <p>Sign In</p>
                              <span>Account & Lists</span>
                          </div>
                      </a>
                      {/*orders */}
                      <a href=''>
                          <p>Returns</p>
                          <span>& Orders</span>
                      </a>
                      {/*cart*/}
                      <a to="/cart">
                          <BiCart/>
                          <span>0</span>
                      </a>
                  </div>
        </div>
      </section>
    </section>
  );
}

export default Header