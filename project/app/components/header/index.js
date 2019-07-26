/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
// import { connect } from 'redux';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          {' '}
        </Link>
        <div className="options">
          <Link className="option" to="/">
            Trang Chủ
          </Link>
          <Link className="option">Tại Sao Chọn 3S</Link>
          <Link className="option">Chương Trình Đào Tạo</Link>
          <Link className="option">Hoạt Động Cộng Đồng</Link>
          <Link className="option-login" type="button" to="/login">
            SIGN IN
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
