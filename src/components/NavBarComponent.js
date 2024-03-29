
function NavBar() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        //     <a className="navbar-brand" href="/">GO.LK</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav ml-auto size">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="add-post">Add Post</a>
        //             </li>
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="about">About</a>
        //             </li>                   
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="PayPal">Pay Now</a>
        //             </li>
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="User">Add-detail</a>
        //             </li>
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="Contact">Contact</a>
        //             </li>
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="Sign-in">{<i className="fa fa-google" aria-hidden="true"></i>}</a>
        //             </li>
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="FacebookSign-in">{<i className="fa fa-facebook-official" aria-hidden="true"></i>}</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>

    <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="/" className="logo">
              <img src="img/nav-logo.png" alt="Logo not Found" />
            </a>
            <div className="hamburger-menu">
              <i className="fa fa-bars" />
              <i className="fa fa-times" />
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="PayPal" className="nav-link">Pay</a>
              </li>
              <li className="nav-item">
                <a href="User" className="nav-link">Add-Detail</a>
              </li>
              <li className="nav-item">
                <a href="Contact" className="nav-link">Contact</a>
              </li>
               <li className="nav-item">
                <a href="Sign-in" className="nav-link">{<i className="fa fa-google" aria-hidden="true"></i>}</a>
              </li>
              <li className="nav-item">
                <a href="FacebookSign-in" className="nav-link">{<i className="fa fa-facebook-official" aria-hidden="true"></i>}</a>
              </li>
                <li className="nav-item">
                <a href="Booking" className="nav-link">Booking</a>
              </li>
              <li className="nav-item">
                <a href="add-post" className="nav-link">Admin</a>
              </li>
            </ul>
          </nav>         
        </div>
      </header>
    );
}

export default NavBar;