import "./Contact.css";

export default function Contact() {
  return <section id="contact">
    <h3 className="contact-head">CONTACT</h3>
    <div className="contact">
      <div className="phone">
        <i class="fas fa-mobile-alt fa-3x"></i>
        <h6 style={{ marginTop: '0px' }}>Phone:</h6>
        <h6 style={{ marginTop: '-20px' }}>873-354-6494</h6>
      </div>
      <a style
      ={{textDecoration:"none"}} href="mailto:mounikavojjala@gmail.com"><div className="email">
        <i class="fas fa-envelope fa-3x"></i>
        <h6 style={{ marginTop: '0px', paddingRight: '100px' }}>E-mail:</h6> 
         <h6 style={{ marginTop: '-20px' }}>mounikavojjala@gmail.com</h6> 
      </div></a>
    </div>
  </section>
}

