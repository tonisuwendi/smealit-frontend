import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    isLoggedIn: true,
    ddProfile: false
  };

  inputFocus = () => {
    let inputNavbar = document.querySelector("nav div.main div.search input");
    let iconSearch = document.querySelector("nav div.main div.search i");

    inputNavbar.addEventListener("focus", function() {
      iconSearch.style.color = "black";
    });

    inputNavbar.addEventListener("focusout", function() {
      iconSearch.style.color = "white";
    });
  };

  showProfile = () => {
    let profile = document.querySelector("nav div.main div.profile");
    if (this.state.ddProfile == false) {
      document.querySelector("nav div.main div.profile i").style.transform =
        "rotate(180deg)";
      this.setState({
        ddProfile: true
      });
    } else {
      document.querySelector("nav div.main div.profile i").style.transform =
        "rotate(0deg)";
      this.setState({
        ddProfile: false
      });
    }
  };

  render() {
    return (
      <Fragment>
        <nav>
          <div className="main">
            <Link to="/">
              <img src="/images/logo/logo.png" alt="logo" className="logo" />
            </Link>
            <div className="search">
              <form action="" method="get">
                <i className="icofont-search"></i>
                {this.state.isLoggedIn ? (
                  <input
                    type="text"
                    placeholder="Cinta yang berlabuh dimusim semi.."
                    className="search search-login"
                    onFocus={this.inputFocus}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Cinta yang berlabuh dimusim semi.."
                    className="search search-logout"
                    onFocus={this.inputFocus}
                  />
                )}
              </form>
            </div>
            {this.state.isLoggedIn ? (
              <Fragment>
                <div className="menu">
                  <Link>Puisi</Link>
                  <Link>Cerpen</Link>
                </div>
                <div className="other-menu">
                  <div className="icon">
                    <i className="fa fa-bell"></i>
                  </div>
                  <div className="icon">
                    <i className="fa fa-comment-alt"></i>
                  </div>
                </div>
                <div className="profile" onClick={this.showProfile}>
                  <div className="avatar">
                    <img src="images/avatar/co6.png" alt="avatar" />
                  </div>
                  <i className="fa fa-angle-down"></i>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="auth">
                  <Link to="/login" className="login">
                    Login
                  </Link>
                  <Link to="register">Daftar</Link>
                </div>
              </Fragment>
            )}
            {this.state.ddProfile == true ? (
              <div className="dropdown-profile">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <i className="icofont-user"></i>
                      </td>
                      <td>
                        <a>Profil saya</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="icofont-comment"></i>
                      </td>
                      <td>
                        <a>Pesan</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="icofont-notification"></i>
                      </td>
                      <td>
                        <a>Pemberitahuan</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="icofont-edit"></i>
                      </td>
                      <td>
                        <a>Edit Profil</a>
                      </td>
                    </tr>
                    <a href="/logout">
                      <tr>
                        <td>
                          <i className="icofont-logout"></i>
                        </td>
                        <td>
                          <a>Keluar</a>
                        </td>
                      </tr>
                    </a>
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </nav>
        <div className="top"></div>
      </Fragment>
    );
  }
}

export default Navbar;
