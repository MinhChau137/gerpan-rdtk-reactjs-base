import React from 'react'

function InforHeader() {
  return (
    <div className="inforHeader">
      <a href="#" className="home" style={{ animationDelay: '0.2s' }}>
        <i className="fas fa-home" />
        Hệ thống cửa hàng
      </a>
      <a href="#" className="phone" style={{ animationDelay: '0.2s' }}>
        <i className="fas fa-phone" />
        CSKH: 0243.9388512
      </a>
    </div>
  )
}

export default InforHeader
