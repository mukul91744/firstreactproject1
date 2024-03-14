import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <>
        <div className="App">
      <header>
        <div className='container'>
        <div className='wrapper'>
        <div className='logo'>IHB Technology</div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/service">Service</Link></li>
        </ul>
        </div>
        </div>
      </header>
    </div>
        </>
    )
}
export default Header;