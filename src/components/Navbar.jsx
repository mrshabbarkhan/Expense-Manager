import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-info" data-aos="fade-up" data-aos-delay="500">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-light fs-4">
            EX . MANAGER
          </span>
        </div>
      </nav>
      {/* <marquee
        id="nav-line"
        width="80%"
        // direction="left"
        height="100px"
        scrollamount="4">
        This is Khatabook App and it manages all your transactions...
      </marquee> */}
    </>
  );
}

export default Navbar;
