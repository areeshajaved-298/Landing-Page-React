function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">CameraStore</h2>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>

      <button className="nav-btn">Shop Now</button>
    </nav>
  );
}

export default Navbar;
