import Logo from '../../assets/Logo-Dark.png';

export default function Nav() {
  return (
    <div className="nav">
        <div className="nav__logo">
            <img src={Logo} alt="Logo Image" />
            <p>Eduard Precup</p>
        </div>

        <div className="nav__link-list link">
            <a className="link-item link-item--active" href="#home">Home</a>
            <a className="link-item" href="#services">Services</a>
            <a className="link-item" href="#team">Team</a>
            <a className="link-item" href="#projects">Projects</a>
            <a className="link-item" href="#contact">Contact</a>
        </div>

        <div className="nav__hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li><a className="menu__item" href="#">Home</a></li>
            <li><a className="menu__item" href="#">Services</a></li>
            <li><a className="menu__item" href="#">Team</a></li>
            <li><a className="menu__item" href="#">Projects</a></li>
            <li><a className="menu__item" href="#">Contact</a></li>
          </ul>
        </div>
    </div>
  );
}