import React from 'react'
import './SubBannerHeader.css'
import subBanner_1 from "src/assets/images/subBanner_3.png"
import subBanner_2 from "src/assets/images/subBanner_4.png"

function SubBannerHeader() {
  return (
    <div className="wrapper row">
      <div className="card-banner fadeRight col-lg-6 col-12">
        <img src={subBanner_1} alt />
        <div className="infor-card">
          <a href="#" className="title">Đầm</a>
          <a href="#">Shop now</a>
        </div>
      </div>
      <div className="card-banner fadeLeft col-lg-6 col-12">
        <img src={subBanner_2} alt />
        <div className="infor-card">
          <a href="#" className="title">Đầm</a>
          <a href="#">Shop now</a>
        </div>
      </div>
    </div>

  )
}

export default SubBannerHeader
