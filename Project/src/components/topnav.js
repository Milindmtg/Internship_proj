import React from 'react';
import logo from '../images/top-nav-logo.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const divStyle = {
//   // marginLeft : 100,
//   // marginRight :100,
//   marginBottom : 20
// }
export class TopNav extends React.Component {
  render() {
    return (
      <div className = "container">
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
          <img id = "logo" src={logo} width="60" height="60" className="d-inline-block align-top" alt="LOGO" />
        </a>
        <h2>TITLE</h2>
        <h2>User Logged IN</h2>
      </nav>
      </div>);
  }
}
