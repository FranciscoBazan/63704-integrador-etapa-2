import './Footer.scss'

const Footer = () => {
  return (
    <footer className="main-footer">
    <div className="social-media">
      <h2 className="social-media__title">Seguínos</h2>
      <ul className="social-media__list">
        <li className="social-media__list-item">
          <a href="#" className="social-media__list-link">{/* <i className="fa-brands fa-facebook" style="color: #ffffff;"></i> */}</a>
        </li>
        <li className="social-media__list-item">
          <a href="#" className="social-media__list-link">{/* <i className="fa-brands fa-instagram" style="color: #ffffff;"></i> */}</a>
        </li>
        <li className="social-media__list-item">
          <a href="#" className="social-media__list-link">{/* <i className="fa-brands fa-tiktok" style="color: #ffffff;"></i> */}</a>
        </li>
        <li className="social-media__list-item">
          <a href="#" className="social-media__list-link">{/* <i className="fa-brands fa-youtube" style="color: #ffffff;"></i> */}</a>
        </li>
      </ul>
    </div>

    <div className="newsletter">
      <h2 className="newsletter__title">Newsletter</h2>
      <form action="#" className="newsletter__form-container">
        <input type="email" className="newsletter__form-email" id="newsletter" placeholder=" " />
        <label htmlFor="newsletter" className="newsletter__form-label">Correo Electrónico</label>
        <button type="submit" className="newsletter__form-button">{/* <i className="fa-solid fa-arrow-right" style="color: #ffffff;"></i> */}</button>
      </form>
    </div>

    <div className="policy">
      <h2 className="policy__title">Políticas</h2>
      <ul className="policy__nav-list">
        <li className="policy__list-item">
          <a href="#" className="policy__list-link">Cómo comprar</a>
        </li>
        <li className="policy__list-item">
          <a href="#" className="policy__list-link">Formas de envío</a>
        </li>
        <li className="policy__list-item">
          <a href="#" className="policy__list-link">Formas de pago</a>
        </li>
        <li className="policy__list-item">
          <a href="#" className="policy__list-link">Cambios y devoluciones</a>
        </li>
      </ul>
    </div>

    <p className="main-footer__derechos">© 2023 Todos los derechos reservados</p>
  </footer>
  )
}

export default Footer