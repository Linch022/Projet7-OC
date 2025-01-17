import logo from "../assets/LOGO-WHITE.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} className="footer__logo" alt="" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </footer>
  )
}

export default Footer