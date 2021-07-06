import React from 'react'
import './Footer.css'
import methodPay_1 from "src/assets/images/bct.webp"
import methodPay_2 from "src/assets/images/image_method_3.webp"

function Footer() {
  return (
    <footer>
      <div>
        <div className="logup">
          <div className="logup-wrapper">
            <h1>ĐĂNG KÝ BẢN TIN</h1>
            <h6>Đăng ký nhận bản tin NEM để được cập nhật những mẫu thiết kế mới nhất</h6>
            <div className="input">
              <input type="text" placeholder="Vui lòng nhập email..." />
              <button>Đăng ký</button>
            </div>
            <ul className="icons">
              <li className="facebook">
                <a href="#"><i className="fab fa-facebook-f" /></a>
              </li>
              <li className="instagram">
                <a href="#"><i className="fab fa-instagram" /></a>
              </li>
              <li className="youtube">
                <a href="#"><i className="fab fa-youtube" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="infor">
          <div className="infor-wrapper row">
            <ul className="infor-main infor-item col-lg-4 col-md-6 col-12">
              <h2 className="brand">NEM FASHION - THỜI TRANG CÔNG SỞ</h2>
              <p className="name">Công ty TNHH Dịch vụ và Thương mại An Thành.</p>
              <p className="num">Số ĐKKD 0107861393, Sở KHĐT Tp. Hà Nội cấp ngày 04/10/2017</p>
              <p className="address">Địa chỉ: Phòng 1002, tầng 10, Tòa nhà NEM số 545 đường Nguyễn Văn Cừ, P. Gia Thụy, Q. Long Biên, Hà Nội</p>
              <p className="phone">Hotline: <a href="#">024 3938 8512</a></p>
              <p className="email">Email: nemcskh@stripe-vn.com</p>
            </ul>
            <ul className="infor-item infor-intro col-lg-2 col-md-6 col-12">
              <li><a href="#">NEM's Blog</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Hộ thống showroom</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
            <ul className="infor-item col-lg-3 col-md-6 col-12">
              <li><a href="#">Chính sách giao nhận - Vận chuyển</a></li>
              <li><a href="#">Hướng dẫn thanh toán</a></li>
              <li><a href="#">Tra cứu đơn hàng</a></li>
              <li><a href="#">Hướng dẫn chọn size</a></li>
              <li><a href="#">Quy định đổi hàng</a></li>
              <li><a href="#">Quy định bảo hành và sửa chữa</a></li>
              <li><a href="#">Khách hàng thân thiết</a></li>
            </ul>
            <ul className="infor-item col-lg-3 col-md-6 col-12">
              <p>Phương thức thanh toán</p>
              <div class="images">
                <a href="#"><img src={methodPay_1} /></a>
                <a href="#"><img src={methodPay_2} /></a>
              </div>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
