import logo from "../assets/travel-logo.png"

function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--logo" />
      <h4 className="nav--text">My Travel Journal.</h4>
    </nav>
  )
}

export default Navbar