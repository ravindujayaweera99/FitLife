import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>
          Fit<span>Life</span> 🏃🏻‍➡️
        </h1>
      </div>
      <div>
        <ul>
          <li>Gym Classes</li>
          <li>Our Trainers</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="buttons">
        <a href="" id="login">Log In</a>
        <a href="" id="register">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
