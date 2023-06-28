import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="contact-about grid">
        <section className="about">
          <h3>Bienvenidos a Shopper's Paradise</h3>
          <p>
            En el presente trabajo aplicamos lo aprendido sobre Html, Css y
            Javascript para realizar un E-Comerce sobre ropa y zapatillas.
          </p>
          <p>
            Se puede ver distintas pestañas en las que se clasifican los
            productos y se da una vista de los mismos.
          </p>
          <p>
            Tambien realizamos un apartado para el carrito de compras donde se
            añadiran uno a uno los productos elegidos y finalmente haremos una
            simulación de pago.
          </p>
        </section>
        <section>
          <h3>Contáctanos</h3>
          <div className="email-hours">
            <a href="mailto:contacto@shoppersparadise.com.pe">
              contacto@shoppersparadise.com.pe
            </a>
            <p id="hours">[L-V: 9:00AM - 6:00PM]</p>
          </div>
          <div className="social-media">
            <p>Síguenos en nuestras redes sociales</p>
            <div className="social-media-icons">
              <a href="" className="fab fa-facebook"></a>
              <a href="" className="fab fa-instagram"></a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
