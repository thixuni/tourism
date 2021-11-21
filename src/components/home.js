
    function Home(){
        return(
    
<div>
        <div className="hero" style={{background: 'url("img/img_17.jpg") center no-repeat'}}>
          <div className="container">
            <div className="main-heading">
              <h1 className="title">GO.LK</h1>
              <h2 className="subtitle">Visit our GO.LK Apartment</h2>
            </div>
            <a href="/Contact" className="btn btn-gradient">Check it out!
              <span className="dots"><i className="fa fa-ellipsis-h" /></span>
            </a>
          </div>     
        </div>


        <section className="booking">

    <div className="container">
         
          <form action="#" className="book-form">
            <div className="input-group">
              <label htmlFor="name" className="input-label">Name</label>
              <input name="name1" type="text" className="input" id="name" placeholder="Name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email Address</label>
              <input name="email1" type="email" className="input" id="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <label htmlFor="check-in" className="input-label">Check in</label>
              <input name="check-in1" type="date" className="input" id="check-in" placeholder="DD/MM/YYYY" required />
            </div>
            <div className="input-group">
              <label htmlFor="check-out" className="input-label">Check out</label>
              <input name="check-out1" type="date" className="input" id="check-out" placeholder="DD/MM/YYYY" required />
            </div>
            <div className="input-group">
              <label htmlFor="guestno" className="input-label">No. of Guests</label>
              <select name="guestno1" className="options" id="guest" required>
                <option value={0}>No. of Guests</option>
                <option value={0}>1</option>
                <option value={0}>2</option>
                <option value={0}>3</option>
                <option value={0}>4</option>
                <option value={0}>5</option>
                <option value={0}>6</option>
                <option value={0}>7</option>
                <option value={0}>8</option>
                <option value={0}>9</option>
                <option value={0}>10</option>
              </select>
            </div>
            <button name="submit1" type="submit" className="btn form-btn btn-purple"> Book Now!
              <span className="dots"><i className="fa fa-ellipsis-h" /></span>
            </button>
          </form>           
        </div>
      </section>

      <section className="hotels">
        <div className="container">
          <h5 className="section-head">
            <span className="heading">Explore GO.LK</span>
            <span className="sub-heading">Affordable packages in Our Beautiful GO.LK organization</span>
          </h5>
          <div className="grid">
            <div className="grid-item featured-hotel" style={{height: '260px', width: '390px'}}>
              <img src="img/img_2.jpg" alt="image not found" className="hotel-image" style={{height: '256px', width: '384px'}} />
              <h5 className="hotel-name">3 Luxury Bed Rooms </h5>
              <span className="hotel-price">From Rs.15,000/Night</span>
              <div className="hotel-rating">
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
              </div>
              <a href="/Booking" className="btn btn-gradient"> Book now
                <span className="dots"><i className="fa fa-ellipsis-h" /></span>
              </a>
            </div>
            <div className="grid-item featured-hotel" style={{height: '260px', width: '390px'}}>
              <img src="img/img_3.jpg" alt="image not found" className="hotel-image" style={{height: '256px', width: '384px'}} />
              <h5 className="hotel-name">Luxury Halls with deluxe funitures, TV &amp; Free Wifi for Tenants</h5>
              <span className="hotel-price">From Rs.15,000/Night</span>
              <div className="hotel-rating">
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
              </div>
              <a href="/Booking" className="btn btn-gradient"> Book now
                <span className="dots"><i className="fa fa-ellipsis-h" /></span>
              </a>
            </div>
            <div className="grid-item featured-hotel" style={{height: '260px', width: '390px'}}>
              <img src="img/img_4.jpg" alt="image not found" className="hotel-image" style={{height: '256px', width: '384px'}} />
              <h5 className="hotel-name">Rooms, Cooking Utensils, high-sanitary &amp; Parking facilities, Drivers lodging rooms </h5>
              <span className="hotel-price">From Rs.15,000/Night</span>
              <div className="hotel-rating">
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star-half rating" />
              </div>
              <a href="/Booking" className="btn btn-gradient"> Book now
                <span className="dots"><i className="fa fa-ellipsis-h" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="offer" style={{background: 'url("img/30.jpg") center no-repeat'}}>
        <div className="container">
          <div className="offer-content">
            <div className="discount">
              Current Offer!
            </div>
            <h5 className="hotel-name">for Luxury Hotel Rooms</h5>
            <div className="hotel-rating">
              <i className="fa fa-star rating" />
              <i className="fa fa-star rating" />
              <i className="fa fa-star rating" />
              <i className="fa fa-star rating" />
              <i className="fa fa-star rating" />
            </div>
            <p className="paragraph">
              <b>Rs.15,000/- a night (Terms &amp; Conditions Apply), Price may vary due to seasonal demands</b></p>
            <p />
            <a href="/Booking" className="btn btn-gradient"> Book now
              <span className="dots"><i className="fa fa-ellipsis-h" /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h5 className="section-head">
            <span className="heading">Contact</span>
            <span className="sub-heading">Get in touch with us</span>
          </h5>
          <div className="contact-content">
            <div className="traveler-wrap">
              <img src="img/101.jpg" alt="image not found" style={{height: '339px', width: '271px', marginLeft: '100px', borderRadius: '10%', borderColor: 'antiquewhite'}} />
            </div>
           
            <form action="#" className="form contact-form">
              <div className="input-group-wrap">
                <div className="input-group">            
                  <input name="name2" type="text" className="input" placeholder="Name" required />
                  <span className="bar" />
                </div> 
                <div className="input-group">
                  <input name="email2" type="email" className="input" placeholder="E-mail" required />
                  <span className="bar" />
                </div>
              </div>
              <div className="input-group">
                <input name="subject2" type="text" className="input" placeholder="Subject" required />
                <span className="bar" />
              </div>
              <div className="input-group">
                <textarea name="message2" className="input" cols={30} rows={8} placeholder="Message" required defaultValue={""} />
                <span className="bar" />
              </div>
              <button name="submit2" type="submit" className="btn form-btn btn-purple">Send message
                <span className="dots"><i className="fa fa-ellipsis-h" /></span>
              </button>
            </form>
          </div>
        </div>
      </section>

      

      </div>
      
  
      );
    }
    export default Home;