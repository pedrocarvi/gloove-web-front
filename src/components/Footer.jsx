import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        id="colophon"
        className="site-footer footer-primary"
        style={{ backgroundColor: "white" }}
      >
        {/* <div className="top-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget_text">
                    <h3 className="widget-title">About Travel</h3>
                    <div className="textwidget widget-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </div>
                    <div className="award-img">
                      <a href="#">
                        <img src="./images/logo6.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="./images/logo2.png" alt="" />
                      </a>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget_text">
                    <h3 className="widget-title">CONTACT INFORMATION</h3>
                    <div className="textwidget widget-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-phone-alt"></i>
                            +01 (977) 2599 12
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-envelope"></i>
                            company@domain.com
                          </a>
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>
                          3146 Koontz, California
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget_recent_post">
                    <h3 className="widget-title">Latest Post</h3>
                    <ul>
                      <li>
                        <h5>
                          <a href="#">
                            Life is a beautiful journey not a destination
                          </a>
                        </h5>
                        <div className="entry-meta">
                          <span className="post-on">
                            <a href="#">August 17, 2021</a>
                          </span>
                          <span className="comments-link">
                            <a href="#">No Comments</a>
                          </span>
                        </div>
                      </li>
                      <li>
                        <h5>
                          <a href="#">
                            Take only memories, leave only footprints
                          </a>
                        </h5>
                        <div className="entry-meta">
                          <span className="post-on">
                            <a href="#">August 17, 2021</a>
                          </span>
                          <span className="comments-link">
                            <a href="#">No Comments</a>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </aside>
                </div>
                <div className="col-lg-3 col-md-6">
                  <aside className="widget widget_newslatter">
                    <h3 className="widget-title">SUBSCRIBE US</h3>
                    <div className="widget-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <form className="newslatter-form">
                      <input type="email" name="s" placeholder="Your Email.." />
                      <input type="submit" name="s" value="SUBSCRIBE NOW" />
                    </form>
                  </aside>
                </div>
              </div>
            </div>
          </div> */}
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <aside
                  className="widget widget_text"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    padding: "0px",
                    height: "100%",
                  }}
                >
                  {/* <h3 className="widget-title">About Travel</h3> */}
                  <div className="">
                    <Link to="/">
                      <img
                        src="./images/GLOOVE_marca_tagline_COL.png"
                        alt=""
                        style={{ width: "75%", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div
                    className="textwidget widget-text"
                    style={{
                      marginTop: "20px",
                      fontSize: "20px",
                      textAlign: "center",
                      padding: "0px",
                      color: "#156B7A",
                    }}
                  >
                    GESTIONAMOS TUS VIVIENDAS TURÍSTICAS CON EL MEJOR SERVICIO Y
                    TECNOLOGÍA DEL MERCADO
                  </div>
                </aside>
              </div>
              <div className="col-lg-4 col-md-6">
                <aside className="widget widget_text" style={{height: "100%"}}>
                  {/* <h3 className="widget-title">CONTACT INFORMATION</h3> */}
                  <div className="textwidget widget-text" style={{height: "100%"}}>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                    <ul style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "100%"}}>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <Link to="/" style={{ color: "#156B7A" }}>
                        Inicio
                        </Link>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <Link to="/booking" style={{ color: "#156B7A" }}>
                        Reservas
                        </Link>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <Link to="/tour" style={{ color: "#156B7A" }}>
                        Experiencias
                        </Link>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="https://gloove.me/sobre-nosotros/" target="_blank" style={{ color: "#156B7A" }}> Sobre nosotros</a>

                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="https://gloove.me/blog/" style={{ color: "#156B7A"}} target="_blank"> Blog</a>

                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="https://gloove.me/contacto/" target="_blank" style={{ color: "#156B7A" }} > Contacto </a>
                      </li>
                      {/* <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="#" style={{ color: "#156B7A" }}>
                          CONTACTANOS
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="col-lg-4 col-md-6">
                <aside className="widget widget_recent_post" style={{display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
                  <h3
                    className=""
                    style={{ textAlign: "center", color: "#156B7A", marginBottom: "0px" }}
                  >
                    SIGUENOS EN:
                  </h3>
                  <ul style={{height: "80%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "0px",
                        padding: "0px",
                      }}
                    >
                      {/* <h5>
                          <a href="#">
                            Life is a beautiful journey not a destination
                          </a>
                        </h5>
                        <div className="entry-meta">
                          <span className="post-on">
                            <a href="#">August 17, 2021</a>
                          </span>
                          <span className="comments-link">
                            <a href="#">No Comments</a>
                          </span>
                        </div> */}
                        <a href="https://www.facebook.com/profile.php?id=100090425376184" target="_blank">
                          <img
                            src="./images/happy (9).png"
                            alt=""
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor: "#156B7A",
                            }}
                          />
                        </a>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "0px",
                        padding: "0px",
                      }}
                    >
                      <a href="https://www.linkedin.com/company/gloove-gestor-turistico/?viewAsMember=true" target="_blank">
                        <img
                          src="./images/happy (6).png"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#156B7A",
                          }}
                        />
                      </a>
                    </li>
                    {/* <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "0px",
                        padding: "0px",
                      }}
                    >
                      <img
                        src="./images/happy (7).png"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#156B7A",
                        }}
                      />
                    </li> */}
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "0px",
                        padding: "0px",
                      }}
                    >
                      <a href="https://www.instagram.com/gloove_me/" target="_blank">
                        <img
                          src="./images/happy (8).png"
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#156B7A",
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className="buttom-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="https://gloove.me/politica-de-privacidad/" target="_blank">Política de Privacidad</a>
                    </li>
                    <li>
                      <a href="#">Términos y condiciones</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div className="footer-logo">
                  <a href="#" style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                      src="./images/GLOOVE_marca_tagline_blanco.png"
                      alt=""
                      style={{width: "75%"}}
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="copy-right text-right">
                  Copyright © 2024 Gloove. Todos los derechos reservados
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
