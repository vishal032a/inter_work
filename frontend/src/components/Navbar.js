import { Link, Routes,Route} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-ul">
        <li>Categories</li>
        <li>
          <Link to="/Deals">Deals</Link>
        </li>
        <li>
          <Link to="/whats">What's new</Link>
        </li>
      </ul>
      <Routes>
        <Route  path="/Deals" element={<h1>this is Deals section</h1>}/>
        <Route  path="/whats" element={<h1>this is Whatsnew Section section</h1>}/>
      </Routes>
    </div>
  );
};

export default Navbar;
