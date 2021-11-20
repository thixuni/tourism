
import './Booking.css'

function Booking(){
    return(
            <main>
          
        <h2 style={{textAlign: 'center', fontFamily: 'san-serif', fontSize: '40px'}}>Reservations</h2>  
        <h4 style={{textAlign: 'center', fontFamily: 'Monotype Corsiva', fontSize: '25px', color: '#aaa4a4'}}>Reserve your Booking here</h4><br />
        <section className="booking">
          <div className="container">
            {/* php file will be attached here in action attribute */}
            <form action="#" className="book-form1">
              <div className="input-group">
                <label htmlFor="fname" className="input-label">First Name</label>
                <input name="fname3" type="text" className="input" id="name" placeholder="Enter your First Name" required />
              </div>
              <div className="input-group">
                <label htmlFor="lname" className="input-label">Last Name</label>
                <input name="lname3" type="text" className="input" id="name" placeholder="Enter your Last Name" required />
              </div>
              <div className="input-group">
                <label htmlFor="email" className="input-label">Email Address</label>
                <input name="email3" type="email" className="input" id="email" placeholder="Enter your Email Address" required />
              </div>
              <div className="input-group">
                <label htmlFor="check-in" className="input-label">Check in</label>
                <input name="check-in3" type="date" className="input" id="check-in" placeholder="check-in" required />
              </div>
              <div className="input-group">
                <label htmlFor="check-out" className="input-label">Check out</label>
                <input name="check-out3" type="date" className="input" id="check-out" placeholder="DD/MM/YYYY" required />
              </div>
              <div className="input-group">
                <label htmlFor="roomno" className="input-label">No. of Rooms</label>
                <select name="roomno3" className="options" id="guest" required>
                  <option value={0}>No. of Rooms</option>
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
              <div className="input-group">
                <label htmlFor="guestno" className="input-label">No. of Guests</label>
                <select name="guestno3" className="options" id="guest" required>
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
              <div className="input-group">
                <label htmlFor="message" className="input-label">Messsage</label>
                {/* <input name="message3" type="text" class="input" id="name" placeholder="Message" required> */}
                <textarea name="message3" className="input" cols={30} rows={8} placeholder="Message" required defaultValue={""} />
              </div>
              <button name="submit3" type="submit" className="btn form-btn btn-purple" id="btnbook"> Book Now!
                <span className="dots"><i className="fa fa-ellipsis-h" /></span>
              </button>
            </form>           
          </div>
        </section>
      </main>
    );
}

export default Booking;