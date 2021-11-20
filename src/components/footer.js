
function Footer(){
    return(

        <footer className="footer" style={{backgroundImage: 'url("img/img_22.jpg")'}}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-content-brand">
              <a href="index.html" className="logo">
                <img className="logo-image" src="img/footer-logo.png" alt="image not found" />
              </a>
              <br /><br />
              <div className="paragraph">
                <p><b>Glen Falls Apartment is one of the Best &amp; well-reputed Hotels in Nuwara Eliya which provides supreme facilities
                    for their customers, tenants with Affordable Price.</b><br /><br />
                  <b>Visit us at:<br />
                    Glenn falls Apartment<br />
                    No 33, Glenfall Street,<br />
                    Nuwara Eliya</b> <br /><br />
                  <b>Contact us:</b><br /><br />
                  <span>
                    <img src="img/phone.png" alt="phone number" />
                    <a href="tel:0777487720 " style={{marginLeft: '20px', fontWeight: 'bold'}} className="footer-link2">
                      077 748 7720 </a>
                    <a href="tel:0765807720 " style={{marginLeft: '10px', fontWeight: 'bold'}} className="footer-link2">
                      076 580 7720 </a>
                  </span> <br /><br />
                  <span className="email-add"><img src="img/email.png" alt="email address" />
                    <a href="mailto:hashirhasmy111@gmail.com " style={{marginLeft: '20px', fontWeight: 'bold'}} className="footer-link2">
                      hameezm@yahoo.com </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="social-media-wrap">
              <h4 className="footer-heading"><b>Follow us</b></h4>
              <div className="social-media">
              
                <a href="https://www.facebook.com/Chill-at-Glen-Falls-2279756385630144/" className="sm-link"><i className="fa fa-facebook-square" /></a>
              </div><br /><br />
            </div>
          </div>
        </div>
        <div className="footer-bot-wrapper">
          © 2021 <b> GO.LK (PVT) Ltd. </b>  All Rights Reserved<br />
          Website Designed and Developed by <a href="mailto:hashirhasmy111@gmail.com" target="_blank" className="footer-link2">
            <b>Frontier Marketing (PVT) Ltd </b></a>
         
        </div>
      </footer>

    );
}

export default Footer;
