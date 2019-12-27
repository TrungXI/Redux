import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a className="navbar-brand" >Trung</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a >Home</a>
            </li>
            <li>
              <a >Link</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Product;
