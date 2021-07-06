import React from 'react'
import logo from "src/assets/images/logo.jpg"
import search from "src/assets/images/search.png"
import account from "src/assets/images/account.png"

function MenuItem({ setMenuState }) {
  return (
    <nav className="menu navbar navbar-expand-lg">
      <a href="#" className="navbar-brand">
        <img src={logo} alt />
      </a>
      <ul className="navbar-nav normal">
        <li className="nav-item animation-delay">
          <a href="#" className="nav-link active">Trang chủ</a>
        </li>
        <li className="nav-item has-child animation-delay">
          <a href="/app/products" className="nav-link">Sản phẩm <i className="fas fa-angle-down" /></a>
          <ul className="child">
            <li className="child-item has-child">
              <a href="#">Đầm <i className="fas fa-angle-right" /></a>
              <ul className="child-fly">
                <li className="child-item"><a href="#">Đầm suông</a></li>
                <li className="child-item"><a href="#">Đầm dáng chữ A</a></li>
                <li className="child-item"><a href="#">Đầm ôm</a></li>
              </ul>
            </li>
            <li className="child-item has-child">
              <a href="#">Áo sơ mi <i className="fas fa-angle-right" /></a>
              <ul className="child-fly">
                <li className="child-item"><a href="#">Dài tay</a></li>
                <li className="child-item"><a href="#">Ngắn tay</a></li>
                <li className="child-item"><a href="#">Áo kiểu</a></li>
              </ul>
            </li>
            <li className="child-item"><a href="#">Áo dài </a></li>
            <li className="child-item has-child">
              <a href="#">Quần <i className="fas fa-angle-right" /></a>
              <ul className="child-fly">
                <li className="child-item"><a href="#">Quần dài</a></li>
                <li className="child-item"><a href="#">Quần short</a></li>
                <li className="child-item"><a href="#">Quần jean</a></li>
              </ul>
            </li>
            <li className="child-item"><a href="#">Bộ đồ mặc nhà</a></li>
          </ul>
        </li>
        <li className="nav-item animation-delay">
          <a href="#" className="nav-link">Sale 70%</a>
        </li>
        <li className="nav-item animation-delay">
          <a href="#" className="nav-link">Bộ sưu tập</a>
        </li>
        <li className="nav-item animation-delay">
          <a href="#" className="nav-link">Sản phẩm hè mới</a>
        </li>
        <li className="nav-item animation-delay">
          <a href="#" className="nav-link">Sale</a>
        </li>
        <li className="nav-item animation-delay">
          <a href="#" className="nav-link">Blog</a>
        </li>
        <ul className="login navbar-nav">
          <li className="nav-item animation-delay has-child search">
            <a href="#" class="nav-link"><i class="fas fa-search"></i></a>
            <div className="input-search child">
              <input type="text" placeholder="Tìm kiếm ... " />
              <a href><i className="fas fa-search" /></a>
            </div>
          </li>
          <li className="nav-item animation-delay user has-child">
            <a href="#" class="nav-link">
              <i class="fas fa-user-circle"></i>
              <p>Tài khoản</p>
            </a>
            <ul className="child user-child">
              <li className="child-item"><a href="#">Đăng nhập</a></li>
              <li className="child-item"><a href="#">Đăng ký</a></li>
            </ul>
          </li>
        </ul>
      </ul>
      <div className="icons-res">
        <div className="nav-item has-child search">
          <a href="#" className="nav-link"><img src={search} alt /></a>
          <div className="input-search child">
            <input type="text" placeholder="Tìm kiếm ... " />
            <a href><i className="fas fa-search" /></a>
          </div>
        </div>
        <button className="btn-menu" onClick={() => { setMenuState(state => !state) }}><i className="fas fa-bars" /></button>
      </div>
    </nav>
  )
}

export default MenuItem
