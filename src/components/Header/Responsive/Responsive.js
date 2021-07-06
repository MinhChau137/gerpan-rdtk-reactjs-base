import React from 'react'

function Responsive({ setMenuState, menuState }) {
  let childMenuState = true;
  let dropdown = document.getElementsByClassName("inner");
  var i;
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const dropdownBtn = this.querySelector(".icon-menu");
      if (childMenuState) {
        dropdownContent.classList = "item-child item__child-hidden";
        dropdownBtn.classList = "icon-menu";
        childMenuState = false;
      } else {
        dropdownContent.classList = "item-child item__child-display";
        dropdownBtn.classList = "icon-menu dropdown-rotate";
        childMenuState = true;
      }
    });
  }
  return (
    <ul className={menuState ? "menu-responsive menu-responsive--display sidenav" : "menu-responsive menu-responsive--hide sidenav"} id="menu-responsive">
      <button className="btn-menu" onClick={() => { setMenuState(state => !state) }}><i className="fas fa-times" /></button>
      <li className="menu-responsive__item item-has-child">
        <div className="inner">
          <div className="content">
            <a href="../home/home.html">Trang chủ</a>
          </div>
          <div className="button icon-menu">
            <button className="dropdown-btn"><i className="fas fa-angle-right" /></button>
          </div>
        </div>
        <ul className="item-child item__child-hidden dropdown-container">
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li className="menu-responsive__item item-has-child">
        <div className="inner">
          <div className="content">
            <a href="../home/home.html">Trang chủ</a>
          </div>
          <div className="button icon-menu">
            <button className="dropdown-btn"><i className="fas fa-angle-right" /></button>
          </div>
        </div>
        <ul className="item-child item__child-hidden dropdown-container">
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
          <li className="menu-responsive__item">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li className="menu-responsive__item">
        <div className="inner">
          <div className="content">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="menu-responsive__item">
        <div className="inner">
          <div className="content">
            <div className="inner">
              <div className="content">
                <a href="../home/home.html">Trang chủ</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="menu-responsive__item">
        <div className="inner">
          <div className="content">
            <div className="inner">
              <div className="content">
                <a href="../main/home.html">Trang chủ</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Responsive
